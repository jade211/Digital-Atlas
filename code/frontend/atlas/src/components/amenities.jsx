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






// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Amenities({ searchTerm }) {
//   const [servicesData, setServicesData] = useState([]);
//   const [amenitiesData, setAmenitiesData] = useState([]);
//   const [hotelsData, setHotelsData] = useState([]);
//   const [healthcareData, setHealthcareData] = useState([]);
//   const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
//   const [shopsBusinessesData, setShopsBusinessesData] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (searchTerm.trim() !== '') {
//           const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const placeId = geocodeData.results[0]?.place_id;

//           if (placeId) {
//             const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=service,religion&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,leisure, sport,activity&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse] =
//               await Promise.all([
//                 fetch(servicesApiUrl),
//                 fetch(amenitiesApiUrl),
//                 fetch(hotelsApiUrl),
//                 fetch(healthcareApiUrl),
//                 fetch(restaurantsCafesApiUrl),
//                 fetch(shopsBusinessesApiUrl),
//               ]);

//             const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData] =
//               await Promise.all([
//                 servicesResponse.json(),
//                 amenitiesResponse.json(),
//                 hotelsResponse.json(),
//                 healthcareResponse.json(),
//                 restaurantsCafesResponse.json(),
//                 shopsBusinessesResponse.json(),
//               ]);

//             setServicesData(servicesData);
//             setAmenitiesData(amenitiesData);
//             setHotelsData(hotelsData);
//             setHealthcareData(healthcareData);
//             setRestaurantsCafesData(restaurantsCafesData);
//             setShopsBusinessesData(shopsBusinessesData);
//           }
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [searchTerm]);

//   return (
//     <div className="container mt-4">
//       {/* Display search results */}
//       <div>
//         <h2>Entertainment and Leisure</h2>
//         {amenitiesData.features &&
//           amenitiesData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div>
//         <h2>Services and Religious Establishments</h2>
//         {servicesData.features &&
//           servicesData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div>
//         <h2>Hotels</h2>
//         {hotelsData.features &&
//           hotelsData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div>
//         <h2>Healthcare, Pharmacies and Hospitals</h2>
//         {healthcareData.features &&
//           healthcareData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div>
//         <h2>Restaurants and Cafes</h2>
//         {restaurantsCafesData.features &&
//           restaurantsCafesData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div>
//         <h2>Shopping Centres and Businesses</h2>
//         {shopsBusinessesData.features &&
//           shopsBusinessesData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Amenities;












// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Amenities({ searchTerm, searchOption }) {
//   const [servicesData, setServicesData] = useState([]);
//   const [amenitiesData, setAmenitiesData] = useState([]);
//   const [hotelsData, setHotelsData] = useState([]);
//   const [healthcareData, setHealthcareData] = useState([]);
//   const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
//   const [shopsBusinessesData, setShopsBusinessesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let geocodeApiUrl;
//         if (searchTerm.trim() !== '') {
//           if (searchOption === 'state') {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           } else {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           }
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const placeId = geocodeData.results[0]?.place_id;

//           if (placeId) {
//             const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=service,religion&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,sport,activity&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse] =
//               await Promise.all([
//                 fetch(servicesApiUrl),
//                 fetch(amenitiesApiUrl),
//                 fetch(hotelsApiUrl),
//                 fetch(healthcareApiUrl),
//                 fetch(restaurantsCafesApiUrl),
//                 fetch(shopsBusinessesApiUrl),
//               ]);

//             const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData] =
//               await Promise.all([
//                 servicesResponse.json(),
//                 amenitiesResponse.json(),
//                 hotelsResponse.json(),
//                 healthcareResponse.json(),
//                 restaurantsCafesResponse.json(),
//                 shopsBusinessesResponse.json(),
//               ]);

