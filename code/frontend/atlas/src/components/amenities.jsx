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




// import React, { useState, useEffect } from 'react';

// function Amentities() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
//       .then((response) => response.json())
//       .then((json) => setData(json.results)) // Access the "results" array
//       .catch((error) => console.error(error));
//   }, []);

//   // Filter data based on user input
//   const filteredData = data
//     ? data.filter(
//         (item) =>
//           item.address.addressLocality.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           item.address.addressRegion.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   return (
//     <div>
//       <div>
//         <label>
//           Search by Locality or Country:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </label>
//       </div>
//       {filteredData.length > 0 ? (
//         <div>
//           <h2>Filtered Amenities Data:</h2>
//           <pre>{JSON.stringify(filteredData, null, 2)}</pre>
//         </div>
//       ) : data.length > 0 ? (
//         <p>No matching results found.</p>
//       ) : (
//         'Loading......'
//       )}
//     </div>
//   );
// }

// export default Amentities;







// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function Amenities() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedAttraction, setSelectedAttraction] = useState(null);

//   useEffect(() => {
//     fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
//       .then((response) => response.json())
//       .then((json) => setData(json.results))
//       .catch((error) => console.error(error));
//   }, []);

//   const filteredData =
//     data &&
//     data.filter(
//       (item) =>
//         item.address.addressLocality.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.address.addressRegion.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   const handleCardClick = (attraction) => {
//     setSelectedAttraction(attraction);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-3">
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Locality or Country:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {selectedAttraction ? (
//         <div>
//           <h2>Attraction Details:</h2>
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">{selectedAttraction.name}</h5>
//               <p className="card-text">Locality: {selectedAttraction.address.addressLocality}</p>
//               <p className="card-text">Region: {selectedAttraction.address.addressRegion}</p>
//               <p className="card-text">Coordinates: {selectedAttraction.geo.latitude}, {selectedAttraction.geo.longitude}</p>
//               {selectedAttraction.images && selectedAttraction.images.length > 0 && (
//                 <div>
//                   <p className="card-text">Images:</p>
//                   <div className="row">
//                     {selectedAttraction.images.map((image, index) => (
//                       <div key={index} className="col-md-4 mb-2">
//                         <img src={image.url} alt={`Attraction ${index + 1}`} className="img-fluid" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {/* Add more fields as needed */}
//               <button className="btn btn-primary" onClick={() => setSelectedAttraction(null)}>
//                 Back to Results
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : filteredData && filteredData.length > 0 ? (
//         <div>
//           <h2>Filtered Amenities Data:</h2>
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {filteredData.map((item) => (
//               <div key={item.id} className="col">
//                 <div className="card h-100" onClick={() => handleCardClick(item)}>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">Locality: {item.address.addressLocality}</p>
//                     <p className="card-text">Region: {item.address.addressRegion}</p>
//                     {/* Add more fields as needed */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : data && data.length > 0 ? (
//         <p>No matching results found.</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Amenities;











// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Amenities({ searchTerm }) {
//   const [data, setData] = useState([]);
//   const [selectedAttraction, setSelectedAttraction] = useState(null);

//   useEffect(() => {
//     fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
//       .then((response) => response.json())
//       .then((json) => setData(json.results))
//       .catch((error) => console.error(error));
//   }, [searchTerm]);

//   const filteredData =
//     data &&
//     data.filter(
//       (item) =>
//         item.address.addressLocality.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.address.addressRegion.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   const handleCardClick = (attraction) => {
//     setSelectedAttraction(attraction);
//   };

//   return (
//     <div className="container mt-4">
//       {/* <div className="mb-3">
//       //   <label htmlFor="searchTerm" className="form-label">
//       //     Search by Locality or Country:
//       //   </label>
//       //   <input
//       //     type="text"
//       //     id="searchTerm"
//       //     className="form-control"
//       //     value={searchTerm}
//       //     onChange={(e) => setSearchTerm(e.target.value)}
//       //   />
//       // </div> */}

//       {selectedAttraction ? (
//         <div>
//           <h2>Attraction Details:</h2>
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">{selectedAttraction.name}</h5>
//               <p className="card-text">Locality: {selectedAttraction.address.addressLocality}</p>
//               <p className="card-text">Region: {selectedAttraction.address.addressRegion}</p>
//               <p className="card-text">Coordinates: {selectedAttraction.geo.latitude}, {selectedAttraction.geo.longitude}</p>
//               {selectedAttraction.images && selectedAttraction.images.length > 0 && (
//                 <div>
//                   <p className="card-text">Images:</p>
//                   <div className="row">
//                     {selectedAttraction.images.map((image, index) => (
//                       <div key={index} className="col-md-4 mb-2">
//                         <img src={image.url} alt={`Attraction ${index + 1}`} className="img-fluid" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {/* Add more fields as needed */}
//               <button className="btn btn-primary" onClick={() => setSelectedAttraction(null)}>
//                 Back to Results
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : filteredData && filteredData.length > 0 ? (
//         <div>
//           <h2>Filtered Amenities Data:</h2>
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {filteredData.map((item) => (
//               <div key={item.id} className="col">
//                 <div className="card h-100" onClick={() => handleCardClick(item)}>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">Locality: {item.address.addressLocality}</p>
//                     <p className="card-text">Region: {item.address.addressRegion}</p>
//                     {/* Add more fields as needed */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : data && data.length > 0 ? (
//         <p>No matching results found.</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Amenities;






import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AmenitiesNav({ searchTerm }) {
  const [servicesData, setServicesData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);
  const [healthcareData, setHealthcareData] = useState([]);
  const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
  const [shopsBusinessesData, setShopsBusinessesData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm.trim() !== '') {
          const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const geocodeResponse = await fetch(geocodeApiUrl);
          const geocodeData = await geocodeResponse.json();
          const placeId = geocodeData.results[0]?.place_id;

          if (placeId) {
            const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=service,religion&filter=place:${encodeURIComponent(
              placeId
            )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,leisure, sport,activity&filter=place:${encodeURIComponent(
              placeId
            )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:${encodeURIComponent(
              placeId
            )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare&filter=place:${encodeURIComponent(
              placeId
            )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
              placeId
            )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
              placeId
            )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse] =
              await Promise.all([
                fetch(servicesApiUrl),
                fetch(amenitiesApiUrl),
                fetch(hotelsApiUrl),
                fetch(healthcareApiUrl),
                fetch(restaurantsCafesApiUrl),
                fetch(shopsBusinessesApiUrl),
              ]);

            const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData] =
              await Promise.all([
                servicesResponse.json(),
                amenitiesResponse.json(),
                hotelsResponse.json(),
                healthcareResponse.json(),
                restaurantsCafesResponse.json(),
                shopsBusinessesResponse.json(),
              ]);

            setServicesData(servicesData);
            setAmenitiesData(amenitiesData);
            setHotelsData(hotelsData);
            setHealthcareData(healthcareData);
            setRestaurantsCafesData(restaurantsCafesData);
            setShopsBusinessesData(shopsBusinessesData);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      {/* Display search results */}
      <div>
        <h2>Entertainment and Leisure</h2>
        {amenitiesData.features &&
          amenitiesData.features.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))}
      </div>

      <div>
        <h2>Services and Religious Establishments</h2>
        {servicesData.features &&
          servicesData.features.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))}
      </div>

      <div>
        <h2>Hotels</h2>
        {hotelsData.features &&
          hotelsData.features.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))}
      </div>

      <div>
        <h2>Healthcare, Pharmacies and Hospitals</h2>
        {healthcareData.features &&
          healthcareData.features.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))}
      </div>

      <div>
        <h2>Restaurants and Cafes</h2>
        {restaurantsCafesData.features &&
          restaurantsCafesData.features.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))}
      </div>

      <div>
        <h2>Shopping Centres and Businesses</h2>
        {shopsBusinessesData.features &&
          shopsBusinessesData.features.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AmenitiesNav;
