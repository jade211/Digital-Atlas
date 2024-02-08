import { useState, useEffect } from "react";

function Transport(){
  const [transports, setTransports] = useState([]);

  useEffect(() =>{
    fetch(`http://127.0.0.1:8000/transport/`)
    .then(response=>response.json())
    .then(data=>{
      setTransports(data)
    })
    .catch(error=>console.log(error));
  }, []);

  const displayTransport=() =>{
    return transports.map((transport) => 
    <div key={transport.id} className="transport-card">
     <p className="transport-info">Bus: {transport.bus}</p>
     <p className="transport-info">Departure: {transport.route_from}</p>
     <p className="transport-info">Destination: {transport.route_to}</p>
    </div>
    );
  }

  return (
    <div>
      <h1 className="transport-title">Transport Information</h1>
      <div className="transport-container">
        {displayTransport()}
      </div>
    </div>
  );
};

export default Transport;