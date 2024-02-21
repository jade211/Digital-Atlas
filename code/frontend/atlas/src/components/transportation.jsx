// import { useState, useEffect } from "react";

// function Transport(){
//   const [transports, setTransports] = useState([]);

//   useEffect(() =>{
//     fetch(`http://127.0.0.1:8000/transport/`)
//     .then(response=>response.json())
//     .then(data=>{
//       setTransports(data)
//     })
//     .catch(error=>console.log(error));
//   }, []);

//   const displayTransport=() =>{
//     return transports.map((transport) => 
//     <div key={transport.id} className="transport-card">
//      <p className="transport-info">Bus: {transport.bus}</p>
//      <p className="transport-info">Departure: {transport.route_from}</p>
//      <p className="transport-info">Destination: {transport.route_to}</p>
//     </div>
//     );
//   }

//   return (
//     <div>
//       <h1 className="transport-title">Transport Information</h1>
//       <div className="transport-container">
//         {displayTransport()}
//       </div>
//     </div>
//   );
// };

// export default Transport;





// import { useState, useEffect } from "react";

// function Transport(){
//   const [transports, setTransports] = useState([]);
//   const [extratransports,  setExtraTransports] = useState([]);

//   useEffect(() =>{
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`http://127.0.0.1:8000/transport/`),
//           fetch(`http://127.0.0.1:8000/extra_transport/`)
//         ]);
//         const [transport, extratransport] = await Promise.all(responses.map(response => response.json()));

//         setTransports(transport);
//         setExtraTransports(extratransport);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();


//     // fetch(`http://127.0.0.1:8000/transport/`)
//     // .then(response=>response.json())
//     // .then(data=>{
//     //   setTransports(data)
//     // })
//     // .catch(error=>console.log(error));
//   }, []);

 
//   return(
//     <div>
//       <h1>DUBLIN BUSES</h1>
//       <ul>
//         {transports.map((transport) => (
//           <li key={transport.id}>
//             <h3>Bus: {transport.bus}</h3>
//             <h3>First Stop: {transport.route_from}</h3>
//             <h3>Last Stop: {transport.route_to}</h3>
//             <h3>County: {transport.county}</h3>
//           </li>
//         ))}
//       </ul>

//       <h1>BUS EIREANN</h1>
//       <ul>
//         {extratransports.map((extratransport) => (
//           <li key={extratransport.id}>
//             <h3>Bus: {extratransport.bus}</h3>
//             <h3>Fisrt Stop: {extratransport.route_from}</h3>
//             <h3>Last Stop: {extratransport.route_to}</h3>
//             <h3>County{extratransport.county}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )

// };

// export default Transport;




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







// import React, { useState, useEffect } from "react";

// function Transport ({ searchTerm }) {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
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

// export default Transport;





// import React, { useState, useEffect } from "react";

// function Transport({ searchTerm }) {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
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

// export default Transport;


// import React, { useState, useEffect } from "react";

// function Transport({ searchTerm }) {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
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
//   }, [searchTerm]); // Listen to changes in searchTerm

//   useEffect(() => {
//     // Filter transports when searchTerm changes
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
//   }, [searchTerm, transports, extraTransports]);

//   return (
//     <div>
//       {/* Remove the button, as it's now automatically updating based on searchTerm */}
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
//         </>
//       )}
//     </div>
//   );
// }

// export default Transport;





// import React, { useState, useEffect } from "react";

// function Transport({ searchTerm, searchOption }) {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [filteredTransports, setFilteredTransports] = useState([]);
//   const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const [trainData, setTrainData] = useState([]);
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
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [searchTerm]);

//   const fetchTrainData = async () => {
//     try {
//       let geocodeApiUrl;
//       if (searchTerm.trim() !== '') {
//         if (searchOption === 'state') {
//           geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         } else {
//           geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         }
//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const trainUrl = `https://api.geoapify.com/v2/places?categories=public_transport.train&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const [trainResponse] = await Promise.all([fetch(trainUrl)]);
//           const [trainData] = await Promise.all([trainResponse.json()]);

//           setTrainData(trainData);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching train data:", error);
//     }
//   };


//   useEffect(() => {
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

//     fetchTrainData()
//   }, [searchTerm, transports, extraTransports]);

//   return (
//     <div>
//       {/* Remove the button, as it's now automatically updating based on searchTerm */}
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

//           <h2>Train Stations</h2>
//           {trainData.features && trainData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//               <h5 className="card-title">{result.properties.name}</h5>
//                   <p className="card-text">Address: {result.properties.formatted}</p>
//                   <p className="card-text">Eircode: {result.properties.postcode}</p>
//                   <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
//                   <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p>
//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default Transport;


// import React, { useState, useEffect } from "react";

// function Transport({ searchTerm, searchOption }) {
//   const [transports, setTransports] = useState([]);
//   const [extraTransports, setExtraTransports] = useState([]);
//   const [filteredTransports, setFilteredTransports] = useState([]);
//   const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const [trainData, setTrainData] = useState([]);
//   const [busesData, setBusesData] = useState([]);
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
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [searchTerm]);

//   const fetchTrainData = async () => {
//     try {
//       let geocodeApiUrl;
//       if (searchTerm.trim() !== '') {
//         if (searchOption === 'state') {
//           geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         } else {
//           geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         }
//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {

//           const busUrl = `https://api.geoapify.com/v2/places?categories=public_transport.bus&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

//           const trainUrl = `https://api.geoapify.com/v2/places?categories=public_transport.train&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const [busResponse, trainResponse] = await Promise.all([fetch(busUrl), fetch(trainUrl)]);
//           const [busesData, trainData] = await Promise.all([busResponse.json(), trainResponse.json()]);

//           setBusesData(busesData);
//           setTrainData(trainData);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching train data:", error);
//     }
//   };


//   useEffect(() => {
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

//     fetchTrainData()
//   }, [searchTerm, transports, extraTransports]);

//   return (
//     <div>
//       {/* Remove the button, as it's now automatically updating based on searchTerm */}
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
//             <h3>Bus Stop Information</h3>
//             {busesData.features && busesData.features.map((result) => (
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

//           <h2>Train Stations</h2>
//           {trainData.features && trainData.features.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//               <h5 className="card-title">{result.properties.name}</h5>
//                   <p className="card-text">Address: {result.properties.formatted}</p>
//                   <p className="card-text">Eircode: {result.properties.postcode}</p>
//                   <p className="card-text">Operator: {result.properties.datasource.raw.operator}</p>
//                   <p className="card-text">City: {result.properties.datasource.raw['addr:city']}</p>
//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default Transport;




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
