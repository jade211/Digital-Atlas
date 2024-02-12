
import React, { useState, useEffect } from "react";

function TransportNav() {
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
            <h3>Bus: {transport.bus}</h3>
            <h3>Fisrt stop: {transport.route_from}</h3>
            <h3>Last Stop: {transport.route_to}</h3>
            <h3>County: {transport.county}</h3>
          </li>
        ))}
      </ul>

      <h1>BUS EIREANN</h1>
      <ul>
        {filteredExtraTransports.map((transport) => (
          <li key={transport.id}>
            <h3>Bus: {transport.bus}</h3>
            <h3>Fisrt Stop: {transport.route_from}</h3>
            <h3>Last Stop: {transport.route_to}</h3>
            <h3>County: {transport.county}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransportNav;
