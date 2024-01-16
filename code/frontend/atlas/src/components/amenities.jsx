// import React, {useState, useEffect} from 'react';

// function Amentities() {
//   // return (
//     const [data, setData] = useState(null);

//     useEffect(() => {
//       fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//     }, []);

//     return (
//       <div>
//         {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading......'}
//       </div>
//     );
// }

// export default Amentities;




import React, { useState, useEffect } from 'react';

function Amentities() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
      .then((response) => response.json())
      .then((json) => setData(json.results)) // Access the "results" array
      .catch((error) => console.error(error));
  }, []);

  // Filter data based on user input
  const filteredData = data
    ? data.filter(
        (item) =>
          item.address.addressLocality.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.address.addressRegion.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <div>
        <label>
          Search by Locality or Country:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      {filteredData.length > 0 ? (
        <div>
          <h2>Filtered Amenities Data:</h2>
          <pre>{JSON.stringify(filteredData, null, 2)}</pre>
        </div>
      ) : data.length > 0 ? (
        <p>No matching results found.</p>
      ) : (
        'Loading......'
      )}
    </div>
  );
}

export default Amentities;