//             setServicesData(servicesData);
//             setAmenitiesData(amenitiesData);
//             setHotelsData(hotelsData);
//             setHealthcareData(healthcareData);
//             setRestaurantsCafesData(restaurantsCafesData);
//             setShopsBusinessesData(shopsBusinessesData);
//           }
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [searchTerm, searchOption]);

//   return (
//       <div className="container mt-4">
//         <div>
//           <h2>Entertainment and Leisure</h2>
//           {amenitiesData.features && amenitiesData.features.length > 0 ? (
//             amenitiesData.features.map((result) => (
//               <div className="card" key={result.properties.place_id}>
//                 <div className="card-body">
//                   <h5 className="card-title">{result.properties.name}</h5>
//                   <p className="card-text">Address: {result.properties.formatted}</p>
//                   <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No data</p>
//           )}
//         </div>

//       <div>
//         <h2>Services and Religious Establishments</h2>
//         {servicesData.features && servicesData.features.length > 0 ? (
//           servicesData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No data</p>
//         )}
//     </div>

//       <div>
//         <h2>Hotels</h2>
//         {hotelsData.features && hotelsData.features.length > 0 ? (
//           hotelsData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//             </div>
//           ))
//         ) : (
//           <p>No data</p>
//         )}
//     </div>

//       <div>
//         <h2>Healthcare, Pharmacies and Hospitals</h2>
//         {healthcareData.features && healthcareData.features.length > 0 ? (
//           healthcareData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//             </div>
//           ))
//         ) : (
//           <p>No data</p>
//         )}
//     </div>

//       <div>
//         <h2>Restaurants and Cafes</h2>
//         {restaurantsCafesData.features && restaurantsCafesData.features.length > 0 ? (
//           restaurantsCafesData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//             </div>
//           ))
//         ) : (
//           <p>No data</p>
//         )}
//     </div>

//       <div>
//         <h2>Shopping Centres and Businesses</h2>
//         {shopsBusinessesData.features && shopsBusinessesData.features.length > 0 ? (
//           shopsBusinessesData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//             </div>
//           ))
//         ) : (
//           <p>No data</p>
//         )}
//     </div>
//     </div>
//   );
// }

// export default Amenities;
















// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Amenities({ searchTerm, searchOption }) {
//   const [servicesData, setServicesData] = useState([]);
//   const [amenitiesData, setAmenitiesData] = useState([]);
//   const [hotelsData, setHotelsData] = useState([]);
//   const [healthcareData, setHealthcareData] = useState([]);
//   const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
//   const [shopsBusinessesData, setShopsBusinessesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let geocodeApiUrl;
//         if (searchTerm.trim() !== '') {
//           if (searchOption === 'state') {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           } else {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           }
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const placeId = geocodeData.results[0]?.place_id;

//           if (placeId) {
//             const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=service,religion&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=2&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,sport,activity&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse] =
//               await Promise.all([
//                 fetch(servicesApiUrl),
//                 fetch(amenitiesApiUrl),
//                 fetch(hotelsApiUrl),
//                 fetch(healthcareApiUrl),
//                 fetch(restaurantsCafesApiUrl),
//                 fetch(shopsBusinessesApiUrl),
//               ]);

//             const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData] =
//               await Promise.all([
//                 servicesResponse.json(),
//                 amenitiesResponse.json(),
//                 hotelsResponse.json(),
//                 healthcareResponse.json(),
//                 restaurantsCafesResponse.json(),
//                 shopsBusinessesResponse.json(),
//               ]);

//             setServicesData(servicesData);
//             setAmenitiesData(amenitiesData);
//             setHotelsData(hotelsData);
//             setHealthcareData(healthcareData);
//             setRestaurantsCafesData(restaurantsCafesData);
//             setShopsBusinessesData(shopsBusinessesData);
//           }
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [searchTerm, searchOption]);

