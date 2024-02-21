import React, { useState, useEffect } from "react";

function Transport({ searchTerm, searchOption }) {
  const [transports, setTransports] = useState([]);
  const [extraTransports, setExtraTransports] = useState([]);
  const [filteredTransports, setFilteredTransports] = useState([]);
  const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [trainData, setTrainData] = useState([]);
  const [busesData, setBusesData] = useState([]);
  const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch(`http://127.0.0.1:8000/transport/`),
          fetch(`http://127.0.0.1:8000/extra_transport/`)
        ]);
        const [transport, extraTransport] = await Promise.all(
          responses.map((response) => response.json())
        );

        setTransports(transport);
        setExtraTransports(extraTransport);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

  const fetchTrainData = async () => {
    try {
      let geocodeApiUrl;
      if (searchTerm.trim() !== '') {
        if (searchOption === 'state') {
          geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
        } else {
          geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
        }
        const geocodeResponse = await fetch(geocodeApiUrl);
        const geocodeData = await geocodeResponse.json();
        const placeId = geocodeData.results[0]?.place_id;

        if (placeId) {
          const busUrl = `https://api.geoapify.com/v2/places?categories=public_transport.bus&filter=place:${encodeURIComponent(placeId)}&limit=10&apiKey=${API_KEY}`;
          const trainUrl = `https://api.geoapify.com/v2/places?categories=public_transport.train&filter=place:${encodeURIComponent(placeId)}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const [busResponse, trainResponse] = await Promise.all([fetch(busUrl), fetch(trainUrl)]);
          const [busesData, trainData] = await Promise.all([busResponse.json(), trainResponse.json()]);

          setBusesData(busesData);
          setTrainData(trainData);
        }
      }
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };

  useEffect(() => {
    const filteredTransportsResult = transports.filter(
      (transport) =>
        transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transport.county.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredExtraTransportsResult = extraTransports.filter(
      (transport) =>
        transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transport.county.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTransports(filteredTransportsResult);
    setFilteredExtraTransports(filteredExtraTransportsResult);
    setSearchButtonClicked(true);

    fetchTrainData()
  }, [searchTerm, transports, extraTransports]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReturnToMenu = () => {
    setSelectedCategory(null);
  };

  const renderTransportsByCategory = () => {
    let dataForCategory = [];
    switch (selectedCategory) {
      case 'Dublin Buses':
        dataForCategory = filteredTransports;
        break;
      case 'Bus Eireann':
        dataForCategory = filteredExtraTransports;
        break;
      case 'Bus Stops':
        dataForCategory = busesData.features;
        break;
      case 'Train Stations':
        dataForCategory = trainData.features;
        break;
      default:
        break;
    }

    return (
      <div>
        <button className="btn btn-primary" onClick={handleReturnToMenu}>
          Return to Transport Menu
        </button>
        <h2>{selectedCategory}</h2>
        {dataForCategory.length > 0 ? (
          selectedCategory === 'Train Stations' || selectedCategory === 'Bus Stops' ? (
            dataForCategory.map((result) => (
              <div className="card" key={result.properties.place_id}>
                <div className="card-body">
                  <h5 className="card-title">{result.properties.name}</h5>
                  <p className="card-text">Address: {result.properties.formatted}</p>
                  <p className="card-text">Eircode: {result.properties.postcode}</p>
                  {selectedCategory === 'Train Stations' && (
                    <>
                      <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
                      <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            dataForCategory.map((result) => (
              <div className="card" key={result.id}>
                <div className="card-body">
                  <p className="card-title"><strong>Bus:</strong> {result.bus}</p>
                  <p className="card-text"><strong>First Stop:</strong> {result.route_from}</p>
                  <p className="card-text"><strong>Last Stop:</strong> {result.route_to}</p>
                  <p className="card-text"><strong>County:</strong> {result.county}</p>
                </div>
              </div>
            ))
          )
        ) : (
          <p>No {selectedCategory} Found in {capitalSearchTerm}</p>
        )}
      </div>
    );
  };

  return (
    <div className="transport-container">
      <h1>Transportation Information for {capitalSearchTerm}</h1>
      {!selectedCategory ? (
        <div>
          <div className="result-section">
            <h2 className="category" onClick={() => handleCategoryClick('Dublin Buses')}>Dublin Buses</h2>
            <h2 className="category" onClick={() => handleCategoryClick('Bus Eireann')}>Bus Eireann</h2>
            <h2 className="category" onClick={() => handleCategoryClick('Bus Stops')}>Bus Stops</h2>
            <h2 className="category" onClick={() => handleCategoryClick('Train Stations')}>Train Stations</h2>
          </div>
        </div>
      ) : (
        renderTransportsByCategory()
      )}
    </div>
  );
}

export default Transport;
