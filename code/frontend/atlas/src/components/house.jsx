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



// // THIS ONE WORKS - GIVES HOUSE PRICES *****
// import React, { useState, useEffect } from "react";

// function House() {
//   const [houses, setHouses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/house/`)
//       .then((response) => response.json())
//       .then((data) => {
//         setHouses(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const displayHouse = () => {
//     const filteredHouses = houses.filter(
//       (house) =>
//         house.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         house.year.toString().includes(searchTerm) ||
//         house.price.toString().includes(searchTerm)
//     );

//     return filteredHouses.map((house) => (
//       <div key={house.id}>
//         <p>Year: {house.year}</p>
//         <p>Area: {house.area}</p>
//         <p>Average price: {house.price}</p>
//       </div>
//     ));
//   };

//   const handleSearch = () => {
//     // Fetch data based on the search term
//     fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setHouses(data);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <h1>Average Housing prices</h1>
//       <div>
//         <label htmlFor="searchTerm">Search by Area:</label>
//         <input
//           type="text"
//           id="searchTerm"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {displayHouse()}
//     </div>
//   );
// }

// export default House;











// import React, { useState, useEffect } from 'react';

// function HouseNav() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale, Limerick"); // Default to "Abbeyfeale, Limerick"
  
//   useEffect(() => {
//     const areaCode = getAreaCode(areaInput);

//     const apiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, [areaInput]);

//   const formatHouseData = () => {
//     if (!data) return 'Loading......';

//     const houseData = data.result && data.result.value;

//     // Modify this section based on your data structure
//     const formattedHouseData = houseData.map((value, index) => {
//       // Adjust accordingly based on the structure of your data
//       return `${index + 1}: ${value}`;
//     });

//     return formattedHouseData.join('\n');
//   };

//   const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
//     const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//       "jsonrpc": "2.0",
//       "method": "PxStat.Data.Cube_API.ReadDataset",
//       "params": {
//         "class": "query",
//         "id": [id1, id2, id3, id4],
//         "dimension": {
//           [id1]: {
//             "category": {
//               "index": [categoryIndex]
//             }
//           },
//           [id2]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id3]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id4]: {
//             "category": {
//               "index": ["110000"] // Default to Carlow
//             }
//           }
//         },
//         "extension": {
//           "pivot": null,
//           "codes": true,
//           "language": {
//             "code": "en"
//           },
//           "format": {
//             "type": "JSON-stat",
//             "version": "2.0"
//           },
//           "matrix": "RIA02"
//         },
//         "version": "2.0"
//       }
//     }))}`;

//     return apiUrl;
//   };

//   const getAreaCode = (area) => {
//     // Map your areas to corresponding codes
//     const areaMapping = {
//       "Abbeyfeale, Limerick": "150200",
//       // Add other areas here
//       "Youghal, Cork": "118800"
//     };

//     return areaMapping[area];
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter area name"
//         value={areaInput}
//         onChange={(e) => setAreaInput(e.target.value)}
//       />
//       <pre>{formatHouseData()}</pre>
//     </div>
//   );
// }

// export default HouseNav;



















// import React, { useState, useEffect } from 'react';

// function HouseNav() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale, Limerick"); // Default to "Abbeyfeale, Limerick"

//   const areaMapping = {
//     "Abbeyfeale, Limerick": "150200",
//     // Add other areas here
//     "Youghal, Cork": "118800"
//   };


//   useEffect(() => {
//     const areaCode = areaMapping[areaInput];

//     const apiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, [areaInput]);


//   const formatHouseData = () => {
//     if (!data) return 'Loading......';

//     const houseData = data.result;

//     // Corrected access using square bracket notation
//     const value = houseData?.dimension?.STATISTIC?.['TLIST(A1)']?.Year?.C02970V03592?.C02969V03591?.C03004V03625?.value;

//     if (!value) return 'Value not found in data.';

//     return `Value: ${value}`;
//   };

