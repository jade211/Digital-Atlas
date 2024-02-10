import { useState, useEffect } from "react";

function House(){
    const [houses, setHouses] = useState([]);

    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/house/`)
        .then(response=>response.json())
        .then(data=>{
            setHouses(data)
        })
        .catch(error=>console.log(error));
    });

    const displayHouse = () =>{
        return houses.map((house) =>
        <div key={house.id}>
            <p>Year: {house.year}</p>
            <p>Area: {house.area}</p>
            <p>Average price: {house.price}</p>
        </div>
        );
    }

    return(
        <div>
            <h1>Average Housinh prices</h1>
            {displayHouse()}
        </div>
    );
};

export default House;