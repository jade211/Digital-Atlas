// import { useState, useEffect } from "react";

// function House(){
//     const [houses, setHouses] = useState([]);

//     useEffect(() =>{
//         fetch(`http://127.0.0.1:8000/house/`)
//         .then(response=>response.json())
//         .then(data=>{
//             setHouses(data)
//         })
//         .catch(error=>console.log(error));
//     });

//     const displayHouse = () =>{
//         return houses.map((house) =>
//         <div key={house.id}>
//             <p>Year: {house.year}</p>
//             <p>Area: {house.area}</p>
//             <p>Average price: {house.price}</p>
//         </div>
//         );
//     }

//     return(
//         <div>
//             <h1>Average Housing prices</h1>
//             {displayHouse()}
//         </div>
//     );
// };

// export default House;




import React, { useState, useEffect } from "react";

function House() {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/house/`)
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const displayHouse = () => {
    const filteredHouses = houses.filter(
      (house) =>
        house.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.year.toString().includes(searchTerm) ||
        house.price.toString().includes(searchTerm)
    );

    return filteredHouses.map((house) => (
      <div key={house.id}>
        <p>Year: {house.year}</p>
        <p>Area: {house.area}</p>
        <p>Average price: {house.price}</p>
      </div>
    ));
  };

  const handleSearch = () => {
    // Fetch data based on the search term
    fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`)
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Average Housing prices</h1>
      <div>
        <label htmlFor="searchTerm">Search by Area:</label>
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {displayHouse()}
    </div>
  );
}

export default House;