//   const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
//     const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//       "jsonrpc": "2.0",
//       "method": "PxStat.Data.Cube_API.ReadDataset",
//       "params": {
//         "class": "query",
//         "id": [
//             id1, 
//             id2, 
//             id3, 
//             id4
//         ],
//         "dimension": {
//           [id1]: {
//             "category": {
//               "index": [2022]
//             }
//           },
//           [id2]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id3]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id4]: {
//             "category": {
//               "index": [categoryIndex] // 
//             }
//           }
//         },
//         "extension": {
//           "pivot": null,
//           "codes": true,
//           "language": {
//             "code": "en"
//           },
//           "format": {
//             "type": "JSON-stat",
//             "version": "2.0"
//           },
//           "matrix": "RIA02"
//         },
//         "version": "2.0"
//       }
//     }))}`;
//     return apiUrl;
//   };



//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter area name"
//         value={areaInput}
//         onChange={(e) => setAreaInput(e.target.value)}
//       />
//       <pre>{formatHouseData()}</pre>
//     </div>
//   );
// }

// export default HouseNav;



















// import React, { useState, useEffect } from 'react';

// function HouseNav() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale, Limerick"); // Default to "Abbeyfeale, Limerick"

//   const areaMapping = {
//     "Abbeyfeale, Limerick": "150200",
//     // Add other areas here
//     "Youghal, Cork": "118800"
//   };


//   useEffect(() => {
//     const areaCode = areaMapping[areaInput];

//     const apiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, [areaInput]);


//   const formatHouseData = () => {
//     if (!data) return 'Loading......';

//     const houseData = data.result;

//     // Corrected access using square bracket notation
//     const value = houseData?.dimension?.STATISTIC?.['TLIST(A1)']?.Year?.C02970V03592?.C02969V03591?.C03004V03625?.value;

//     if (!value) return 'Value not found in data.';

//     return `Value: ${value}`;
//   };

//   const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
//     const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//       "jsonrpc": "2.0",
//       "method": "PxStat.Data.Cube_API.ReadDataset",
//       "params": {
//         "class": "query",
//         "id": [
//             id1, 
//             id2, 
//             id3, 
//             id4
//         ],
//         "dimension": {
//           [id1]: {
//             "category": {
//               "index": [`${categoryIndex}`]
//             }
//           },
//           [id2]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id3]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id4]: {
//             "category": {
//               "index": [categoryIndex] // 
//             }
//           }
//         },
//         "extension": {
//           "pivot": null,
//           "codes": true,
//           "language": {
//             "code": "en"
//           },
//           "format": {
//             "type": "JSON-stat",
//             "version": "2.0"
//           },
//           "matrix": "RIA02"
//         },
//         "version": "2.0"
//       }
//     }))}`;
//     return apiUrl;
//   };



//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter area name"
//         value={areaInput}
//         onChange={(e) => setAreaInput(e.target.value)}
//       />
//       <pre>{formatHouseData()}</pre>
//     </div>
//   );
// }

// export default HouseNav;










// import React, { useState, useEffect } from 'react';

// function HouseNav() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale, Limerick"); // Default to "Abbeyfeale, Limerick"
//   const [apiUrl, setApiUrl] = useState(""); // New state variable to store the generated URL

//   const areaMapping = {
//     "Abbeyfeale, Limerick": "150200",
//     // Add other areas here
//     "Youghal, Cork": "118800"
//   };

//   useEffect(() => {
//     const areaCode = areaMapping[areaInput];

//     const generatedApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//     setApiUrl(generatedApiUrl); // Update the state with the generated URL

//     fetch(generatedApiUrl)
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, [areaInput]);

//   const formatHouseData = () => {
//     if (!data) return 'Loading......';

//     const houseData = data.result;

//     // Corrected access using square bracket notation
//     const value = houseData?.dimension?.STATISTIC?.['TLIST(A1)']?.Year?.C02970V03592?.C02969V03591?.C03004V03625?.value;

//     if (!value) return 'Value not found in data.';

//     return `Value: ${value}`;
//   };

//   const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
//     const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//       "jsonrpc": "2.0",
//       "method": "PxStat.Data.Cube_API.ReadDataset",
//       "params": {
//         "class": "query",
//         "id": [id1, id2, id3, id4],
//         "dimension": {
//           [id1]: {
//             "category": {
//               "index": ["2022"] // Update with the desired year or leave it empty
//             }
//           },
//           [id2]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id3]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id4]: {
//             "category": {
//               "index": [categoryIndex]
//             }
//           }
//         },
//         "extension": {
//           "pivot": null,
//           "codes": true,
//           "language": {
//             "code": "en"
//           },
//           "format": {
//             "type": "JSON-stat",
//             "version": "2.0"
//           },
//           "matrix": "RIA02"
//         },
//         "version": "2.0"
//       }
//     }))}`;
  