//   return (
//     <div>
//       <div className="result-section">
//       <h2>Entertainment and Leisure</h2>
//       {amenitiesData.features && amenitiesData.features.length > 0 ? (
//         amenitiesData.features.map((result) => (
//           result.properties.name && (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           )
//         ))
//       ) : (
//         <p>No Entertainment and Leisure Amenities Found in {searchTerm}</p>
//       )}
//     </div>

//     <div>
//       <div className="result-section">
//         <h2>Services</h2>
//         {servicesData.features && servicesData.features.length > 0 ? (
//           servicesData.features.map((result) => (
//             result.properties.name && (
//               <div className="card" key={result.properties.place_id}>
//                 <div className="card-body">
//                   <h5 className="card-title">{result.properties.name}</h5>
//                   <p className="card-text">Address: {result.properties.formatted}</p>
//                   <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//               </div>
//             )
//           ))
//         ) : (
//           <p>No Service Amenities Found in {searchTerm}</p>
//         )}
//     </div>

//     <div className="result-section">
//       <h2>Hotels</h2>
//       {hotelsData.features && hotelsData.features.length > 0 ? (
//         hotelsData.features.map((result) => (
//           result.properties.name && (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           )
//         ))
//       ) : (
//         <p>No Hotel/Accomodation Amenities Found in {searchTerm}</p>
//       )}
//   </div>

//     <div className="result-section">
//       <h2>Healthcare, Pharmacies and Hospitals</h2>
//       {healthcareData.features && healthcareData.features.length > 0 ? (
//         healthcareData.features.map((result) => (
//           result.properties.name && (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           )
//         ))
//       ) : (
//         <p>No Healthcare Amenities Found in {searchTerm}</p>
//       )}
//   </div>

//     <div className="result-section">
//       <h2>Restaurants and Cafes</h2>
//       {restaurantsCafesData.features && restaurantsCafesData.features.length > 0 ? (
//           restaurantsCafesData.features.map((result) => (
//             result.properties.name && (
//               <div className="card" key={result.properties.place_id}>
//                 <div className="card-body">
//                   <h5 className="card-title">{result.properties.name}</h5>
//                   <p className="card-text">Address: {result.properties.formatted}</p>
//                   <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//               </div>
//             )
//           ))
//         ) : (
//           <p>No Restaurants/Cafe Amenities Found in {searchTerm}</p>
//         )}
//     </div>

//     <div className="result-section">
//       <h2>Shopping Centres and Businesses</h2>
//       {shopsBusinessesData.features && shopsBusinessesData.features.length > 0 ? (
//           shopsBusinessesData.features.map((result) => (
//             result.properties.name && (
//               <div className="card" key={result.properties.place_id}>
//                 <div className="card-body">
//                   <h5 className="card-title">{result.properties.name}</h5>
//                   <p className="card-text">Address: {result.properties.formatted}</p>
//                   <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 </div>
//               </div>
//             )
//           ))
//         ) : (
//           <p>No Shopping Centres/Business Amenities Found in {searchTerm}</p>
//         )}
//     </div>
//   </div>
//   </div>
//   );
// }
// export default Amenities;






// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Amenities({ searchTerm, searchOption }) {
//   const [servicesData, setServicesData] = useState([]);
//   const [amenitiesData, setAmenitiesData] = useState([]);
//   const [hotelsData, setHotelsData] = useState([]);
//   const [healthcareData, setHealthcareData] = useState([]);
//   const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
//   const [shopsBusinessesData, setShopsBusinessesData] = useState([]);
//   const [religionData, setReligionData] = useState([]);
//   const [tourismData, setTourismData] = useState([]);
//   const [townsData, setTownsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let geocodeApiUrl;
//         if (searchTerm.trim() !== '') {
//           if (searchOption === 'state') {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           } else {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           }
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const placeId = geocodeData.results[0]?.place_id;

