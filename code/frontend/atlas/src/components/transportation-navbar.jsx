import React, { useState, useEffect } from 'react';
import Footer from './footer';

function TransportNav() {
  const [transports, setTransports] = useState([]);
  const [extraTransports, setExtraTransports] = useState([]);
  const [trainsData, setTrainData] = useState([]);
  const [busesData, setBusesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransports, setFilteredTransports] = useState([]);
  const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

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
        console.error("Error fetching transport data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchTrainData = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
        const geocodeResponse = await fetch(geocodeApiUrl);
        const geocodeData = await geocodeResponse.json();
        const placeId = geocodeData.results[0]?.place_id;

        if (placeId) {
          
          const busUrl = `https://api.geoapify.com/v2/places?categories=public_transport.bus&filter=place:${encodeURIComponent(placeId)}&limit=20&apiKey=${API_KEY}`;
          const trainUrl = `https://api.geoapify.com/v2/places?categories=public_transport.train&filter=place:${encodeURIComponent(placeId)}&limit=20&apiKey=${API_KEY}`;

          const [busResponse, trainResponse] = await Promise.all([fetch(busUrl), fetch(trainUrl)]);
          const [busesData, trainsData] = await Promise.all([busResponse.json(), trainResponse.json()]);

          setBusesData(busesData);
          setTrainData(trainsData);
        }
      }
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };

  const handleSearch = () => {
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

    fetchTrainData();
  };

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <div className="container mt-4 ">
      <div className="mb-3"></div>
        <label htmlFor="searchTerm" className="form-label">
          Search by Locality or Country:
        </label>
        <div className="input-group">
            <input
                type="text"
                id="searchTerm"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="btn btn-primary" onClick={handleSearch}>
                Search
            </button>
          </div>
        </div>
    
    <div className="row">
         <div className="col-md-6">
          <div className="section-container flex-grow-1">
          <div className="transport-info">
            <h2>Bus Information</h2>
            {busesData.features && busesData.features.map((result) => (
              <div className="card" key={result.properties.place_id}>
                <div className="card-body">
                  <h5 className="card-title">{result.properties.name}</h5>
                  <p className="card-text">Address: {result.properties.formatted}</p>
                  <p className="card-text">Eircode: {result.properties.postcode}</p>
                  <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
                  <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p>
                </div>
              </div>
            ))}
            { busesData.features && busesData.features.length === 0 && (
                <p>No Buses Found in {searchTerm}</p> )
            }
            </div>
            </div>

        
          <div className="section-container flex-grow-1">
          <div className="transport-info">
            <h2>Dublin Bus</h2>
                {filteredTransports.map((transport) => (
                  <div className="card" key={transport.id}>
                    <div className="card-body">
                      <p className="card-title"><strong>Bus:</strong> {transport.bus}</p>
                      <p className="card-text"><strong>First Stop:</strong> {transport.route_from}</p>
                      <p className="card-text"><strong>Last Stop:</strong> {transport.route_to}</p>
                      <p className="card-text"><strong>County:</strong> {transport.county}</p>
                    </div>
                  </div>
                ))}
             { transports.features && transports.features.length === 0 && (
                <p>No Dublin Bus Found in {searchTerm}</p> )
            }
            </div>
            </div>
            </div>


          <div className="col-md-6">
          <div className="section-container flex-grow-1">
          <div className="transport-info">
            <h2>Train Stations Information</h2>
            {trainsData.features && trainsData.features.map((result) => (
              <div className="card" key={result.properties.place_id}>
                <div className="card-body">
                  <h5 className="card-title">{result.properties.name}</h5>
                  <p className="card-text">Address: {result.properties.formatted}</p>
                  <p className="card-text">Eircode: {result.properties.postcode}</p>
                  <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
                  <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p>
                </div>
              </div>
            ))}
            { trainsData.features && trainsData.features.length === 0 && (
                <p>No Train Found in {searchTerm}</p> )
            }
            </div>
            </div>
          

          <div className="section-container flex-grow-1">
          <div className="transport-info">
            <h2>Bus Eireann</h2>
                {filteredExtraTransports.map((transport) => (
                  <div className="card" key={transport.id}>
                    <div className="card-body">
                      <p className="card-title"><strong>Bus:</strong> {transport.bus}</p>
                      <p className="card-text"><strong>First Stop:</strong> {transport.route_from}</p>
                      <p className="card-text"><strong>Last Stop:</strong> {transport.route_to}</p>
                      <p className="card-text"><strong>County:</strong> {transport.county}</p>
                    </div>
                  </div>
                ))}
              { extraTransports.features && extraTransports.features.length === 0 && (
                <p>No Bus Eireann Found in {searchTerm}</p> 
              )}
            </div>
            </div>
      
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default TransportNav;