//     return apiUrl;
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter area name"
//         value={areaInput}
//         onChange={(e) => setAreaInput(e.target.value)}
//       />
//       <pre>{formatHouseData()}</pre>
//     </div>
//   );
// }

// export default HouseNav;





// import React, { useState, useEffect } from 'react';

// function HouseNav() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale, Limerick"); // Default to "Abbeyfeale, Limerick"
//   const [apiUrl, setApiUrl] = useState(""); // New state variable to store the generated URL

//   const areaMapping = {
//     "Abbeyfeale, Limerick": "150200",
//     // Add other areas here
//     "Youghal, Cork": "118800"
//   };

//   useEffect(() => {
//     const areaCode = areaMapping[areaInput];

//     const generatedApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//     setApiUrl(generatedApiUrl); // Update the state with the generated URL

//     fetch(generatedApiUrl)
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, [areaInput]);

//   const formatHouseData = () => {
//     if (!data) return 'Loading...';
  
//     const value = data?.result?.value[0];
  
//     if (!value) return 'Value not found in data.';
  
//     return `Value: ${value}`;
//   };

//   const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
//     const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//       "jsonrpc": "2.0",
//       "method": "PxStat.Data.Cube_API.ReadDataset",
//       "params": {
//         "class": "query",
//         "id": [id1, id2, id3, id4],
//         "dimension": {
//           [id1]: {
//             "category": {
//               "index": ["2022"] // Update with the desired year or leave it empty
//             }
//           },
//           [id2]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id3]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id4]: {
//             "category": {
//               "index": [categoryIndex]
//             }
//           }
//         },
//         "extension": {
//           "pivot": null,
//           "codes": true,
//           "language": {
//             "code": "en"
//           },
//           "format": {
//             "type": "JSON-stat",
//             "version": "2.0"
//           },
//           "matrix": "RIA02"
//         },
//         "version": "2.0"
//       }
//     }))}`;
  
//     return apiUrl;
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter area name"
//         value={areaInput}
//         onChange={(e) => setAreaInput(e.target.value)}
//       />
//       <pre>{formatHouseData()}</pre>
//     </div>
//   );
// }

// export default HouseNav;











// import React, { useState, useEffect } from 'react';

// function HouseNav() {
//   const [data, setData] = useState(null);
//   const [houses, setHouses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [areaInput, setAreaInput] = useState("");
//   const [apiUrl, setApiUrl] = useState(""); 

//   const areaMapping = {
//     "Carlow": "110000",
//     "Cavan": "110550",
//     "Clare": "111600",
//     "Cork": "113000",
//     "Donegal": "118900",
//     "Dublin": "120500",
//     "Balbriggan, Dublin": "120600",
//     "Blackrock, Dublin": "120700",
//     "Booterstown, Dublin": "120800",
//     "Cabinteely, Dublin": "120900",
//     "Citywest, Dublin": "121000",
//     "Dalkey, Dublin": "121200",
//     "Donabate, Dublin": "121300",
//     "Dun Laoghaire, Dublin": "121400",
//     "Glenageary, Dublin": "121500",
//     "Howth, Dublin": "121600",
//     "Killiney, Dublin": "121700",
//     "Kinsealy, Dublin": "121800",
//     "Lucan, Dublin": "121900",
//     "Lusk, Dublin": "122000",
//     "Malahide, Dublin": "122100",
//     "Monkstown, Dublin": "122200",
//     "Mount Merrion, Dublin": "122300",
//     "Portmarnock, Dublin": "122400",
//     "Rathcoole, Dublin": "122500",
//     "Rush, Dublin": "122600",
//     "Saggart, Dublin": "122700",
//     "Sandycove, Dublin": "122800",
//     "Shankill, Dublin": "122900",
//     "Skerries, Dublin": "123000",
//     "Stepaside, Dublin": "123100",
//     "Stillorgan, Dublin": "123200",
//     "Swords, Dublin": "123300",
//     "Dublin 1": "123400",
//     "Dublin 2": "123900",
//     "Dublin 3": "125000",
//     "Dublin 4": "126100",
//     "Dublin 5": "126900",
//     "Dublin 6": "127600",
//     "Dublin 6W": "128600",
//     "Dublin 7": "129100",
//     "Dublin 8": "129900",
//     "Dublin 9": "131000",
//     "Dublin 10": "131800",
//     "Dublin 11": "132100",
//     "Dublin 12": "132700",
//     "Dublin 13": "133300",
//     "Dublin 14": "134300",
//     "Dublin 15": "135000",
//     "Dublin 16": "136400",
//     "Dublin 17": "137100",
//     "Dublin 18": "137800",
//     "Dublin 20": "139100",
//     "Dublin 24": "139500",
//     "Galway": "140200",
//     "Kerry": "143500",
//     "Kildare": "144600",
//     "Laois": "147600",
//     "Leitrim": "149100",
//     "Limerick": "150100",
//     "Longford": "150100",
//     "Louth": "153300",
//     "Drogheda, Louth": "154000",
//     "Dundalk, Louth": "154200",
//     "Meath": "156600",
//     "Monaghan": "158800",
//     "Offaly": "159400",
//     "Roscommon": "160200",
//     "Sligo": "161200",
//     "Tipperary": "162500",
//     "Waterford": "164000",
//     "Westmeath": "167300",
//     "Wexford": "168200",
//     "Wicklow": "169300",
//   };

