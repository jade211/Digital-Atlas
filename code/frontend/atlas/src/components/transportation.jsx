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


import React, { useState, useEffect } from "react";

function Transport({ searchTerm }) {
  const [transports, setTransports] = useState([]);
  const [extraTransports, setExtraTransports] = useState([]);
  const [filteredTransports, setFilteredTransports] = useState([]);
  const [filteredExtraTransports, setFilteredExtraTransports] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

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
  }, [searchTerm]); // Listen to changes in searchTerm

  useEffect(() => {
    // Filter transports when searchTerm changes
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
  }, [searchTerm, transports, extraTransports]);

  return (
    <div>
      {/* Remove the button, as it's now automatically updating based on searchTerm */}
      {searchButtonClicked && (
        <>
          <h3>DUBLIN BUSES</h3>
          {filteredTransports.length > 0 ? (
            <ul>
              {filteredTransports.map((transport) => (
                <li key={transport.id}>
                  <p><strong>Bus:</strong> {transport.bus}</p>
                  <p><strong>First Stop:</strong> {transport.route_from}</p>
                  <p><strong>Last Stop:</strong> {transport.route_to}</p>
                  <p><strong>County:</strong> {transport.county}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Bus Services For This Area</p>
          )}

          <h3>BUS EIREANN</h3>
          {filteredExtraTransports.length > 0 ? (
            <ul>
              {filteredExtraTransports.map((transport) => (
                <li key={transport.id}>
                  <p><strong>Bus:</strong> {transport.bus}</p>
                  <p><strong>First Stop:</strong> {transport.route_from}</p>
                  <p><strong>Last Stop:</strong> {transport.route_to}</p>
                  <p><strong>County:</strong> {transport.county}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Bus Services For This Area</p>
          )}
        </>
      )}
    </div>
  );
}

export default Transport;