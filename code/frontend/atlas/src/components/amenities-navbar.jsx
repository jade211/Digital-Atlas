import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function AmenitiesNav() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  useEffect(() => {
    fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error));
  }, []);

  const filteredData =
    data &&
    data.filter(
      (item) =>
        item.address.addressLocality.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.addressRegion.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleCardClick = (attraction) => {
    setSelectedAttraction(attraction);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="searchTerm" className="form-label">
          Search by Locality or Country:
        </label>
        <input
          type="text"
          id="searchTerm"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {selectedAttraction ? (
        <div>
          <h2>Attraction Details:</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{selectedAttraction.name}</h5>
              <p className="card-text">Locality: {selectedAttraction.address.addressLocality}</p>
              <p className="card-text">Region: {selectedAttraction.address.addressRegion}</p>
              <p className="card-text">Coordinates: {selectedAttraction.geo.latitude}, {selectedAttraction.geo.longitude}</p>
              {selectedAttraction.images && selectedAttraction.images.length > 0 && (
                <div>
                  <p className="card-text">Images:</p>
                  <div className="row">
                    {selectedAttraction.images.map((image, index) => (
                      <div key={index} className="col-md-4 mb-2">
                        <img src={image.url} alt={`Attraction ${index + 1}`} className="img-fluid" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Add more fields as needed */}
              <button className="btn btn-primary" onClick={() => setSelectedAttraction(null)}>
                Back to Results
              </button>
            </div>
          </div>
        </div>
      ) : filteredData && filteredData.length > 0 ? (
        <div>
          <h2>Filtered Amenities Data:</h2>
          {/* <Link to={`/`}>HOME</Link> */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredData.map((item) => (
              <div key={item.id} className="col">
                <div className="card h-100" onClick={() => handleCardClick(item)}>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Locality: {item.address.addressLocality}</p>
                    <p className="card-text">Region: {item.address.addressRegion}</p>
                    {/* Add more fields as needed */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : data && data.length > 0 ? (
        <p>No matching results found.</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AmenitiesNav;