//           if (placeId) {
//             const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=education.driving_school,education.music_school,education.language_school,childcare,parking,pet.veterinary,pet.service,rental,service,amenity,building.service,office&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,leisure,pet.dog_park,adult,beach,building.entertainment,sport&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare,building.healthcare&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const religionApiUrl = `https://api.geoapify.com/v2/places?categories=religion&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const tourismApiUrl = `https://api.geoapify.com/v2/places?categories=heritage,tourism&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//             const townsApiUrl = `https://api.geoapify.com/v2/places?categories=populated_place.village,populated_place.neighbourhood,populated_place.hamlet,populated_place.suburb,populated_place.suburb,populated_place.town,populated_place.city&filter=place:${encodeURIComponent(
//               placeId
//             )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;






//             const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse, religionResponse, tourismResponse, townsResponse] =
//               await Promise.all([
//                 fetch(servicesApiUrl),
//                 fetch(amenitiesApiUrl),
//                 fetch(hotelsApiUrl),
//                 fetch(healthcareApiUrl),
//                 fetch(restaurantsCafesApiUrl),
//                 fetch(shopsBusinessesApiUrl),
//                 fetch(religionApiUrl),
//                 fetch(tourismApiUrl),
//                 fetch(townsApiUrl),
//               ]);

//             const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData, religionData, tourismData, townsData] =
//               await Promise.all([
//                 servicesResponse.json(),
//                 amenitiesResponse.json(),
//                 hotelsResponse.json(),
//                 healthcareResponse.json(),
//                 restaurantsCafesResponse.json(),
//                 shopsBusinessesResponse.json(),
//                 religionResponse.json(),
//                 tourismResponse.json(),
//                 townsResponse.json(),
//               ]);

//             // Function to remove duplicates
//             const removeDuplicates = (data) => {
//               const uniqueNamesSet = new Set();
//               return data.features.filter((result) => {
//                 if (result.properties.name && !uniqueNamesSet.has(result.properties.name)) {
//                   uniqueNamesSet.add(result.properties.name);
//                   return true;
//                 }
//                 return false;
//               });
//             };

//             setServicesData(removeDuplicates(servicesData));
//             setAmenitiesData(removeDuplicates(amenitiesData));
//             setHotelsData(removeDuplicates(hotelsData));
//             setHealthcareData(removeDuplicates(healthcareData));
//             setRestaurantsCafesData(removeDuplicates(restaurantsCafesData));
//             setShopsBusinessesData(removeDuplicates(shopsBusinessesData));
//             setReligionData(removeDuplicates(religionData));
//             setTourismData(removeDuplicates(tourismData));
//             setTownsData(removeDuplicates(townsData));
//           }
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [searchTerm, searchOption]);

//   return (
//     <div>
//       <div className="result-section">
//         <h2>Entertainment and Leisure</h2>
//         {amenitiesData.length > 0 ? (
//           amenitiesData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Entertainment and Leisure Amenities Found in {searchTerm}</p>
//         )}
//       </div>


//       <div className="result-section">
//         <h2>Hotels and Accommodation</h2>
//         {hotelsData.length > 0 ? (
//           hotelsData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Hotels/Accommodation Amenities Found in {searchTerm}</p>
//         )}
//       </div>

//       <div className="result-section">
//         <h2>Hospitals, Pharmacies and Healthcare</h2>
//         {healthcareData.length > 0 ? (
//           healthcareData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Healthcare Amenities Found in {searchTerm}</p>
//         )}
//       </div>

//       <div className="result-section">
//         <h2>Restaurants and Cafes</h2>
//         {restaurantsCafesData.length > 0 ? (
//           restaurantsCafesData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Restaurant/Cafe Amenities Found in {searchTerm}</p>
//         )}
//       </div>

//       <div className="result-section">
//         <h2>Shopping Centres and Shops</h2>
//         {shopsBusinessesData.length > 0 ? (
//           shopsBusinessesData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Shopping Centres/Business Amenities Found in {searchTerm}</p>
//         )}
//       </div>

//       <div className="result-section">
//         <h2>Services</h2>
//         {servicesData.length > 0 ? (
//           servicesData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Service Amenities Found in {searchTerm}</p>
//         )}
//       </div>

