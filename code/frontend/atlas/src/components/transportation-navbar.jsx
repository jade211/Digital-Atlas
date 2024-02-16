// import React, { useState, useEffect } from "react";

// function TransportNav() {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`http://127.0.0.1:8000/transport/`),
//           fetch(`http://127.0.0.1:8000/extra_transport/`)
//         ]);
//         const [transport, extraTransport] = await Promise.all(
//           responses.map((response) => response.json())
//         );

//         setTransports(transport);
//         setExtraTransports(extraTransport);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredTransports = transports.filter(
//     (transport) =>
//       transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredExtraTransports = extraTransports.filter(
//     (transport) =>
//       transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <h1>DUBLIN BUSES</h1>
//       <ul>
//         {filteredTransports.map((transport) => (
//           <li key={transport.id}>
//             <p>Bus: {transport.bus}</p>
//             <p>Fisrt stop: {transport.route_from}</p>
//             <p>Last Stop: {transport.route_to}</p>
//             <p>County: {transport.county}</p>
//           </li>
//         ))}
//       </ul>

//       <h1>BUS EIREANN</h1>
//       <ul>
//         {filteredExtraTransports.map((transport) => (
//           <li key={transport.id}>
//             <p>Bus: {transport.bus}</p>
//             <p>Fisrt Stop: {transport.route_from}</p>
//             <p>Last Stop: {transport.route_to}</p>
//             <p>County: {transport.county}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TransportNav;





// import React, { useState, useEffect } from "react";

// function TransportNav() {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTransports, setFilteredTransports] = useState([]);
//   const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`http://127.0.0.1:8000/transport/`),
//           fetch(`http://127.0.0.1:8000/extra_transport/`)
//         ]);
//         const [transport, extraTransport] = await Promise.all(
//           responses.map((response) => response.json())
//         );

//         setTransports(transport);
//         setExtraTransports(extraTransport);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = () => {
//     const filteredTransportsResult = transports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const filteredExtraTransportsResult = extraTransports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredTransports(filteredTransportsResult);
//     setFilteredExtraTransports(filteredExtraTransportsResult);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       <p>DUBLIN BUSES</p>
//       <ul>
//         {filteredTransports.map((transport) => (
//           <li key={transport.id}>
//             <p>Bus: {transport.bus}</p>
//             <p>First stop: {transport.route_from}</p>
//             <p>Last Stop: {transport.route_to}</p>
//             <p>County: {transport.county}</p>
//           </li>
//         ))}
//       </ul>

//       <p>BUS EIREANN</p>
//       <ul>
//         {filteredExtraTransports.map((transport) => (
//           <li key={transport.id}>
//             <p>Bus: {transport.bus}</p>
//             <p>First Stop: {transport.route_from}</p>
//             <p>Last Stop: {transport.route_to}</p>
//             <p>County: {transport.county}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TransportNav;




// import React, { useState, useEffect } from "react";

// function TransportNav() {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTransports, setFilteredTransports] = useState([]);
//   const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`http://127.0.0.1:8000/transport/`),
//           fetch(`http://127.0.0.1:8000/extra_transport/`)
//         ]);
//         const [transport, extraTransport] = await Promise.all(
//           responses.map((response) => response.json())
//         );

//         setTransports(transport);
//         setExtraTransports(extraTransport);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = () => {
//     const filteredTransportsResult = transports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const filteredExtraTransportsResult = extraTransports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredTransports(filteredTransportsResult);
//     setFilteredExtraTransports(filteredExtraTransportsResult);
//     setSearchButtonClicked(true);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {searchButtonClicked && (
//         <>
//           <h3>DUBLIN BUSES</h3>
//           {filteredTransports.length > 0 ? (
//             <ul>
//               {filteredTransports.map((transport) => (
//                 <li key={transport.id}>
//                   <p><strong>Bus:</strong> {transport.bus}</p>
//                   <p><strong>First Stop:</strong> {transport.route_from}</p>
//                   <p><strong>Last Stop:</strong> {transport.route_to}</p>
//                   <p><strong>County:</strong> {transport.county}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Bus Services For This Area</p>
//           )}

//           <h3>BUS EIREANN</h3>
//           {filteredExtraTransports.length > 0 ? (
//             <ul>
//               {filteredExtraTransports.map((transport) => (
//                 <li key={transport.id}>
//                   <p><strong>Bus:</strong> {transport.bus}</p>
//                   <p><strong>First Stop:</strong> {transport.route_from}</p>
//                   <p><strong>Last Stop:</strong> {transport.route_to}</p>
//                   <p><strong>County:</strong> {transport.county}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Bus Services For This Area</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default TransportNav;








// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function TransportNav() {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [trainsData, setTrainData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTransports, setFilteredTransports] = useState([]);
//   const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`http://127.0.0.1:8000/transport/`),
//           fetch(`http://127.0.0.1:8000/extra_transport/`)
//         ]);
//         const [transport, extraTransport] = await Promise.all(
//           responses.map((response) => response.json())
//         );

//         setTransports(transport);
//         setExtraTransports(extraTransport);
//       } catch (error) {
//         console.error("Error fetching transport data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchTrainData = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const trainUrl = `https://api.geoapify.com/v2/places?categories=education.school&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

//           const [trainResponse] = await Promise.all([fetch(trainUrl)]);
//           const [trainsData] = await Promise.all([trainResponse.json()]);

//           setTrainData(trainsData);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching school data:", error);
//     }
//   };

//   const handleSearch = () => {
//     const filteredTransportsResult = transports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const filteredExtraTransportsResult = extraTransports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredTransports(filteredTransportsResult);
//     setFilteredExtraTransports(filteredExtraTransportsResult);
//     setSearchButtonClicked(true);

//     // Fetch school data on search
//     fetchTrainData();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Call the search function when the searchTerm changes */}
//       {handleSearch()}

//       {searchButtonClicked && (
//         <>
//           <h3>DUBLIN BUSES</h3>
//           {filteredTransports.length > 0 ? (
//             <ul>
//               {filteredTransports.map((transport) => (
//                 <li key={transport.id}>
//                   <p><strong>Bus:</strong> {transport.bus}</p>
//                   <p><strong>First Stop:</strong> {transport.route_from}</p>
//                   <p><strong>Last Stop:</strong> {transport.route_to}</p>
//                   <p><strong>County:</strong> {transport.county}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Bus Services For This Area</p>
//           )}

//           <h3>BUS EIREANN</h3>
//           {filteredExtraTransports.length > 0 ? (
//             <ul>
//               {filteredExtraTransports.map((transport) => (
//                 <li key={transport.id}>
//                   <p><strong>Bus:</strong> {transport.bus}</p>
//                   <p><strong>First Stop:</strong> {transport.route_from}</p>
//                   <p><strong>Last Stop:</strong> {transport.route_to}</p>
//                   <p><strong>County:</strong> {transport.county}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Bus Services For This Area</p>
//           )}

//           {/* Display Schools */}
//           <h2>Schools</h2>
//           {trainsData.features && trainsData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default TransportNav;



// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function TransportNav() {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [trainsData, setTrainData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTransports, setFilteredTransports] = useState([]);
//   const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`http://127.0.0.1:8000/transport/`),
//           fetch(`http://127.0.0.1:8000/extra_transport/`)
//         ]);
//         const [transport, extraTransport] = await Promise.all(
//           responses.map((response) => response.json())
//         );

//         setTransports(transport);
//         setExtraTransports(extraTransport);
//       } catch (error) {
//         console.error("Error fetching transport data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchTrainData = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
          
//           const trainUrl = `https://api.geoapify.com/v2/places?categories=public_transport.train&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

//           const [trainResponse] = await Promise.all([fetch(trainUrl)]);
//           const [trainsData] = await Promise.all([trainResponse.json()]);

//           setTrainData(trainsData);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching train data:", error);
//     }
//   };

//   const handleSearch = () => {
//     const filteredTransportsResult = transports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const filteredExtraTransportsResult = extraTransports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredTransports(filteredTransportsResult);
//     setFilteredExtraTransports(filteredExtraTransportsResult);
//     setSearchButtonClicked(true);

//     fetchTrainData();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <button onClick={handleSearch}>Search</button>

//       {searchButtonClicked && (
//         <>
//           <h3>Dublin Bus</h3>
//           {filteredTransports.length > 0 ? (
//             <ul>
//               {filteredTransports.map((transport) => (
//                 <li key={transport.id}>
//                   <p><strong>Bus:</strong> {transport.bus}</p>
//                   <p><strong>First Stop:</strong> {transport.route_from}</p>
//                   <p><strong>Last Stop:</strong> {transport.route_to}</p>
//                   <p><strong>County:</strong> {transport.county}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Bus Services For This Area</p>
//           )}

//           <h3>Bus Eireann</h3>
//           {filteredExtraTransports.length > 0 ? (
//             <ul>
//               {filteredExtraTransports.map((transport) => (
//                 <li key={transport.id}>
//                   <p><strong>Bus:</strong> {transport.bus}</p>
//                   <p><strong>First Stop:</strong> {transport.route_from}</p>
//                   <p><strong>Last Stop:</strong> {transport.route_to}</p>
//                   <p><strong>County:</strong> {transport.county}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No Bus Services For This Area</p>
//           )}


