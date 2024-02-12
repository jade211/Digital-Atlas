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




import React, { useState, useEffect } from "react";

function TransportNav() {
  const [transports, setTransports] = useState([]);
  const [extraTransports, setExtraTransports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
  }, []);

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
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

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

export default TransportNav;