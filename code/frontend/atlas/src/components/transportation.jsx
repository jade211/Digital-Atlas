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
//             <h3>{transport.bus}</h3>
//             <h3>{transport.route_from}</h3>
//             <h3>{transport.route_to}</h3>
//             <h3>{transport.county}</h3>
//           </li>
//         ))}
//       </ul>

//       <h1>BUS EIREANN</h1>
//       <ul>
//         {extratransports.map((extratransport) => (
//           <li key={extratransport.id}>
//             <h3>{extratransport.bus}</h3>
//             <h3>{extratransport.route_from}</h3>
//             <h3>{extratransport.route_to}</h3>
//             <h3>{extratransport.county}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )

// };

// export default Transport;


import React, { useState, useEffect } from "react";

function Transport() {
  const [transports, setTransports] = useState([]);
  const [extraTransports, setExtraTransports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  }, []);

  const filteredTransports = transports.filter(
    (transport) =>
      transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transport.county.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExtraTransports = extraTransports.filter(
    (transport) =>
      transport.route_from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transport.route_to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transport.county.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h1>DUBLIN BUSES</h1>
      <ul>
        {filteredTransports.map((transport) => (
          <li key={transport.id}>
            <h3>{transport.bus}</h3>
            <h3>{transport.route_from}</h3>
            <h3>{transport.route_to}</h3>
            <h3>{transport.county}</h3>
          </li>
        ))}
      </ul>

      <h1>BUS EIREANN</h1>
      <ul>
        {filteredExtraTransports.map((transport) => (
          <li key={transport.id}>
            <h3>{transport.bus}</h3>
            <h3>{transport.route_from}</h3>
            <h3>{transport.route_to}</h3>
            <h3>{transport.county}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transport;