//           <h3>Train Stations Information</h3>
//           {trainsData.features && trainsData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//                 <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
//                 {/* <p className="card-text">Live Train Times: {result.properties.datasource.raw.addr:city}</p> */}
//                 <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p>
//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default TransportNav;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function TransportNav() {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [trainsData, setTrainData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTransports, setFilteredTransports] = useState([]);
//   const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`http://127.0.0.1:8000/transport/`),
//           fetch(`http://127.0.0.1:8000/extra_transport/`)
//         ]);
//         const [transport, extraTransport] = await Promise.all(
//           responses.map((response) => response.json())
//         );

//         setTransports(transport);
//         setExtraTransports(extraTransport);
//       } catch (error) {
//         console.error("Error fetching transport data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchTrainData = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
          
//           const trainUrl = `https://api.geoapify.com/v2/places?categories=public_transport.train&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

//           const [trainResponse] = await Promise.all([fetch(trainUrl)]);
//           const [trainsData] = await Promise.all([trainResponse.json()]);

//           setTrainData(trainsData);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching train data:", error);
//     }
//   };

//   const handleSearch = () => {
//     const filteredTransportsResult = transports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const filteredExtraTransportsResult = extraTransports.filter(
//       (transport) =>
//         transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         transport.county.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredTransports(filteredTransportsResult);
//     setFilteredExtraTransports(filteredExtraTransportsResult);
//     setSearchButtonClicked(true);

//     fetchTrainData();
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-3">
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Locality or Country:
//         </label>
//         <div className="input-group">
//             <input
//                 type="text"
//                 id="searchTerm"
//                 className="form-control"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <button className="btn btn-primary" onClick={handleSearch}>
//                 Search
//             </button>
//           </div>
//         </div>
    
//       {searchButtonClicked && (
//         <>
//           <div className="card-container">
//             <h3>Dublin Bus</h3>
//             {filteredTransports.length > 0 ? (
//               <div>
//                 {filteredTransports.map((transport) => (
//                   <div key={transport.id} className="card">
//                     <div className="card-body">
//                       <p className="card-title"><strong>Bus:</strong> {transport.bus}</p>
//                       <p className="card-text"><strong>First Stop:</strong> {transport.route_from}</p>
//                       <p className="card-text"><strong>Last Stop:</strong> {transport.route_to}</p>
//                       <p className="card-text"><strong>County:</strong> {transport.county}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No Bus Services For This Area</p>
//             )}
//           </div>

//           <div className="card-container">
//             <h3>Bus Eireann</h3>
//             {filteredExtraTransports.length > 0 ? (
//               <div>
//                 {filteredExtraTransports.map((transport) => (
//                   <div key={transport.id} className="card">
//                     <div className="card-body">
//                       <p className="card-title"><strong>Bus:</strong> {transport.bus}</p>
//                       <p className="card-text"><strong>First Stop:</strong> {transport.route_from}</p>
//                       <p className="card-text"><strong>Last Stop:</strong> {transport.route_to}</p>
//                       <p className="card-text"><strong>County:</strong> {transport.county}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No Bus Services For This Area</p>
//             )}
//           </div>

//           <div className="card-container">
//             <h3>Train Stations Information</h3>
//             {trainsData.features && trainsData.features.map((result) => (
//               <div className="card" key={result.properties.place_id}>
//                 <div className="card-body">
//                   <h5 className="card-title">{result.properties.name}</h5>
//                   <p className="card-text">Address: {result.properties.formatted}</p>
//                   <p className="card-text">Eircode: {result.properties.postcode}</p>
//                   <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
//                   <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default TransportNav;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransportNav() {
  const [busesData, setBusesData] = useState([]);
  const [trainsData, setTrainData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
        const geocodeResponse = await fetch(geocodeApiUrl);
        const geocodeData = await geocodeResponse.json();
        const placeId = geocodeData.results[0]?.place_id;

        if (placeId) {

          const busUrl = `https://api.geoapify.com/v2/places?categories=public_transport.bus&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
          
          const trainUrl = `https://api.geoapify.com/v2/places?categories=public_transport.train&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

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

  return (
    <div className="container mt-4">

      <div className="mb-3">
        <label htmlFor="searchTerm" className="form-label">
          Search by Locality or Country:
        </label>
        <div className="input-group">
          <input
            type="text"
            id="searchTerm"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

          <div className="card-container">
            <h3>Bus Information</h3>
            {busesData.features && busesData.features.map((result) => (
              <div className="card" key={result.properties.place_id}>
                <div className="card-body">
                  <h5 className="card-title">{result.properties.name}</h5>
                  <p className="card-text">Address: {result.properties.formatted}</p>
                  <p className="card-text">Eircode: {result.properties.postcode}</p>
                  <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
                  {/* <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p> */}
                  <p className="card-text">City: {result.properties.district}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-container">
            <h3>Train Stations Information</h3>
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
          </div>
    </div>
  );
}

export default TransportNav;