//   useEffect(() => {
//     const areaCode = areaMapping[areaInput];

//     const generatedApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//     setApiUrl(generatedApiUrl); // Update the state with the generated URL

//     fetch(generatedApiUrl)
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));

//     // Fetch data for the housing prices
//     fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setHouses(data);
//       })
//       .catch((error) => console.log(error));
//   }, [areaInput, searchTerm]);

//   const formatHouseData = () => {
//     if (!data) return '';
  
//     const value = data?.result?.value[0];
  
//     if (!value) return 'Value not found in data.';
  
//     return `Average Rent Cost: €${value}`;
//   };

//   const displayHouse = () => {
//     const filteredHouses = houses.filter(
//       (house) =>
//         house.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         house.year.toString().includes(searchTerm) ||
//         house.price.toString().includes(searchTerm)
//     );

//     return filteredHouses.map((house) => (
//       <div key={house.id}>
//         <p>Year: {house.year}</p>
//         <p>Area: {house.area}</p>
//         <p>Average Home Cost: {house.price}</p>
//       </div>
//     ));
//   };

//   const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
//     const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//       "jsonrpc": "2.0",
//       "method": "PxStat.Data.Cube_API.ReadDataset",
//       "params": {
//         "class": "query",
//         "id": [id1, id2, id3, id4],
//         "dimension": {
//           [id1]: {
//             "category": {
//               "index": ["2022"] // Update with the desired year or leave it empty
//             }
//           },
//           [id2]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id3]: {
//             "category": {
//               "index": ["-"]
//             }
//           },
//           [id4]: {
//             "category": {
//               "index": [categoryIndex]
//             }
//           }
//         },
//         "extension": {
//           "pivot": null,
//           "codes": true,
//           "language": {
//             "code": "en"
//           },
//           "format": {
//             "type": "JSON-stat",
//             "version": "2.0"
//           },
//           "matrix": "RIA02"
//         },
//         "version": "2.0"
//       }
//     }))}`;
  
//     return apiUrl;
//   };

//   const handleSearch = () => {
//     setSearchTerm(areaInput); // Update search term with the area input
//   };

//   return (
//     <div>
//       <h1>Housing and Rent Prices</h1>
//       <div>
//         <label htmlFor="searchTerm">Search by Area:</label>
//         <input
//           type="text"
//           id="searchTerm"
//           value={areaInput}
//           onChange={(e) => setAreaInput(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {displayHouse()}
//       <div>
//         <pre>{formatHouseData()}</pre>
//       </div>
//     </div>
//   );
// }

// export default HouseNav;












import React, { useState, useEffect } from 'react';