//       <div className="result-section">
//         <h2>Religious Establishments</h2>
//         {religionData.length > 0 ? (
//           religionData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Religion Amenities Found in {searchTerm}</p>
//         )}
//       </div>

//       <div className="result-section">
//         <h2>Tourist Locations</h2>
//         {tourismData.length > 0 ? (
//           tourismData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Tourist Amenities Found in {searchTerm}</p>
//         )}
//       </div>


//       <div className="result-section">
//         <h2>Nearby Towns and Cities</h2>
//         {townsData.length > 0 ? (
//           townsData.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No Nearby Towns/Cities Found near{searchTerm}</p>
//         )}
//       </div>

//     </div>
//   );
// }

// export default Amenities;










import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Amenities({ searchTerm, searchOption }) {
  const [servicesData, setServicesData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);
  const [healthcareData, setHealthcareData] = useState([]);
  const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
  const [shopsBusinessesData, setShopsBusinessesData] = useState([]);
  const [religionData, setReligionData] = useState([]);
  const [tourismData, setTourismData] = useState([]);
  const [townsData, setTownsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let geocodeApiUrl;
        if (searchTerm.trim() !== '') {
          if (searchOption === 'state') {
            geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
          } else {
            geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
          }
          const geocodeResponse = await fetch(geocodeApiUrl);
          const geocodeData = await geocodeResponse.json();
          const placeId = geocodeData.results[0]?.place_id;

          if (placeId) {
            const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=education.driving_school,education.music_school,education.language_school,childcare,parking,pet.veterinary,pet.service,rental,service,amenity,building.service,office&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,leisure,pet.dog_park,adult,beach,building.entertainment,sport&filter=place:${encodeURIComponent(
              placeId
            )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation&filter=place:${encodeURIComponent(
              placeId
            )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare,building.healthcare&filter=place:${encodeURIComponent(
              placeId
            )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
              placeId
            )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const religionApiUrl = `https://api.geoapify.com/v2/places?categories=religion&filter=place:${encodeURIComponent(
              placeId
            )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const tourismApiUrl = `https://api.geoapify.com/v2/places?categories=heritage,tourism.attraction.artwork,tourism.attraction.viewpoint,tourism.attraction.fountain,tourism.attraction.clock,tourism.sights.place_of_worship,tourism.sights.place_of_worship.church,tourism.sights.place_of_worship.chapel,tourism.sights.place_of_worship.cathedral,tourism.sights.place_of_worship.mosque,tourism.sights.place_of_worship.synagogue,tourism.sights.place_of_worship.temple,tourism.sights.place_of_worship.shrine,tourism.sights.monastery,tourism.sights.city_hall,tourism.sights.conference_centre,tourism.sights.lighthouse,tourism.sights.windmill,tourism.sights.tower,tourism.sights.battlefield,tourism.sights.fort,tourism.sights.castle,tourism.sights.ruines,tourism.sights.archaeological_site,tourism.sights.city_gate,tourism.sights.bridge,tourism.sights.memorial,tourism.sights.memorial.aircraft,tourism.sights.memorial.locomotive,tourism.sights.memorial.railway_car,tourism.sights.memorial.ship,tourism.sights.memorial.tank,tourism.sights.memorial.tomb,tourism.sights.memorial.monument,tourism.sights.memorial.wayside_cross,tourism.sights.memorial.boundary_stone,tourism.sights.memorial.pillory,tourism.sights.memorial.milestone&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const townsApiUrl = `https://api.geoapify.com/v2/places?categories=populated_place.village,populated_place.hamlet,populated_place.neighbourhood,populated_place.city,populated_place.suburb,populated_place.town&filter=place:${encodeURIComponent(
              placeId
            )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
            






            const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse, religionResponse, tourismResponse, townsResponse] =
              await Promise.all([
                fetch(servicesApiUrl),
                fetch(amenitiesApiUrl),
                fetch(hotelsApiUrl),
                fetch(healthcareApiUrl),
                fetch(restaurantsCafesApiUrl),
                fetch(shopsBusinessesApiUrl),
                fetch(religionApiUrl),
                fetch(tourismApiUrl),
                fetch(townsApiUrl),
              ]);

            const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData, religionData, tourismData, townsData] =
              await Promise.all([
                servicesResponse.json(),
                amenitiesResponse.json(),
                hotelsResponse.json(),
                healthcareResponse.json(),
                restaurantsCafesResponse.json(),
                shopsBusinessesResponse.json(),
                religionResponse.json(),
                tourismResponse.json(),
                townsResponse.json(),
              ]);

            // Function to remove duplicates
            const removeDuplicates = (data) => {
              const uniqueNamesSet = new Set();
              return data.features.filter((result) => {
                if (result.properties.name && !uniqueNamesSet.has(result.properties.name)) {
                  uniqueNamesSet.add(result.properties.name);
                  return true;
                }
                return false;
              });
            };

            setServicesData(removeDuplicates(servicesData));
            setAmenitiesData(removeDuplicates(amenitiesData));
            setHotelsData(removeDuplicates(hotelsData));
            setHealthcareData(removeDuplicates(healthcareData));
            setRestaurantsCafesData(removeDuplicates(restaurantsCafesData));
            setShopsBusinessesData(removeDuplicates(shopsBusinessesData));
            setReligionData(removeDuplicates(religionData));
            setTourismData(removeDuplicates(tourismData));
            setTownsData(removeDuplicates(townsData));
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm, searchOption]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReturnToMenu = () => {
    setSelectedCategory(null);
  };

  const renderAmenitiesByCategory = () => {
    const dataForCategory = getCategoryData(selectedCategory);

    return (
      <div>
        <button className="btn btn-primary" onClick={handleReturnToMenu}>
          Return to Amenities Menu
        </button>
        <h2>{selectedCategory}</h2>
        {dataForCategory.length > 0 ? (
          dataForCategory.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No {selectedCategory} Amenities Found in {searchTerm}</p>
        )}
      </div>
    );
  };

  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

  const getCategoryData = (category) => {
    switch (category) {
      case 'Entertainment and Leisure':
        return amenitiesData;
      case 'Hotels and Accommodation':
        return hotelsData;
      case 'Hospitals, Pharmacies and Healthcare':
        return healthcareData;
      case 'Restaurants and Cafes':
        return restaurantsCafesData;
      case 'Shopping Centres and Shops':
        return shopsBusinessesData;
        case 'Servives':
          return servicesData;
      case 'Religious Establishments':
        return religionData;
      case 'Tourist Locations':
        return tourismData;
      case 'Nearby Towns and Cities':
        return townsData;
        
      default:
        return [];
    }
  };

  return (
    <div className="amenities-container">
      <h1>Amenities in {capitalSearchTerm	}</h1>
      {!selectedCategory ? (
        <div>
          <div className="result-section">

            <h2 className="category" onClick={() => handleCategoryClick('Entertainment and Leisure')}>
              Entertainment and Leisure
            </h2>

            <h2 className="category" onClick={() => handleCategoryClick('Hotels and Accommodation')}>Hotels and Accommodation</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Hospitals, Pharmacies and Healthcare')}>Hospitals, Pharmacies and Healthcare</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Restaurants and Cafes')}>Restaurants and Cafes</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Shopping Centres and Shops')}>Shopping Centres and Shops</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Services')}>Services</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Religious Establishments')}>Religious Establishments</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Tourist Locations')}>Tourist Locations</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Nearby Towns and Cities')}>Nearby Towns and Cities</h2>


          </div>
        </div>
      ) : (
        renderAmenitiesByCategory()
      )}
    </div>
  );
}

export default Amenities;