function HouseNav() {
  const [data, setData] = useState(null);
  const [houses, setHouses] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [apiUrl, setApiUrl] = useState(""); 

  const areaMapping = {
    "Carlow": "110000",
    "Cavan": "110550",
    "Clare": "111600",
    "Cork": "113000",
    "Donegal": "118900",
    "Dublin": "120500",
    "Balbriggan, Dublin": "120600",
    "Blackrock, Dublin": "120700",
    "Booterstown, Dublin": "120800",
    "Cabinteely, Dublin": "120900",
    "Citywest, Dublin": "121000",
    "Dalkey, Dublin": "121200",
    "Donabate, Dublin": "121300",
    "Dun Laoghaire, Dublin": "121400",
    "Glenageary, Dublin": "121500",
    "Howth, Dublin": "121600",
    "Killiney, Dublin": "121700",
    "Kinsealy, Dublin": "121800",
    "Lucan, Dublin": "121900",
    "Lusk, Dublin": "122000",
    "Malahide, Dublin": "122100",
    "Monkstown, Dublin": "122200",
    "Mount Merrion, Dublin": "122300",
    "Portmarnock, Dublin": "122400",
    "Rathcoole, Dublin": "122500",
    "Rush, Dublin": "122600",
    "Saggart, Dublin": "122700",
    "Sandycove, Dublin": "122800",
    "Shankill, Dublin": "122900",
    "Skerries, Dublin": "123000",
    "Stepaside, Dublin": "123100",
    "Stillorgan, Dublin": "123200",
    "Swords, Dublin": "123300",
    "Dublin 1": "123400",
    "Dublin 2": "123900",
    "Dublin 3": "125000",
    "Dublin 4": "126100",
    "Dublin 5": "126900",
    "Dublin 6": "127600",
    "Dublin 6W": "128600",
    "Dublin 7": "129100",
    "Dublin 8": "129900",
    "Dublin 9": "131000",
    "Dublin 10": "131800",
    "Dublin 11": "132100",
    "Dublin 12": "132700",
    "Dublin 13": "133300",
    "Dublin 14": "134300",
    "Dublin 15": "135000",
    "Dublin 16": "136400",
    "Dublin 17": "137100",
    "Dublin 18": "137800",
    "Dublin 20": "139100",
    "Dublin 24": "139500",
    "Galway": "140200",
    "Kerry": "143500",
    "Kildare": "144600",
    "Laois": "147600",
    "Leitrim": "149100",
    "Limerick": "150100",
    "Longford": "150100",
    "Louth": "153300",
    "Drogheda, Louth": "154000",
    "Dundalk, Louth": "154200",
    "Meath": "156600",
    "Monaghan": "158800",
    "Offaly": "159400",
    "Roscommon": "160200",
    "Sligo": "161200",
    "Tipperary": "162500",
    "Waterford": "164000",
    "Westmeath": "167300",
    "Wexford": "168200",
    "Wicklow": "169300",
  };

  useEffect(() => {
    // Fetch data for the housing prices
    const fetchHousesData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchHousesData();
    }
  }, [searchTerm]);

  const formatHouseData = () => {
    if (!data) return '';
    const value = data?.result?.value[0];
    if (!value) return 'Value not found in data.';
    return `Average Rent Cost: €${value}`;
  };

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
        <p>Average Home Cost: {house.price}</p>
      </div>
    ));
  };

  const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
    const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
      "jsonrpc": "2.0",
      "method": "PxStat.Data.Cube_API.ReadDataset",
      "params": {
        "class": "query",
        "id": [id1, id2, id3, id4],
        "dimension": {
          [id1]: {
            "category": {
              "index": ["2022"]
            }
          },
          [id2]: {
            "category": {
              "index": ["-"]
            }
          },
          [id3]: {
            "category": {
              "index": ["-"]
            }
          },
          [id4]: {
            "category": {
              "index": [categoryIndex]
            }
          }
        },
        "extension": {
          "pivot": null,
          "codes": true,
          "language": {
            "code": "en"
          },
          "format": {
            "type": "JSON-stat",
            "version": "2.0"
          },
          "matrix": "RIA02"
        },
        "version": "2.0"
      }
    }))}`;
  
    return apiUrl;
  };

  const handleSearch = () => {
    setSearchTerm(areaInput); 

    const areaCode = areaMapping[areaInput];
    const generatedApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);
    setApiUrl(generatedApiUrl);

    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(generatedApiUrl);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  };

  return (
    <div>
      <h1>Housing and Rent Prices</h1>
      <div>
        <label htmlFor="searchTerm">Search by Area:</label>
        <input
          type="text"
          id="searchTerm"
          value={areaInput}
          onChange={(e) => setAreaInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {displayHouse()}
      <div>
        <pre>{formatHouseData()}</pre>
      </div>
    </div>
  );
}

export default HouseNav;
