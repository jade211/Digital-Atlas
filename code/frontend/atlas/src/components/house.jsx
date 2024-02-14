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

// function House() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale"); // Default to "Abbeyfeale"
  
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
//       "Abbeyfeale": "150200",
//       // Add other areas here
//       "Youghal": "118800"
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

// export default House;



















// import React, { useState, useEffect } from 'react';

// function House() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale"); // Default to "Abbeyfeale"

//   const areaMapping = {
//     "Abbeyfeale": "150200",
//     // Add other areas here
//     "Youghal": "118800"
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

// export default House;



















// import React, { useState, useEffect } from 'react';

// function House() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale"); // Default to "Abbeyfeale"

//   const areaMapping = {
//     "Abbeyfeale": "150200",
//     // Add other areas here
//     "Youghal": "118800"
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

// export default House;










// import React, { useState, useEffect } from 'react';

// function House() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale"); // Default to "Abbeyfeale"
//   const [apiUrl, setApiUrl] = useState(""); // New state variable to store the generated URL

//   const areaMapping = {
//     "Abbeyfeale": "150200",
//     // Add other areas here
//     "Youghal": "118800"
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

// export default House;





// import React, { useState, useEffect } from 'react';

// function House() {
//   const [data, setData] = useState(null);
//   const [areaInput, setAreaInput] = useState("Abbeyfeale"); // Default to "Abbeyfeale"
//   const [apiUrl, setApiUrl] = useState(""); // New state variable to store the generated URL

//   const areaMapping = {
//     "Abbeyfeale": "150200",
//     // Add other areas here
//     "Youghal": "118800"
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

// export default House;











// import React, { useState, useEffect } from 'react';

// function House() {
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
//     "dublin": "120500",
//     "Balbriggan": "120600",
//     "Blackrock": "120700",
//     "Booterstown": "120800",
//     "Cabinteely": "120900",
//     "Citywest": "121000",
//     "Dalkey": "121200",
//     "Donabate": "121300",
//     "Dun Laoghaire": "121400",
//     "Glenageary": "121500",
//     "Howth": "121600",
//     "Killiney": "121700",
//     "Kinsealy": "121800",
//     "Lucan": "121900",
//     "Lusk": "122000",
//     "Malahide": "122100",
//     "Monkstown": "122200",
//     "Mount Merrion": "122300",
//     "Portmarnock": "122400",
//     "Rathcoole": "122500",
//     "Rush": "122600",
//     "Saggart": "122700",
//     "Sandycove": "122800",
//     "Shankill": "122900",
//     "Skerries": "123000",
//     "Stepaside": "123100",
//     "Stillorgan": "123200",
//     "Swords": "123300",
//     "dublin 1": "123400",
//     "dublin 2": "123900",
//     "dublin 3": "125000",
//     "dublin 4": "126100",
//     "dublin 5": "126900",
//     "dublin 6": "127600",
//     "dublin 6W": "128600",
//     "dublin 7": "129100",
//     "dublin 8": "129900",
//     "dublin 9": "131000",
//     "dublin 10": "131800",
//     "dublin 11": "132100",
//     "dublin 12": "132700",
//     "dublin 13": "133300",
//     "dublin 14": "134300",
//     "dublin 15": "135000",
//     "dublin 16": "136400",
//     "dublin 17": "137100",
//     "dublin 18": "137800",
//     "dublin 20": "139100",
//     "dublin 24": "139500",
//     "Galway": "140200",
//     "Kerry": "143500",
//     "Kildare": "144600",
//     "Laois": "147600",
//     "Leitrim": "149100",
//     "Limerick": "150100",
//     "Longford": "150100",
//     "Louth": "153300",
//     "Drogheda": "154000",
//     "Dundalk": "154200",
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

// export default House;












// import React, { useState, useEffect } from 'react';

// function House() {
//   const [data, setData] = useState(null);
//   const [houses, setHouses] = useState([]); // Initialize as an empty array
//   const [searchTerm, setSearchTerm] = useState("");
//   const [areaInput, setAreaInput] = useState("");
//   const [apiUrl, setApiUrl] = useState(""); 

//   const areaMapping = {
//     "carlow": "110000",
//     "cavan": "110550",
//     "bailieborough": "110600",
//     "clare": "111600",
//     "cork": "113000",
//     "donegal": "118900",
//     "dublin": "120500",
//     "balbriggan": "120600",
//     "blackrock": "120700",
//     "booterstown": "120800",
//     "cabinteely": "120900",
//     "citywest": "121000",
//     "dalkey": "121200",
//     "donabate": "121300",
//     "dun laoghaire": "121400",
//     "glenageary": "121500",
//     "howth": "121600",
//     "killiney": "121700",
//     "kinsealy": "121800",
//     "lucan": "121900",
//     "lusk": "122000",
//     "malahide": "122100",
//     "monkstown": "122200",
//     "mount merrion": "122300",
//     "portmarnock": "122400",
//     "rathcoole": "122500",
//     "rush": "122600",
//     "saggart": "122700",
//     "sandycove": "122800",
//     "shankill": "122900",
//     "skerries": "123000",
//     "stepaside": "123100",
//     "stillorgan": "123200",
//     "swords": "123300",
//     "dublin 1": "123400",
//     "dublin 2": "123900",
//     "dublin 3": "125000",
//     "dublin 4": "126100",
//     "dublin 5": "126900",
//     "dublin 6": "127600",
//     "dublin 6W": "128600",
//     "dublin 7": "129100",
//     "dublin 8": "129900",
//     "dublin 9": "131000",
//     "dublin 10": "131800",
//     "dublin 11": "132100",
//     "dublin 12": "132700",
//     "dublin 13": "133300",
//     "dublin 14": "134300",
//     "dublin 15": "135000",
//     "dublin 16": "136400",
//     "dublin 17": "137100",
//     "dublin 18": "137800",
//     "dublin 20": "139100",
//     "dublin 24": "139500",
//     "galway": "140200",
//     "kerry": "143500",
//     "kildare": "144600",
//     "laois": "147600",
//     "leitrim": "149100",
//     "limerick": "150100",
//     "longford": "150100",
//     "louth": "153300",
//     "drogheda": "154000",
//     "dundalk": "154200",
//     "meath": "156600",
//     "monaghan": "158800",
//     "offaly": "159400",
//     "roscommon": "160200",
//     "sligo": "161200",
//     "tipperary": "162500",
//     "waterford": "164000",
//     "westmeath": "167300",
//     "wexford": "168200",
//     "wicklow": "169300",
//   };

//   useEffect(() => {
//     // Fetch data for the housing prices
//     const fetchHousesData = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`);
//         const data = await response.json();
//         setHouses(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (searchTerm) {
//       fetchHousesData();
//     }
//   }, [searchTerm]);

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
//               "index": ["2022"]
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
//     setSearchTerm(areaInput); 

//     const areaCode = areaMapping[areaInput];
//     const generatedApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);
//     setApiUrl(generatedApiUrl);

//     const fetchDataFromApi = async () => {
//       try {
//         const response = await fetch(generatedApiUrl);
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataFromApi();
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

// export default House;




import React, { useState, useEffect } from 'react';

function House({ searchTerm }) {
  const [data, setData] = useState(null);
  const [houses, setHouses] = useState([]); // Initialize as an empty array
  const [areaInput, setAreaInput] = useState("");
  const [apiUrl, setApiUrl] = useState(""); 

  const areaMapping = {
    "110000": "Carlow",
    "110200": "Carlow Town",
    "110300": "Graiguecullen",
    "110500": "Tullow",
    "110550": "Cavan",
    "111100": "Cavan Town",
    "110600": "Bailieborough",
    "110800": "Ballyconnell",
    "110900": "Ballyjamesduff",
    "111000": "Belturbet",
    "111200": "Cootehill",
    "111300": "Kingscourt",
    "111500": "Virginia",
    "111600": "Clare",
    "111900": "Ennis",
    "112100": "Killaloe",
    "112200": "Kilrush",
    "112400": "Newmarket-On-Fergus",
    "112700": "Shannon",
    "112800": "Sixmilebridge",
    "113000": "Cork",
    "115200": "Cork City",
    "113100": "Ballincollig",
    "113200": "Ballintemple",
    "113300": "Ballinure",
    "113500": "Bandon",
    "113600": "Bantry",
    "113800": "Bishopstown",
    "113900": "Blackpool",
    "114000": "Blackrock",
    "114100": "Blarney",
    "114300": "Carrigaline",
    "114400": "Carrigtwohill",
    "114500": "Castlemartyr",
    "114700": "Charleville",
    "114800": "Clonakilty",
    "114900": "Cloyne",
    "115000": "Cobh",
    "115500": "Crosshaven",
    "115700": "Douglas",
    "115900": "Dunmanway",
    "116100": "Fermoy",
    "116200": "Frankfield",
    "116300": "Glanmire",
    "116500": "Kanturk",
    "116800": "Kinsale",
    "116900": "Macroom",
    "117000": "Mallow",
    "117100": "Midleton",
    "117200": "Millstreet",
    "117300": "Mitchelstown",
    "117400": "Montenotte",
    "117500": "Passage West",
    "117600": "Rathcormac",
    "117700": "Ringaskiddy",
    "117900": "Rochestown",
    "118200": "Skibbereen",
    "118300": "Tivoli",
    "118400": "Tower",
    "118600": "Whitegate",
    "118700": "Wilton",
    "118800": "Youghal",
    "118900": "Donegal",
    "119800": "Donegal Town",
    "119200": "Ballybofey",
    "119400": "Buncrana",
    "119500": "Bundoran",
    "119600": "Carndonagh",
    "120000": "Letterkenny",
    "120100": "Lifford",
    "120400": "Stranorlar",
    "120500": "Dublin",
    "120600": "Balbriggan",
    "120700": "Blackrock",
    "120800": "Booterstown",
    "120900": "Cabinteely",
    "121000": "Citywest",
    "121200": "Dalkey",
    "121300": "Donabate",
    "121400": "Dun Laoghaire",
    "121500": "Glenageary",
    "121600": "Howth",
    "121700": "Killiney",
    "121800": "Kinsealy",
    "121900": "Lucan",
    "122000": "Lusk",
    "122100": "Malahide",
    "122200": "Monkstown",
    "122300": "Mount Merrion",
    "122400": "Portmarnock",
    "122500": "Rathcoole",
    "122600": "Rush",
    "122700": "Saggart",
    "122800": "Sandycove",
    "122900": "Shankill",
    "123000": "Skerries",
    "123100": "Stepaside",
    "123200": "Stillorgan",
    "123300": "Swords",
    "123400": "Dublin 1",
    "123500": "I.F.S.C.",
    "123600": "Parnell Street",
    "123700": "Spencer Dock",
    "123800": "Summerhill",
    "123900": "Dublin 2",
    "124000": "Aungier Street",
    "124100": "Charlemont Street",
    "124200": "Grand Canal Dock",
    "124300": "Grand Canal Square",
    "124400": "Hanover Quay",
    "124500": "Lower Mount Street",
    "124600": "Pearse Street",
    "124700": "Tara Street",
    "124800": "Temple Bar",
    "124900": "Townsend Street",
    "125000": "Dublin 3",
    "125200": "Clonliffe",
    "125300": "Clontarf",
    "125400": "Drumcondra",
    "125500": "East Wall",
    "125600": "Eastwall",
    "125700": "Fairview",
    "125900": "Marino",
    "126000": "North Strand",
    "126100": "Dublin 4",
    "126200": "Ballsbridge",
    "126300": "Donnybrook",
    "126400": "Irishtown",
    "126500": "Merrion",
    "126600": "Pembroke",
    "126700": "Ringsend",
    "126800": "Sandymount",
    "126900": "Dublin 5",
    "127000": "Artane",
    "127400": "Killester",
    "127500": "Raheny",
    "127600": "Dublin 6",
    "127800": "Dartry",
    "127900": "Harolds Cross",
    "128000": "Milltown",
    "128100": "Ranelagh",
    "128200": "Rathgar",
    "128300": "Rathmines",
    "128500": "Terenure",
    "128600": "Dublin 6W",
    "128700": "Harolds Cross",
    "128900": "Templeogue",
    "129000": "Terenure",
    "129100": "Dublin 7",
    "129200": "Arbour Hill",
    "129300": "Cabra",
    "129400": "Navan Road",
    "129500": "North Circular Road",
    "129600": "Phibsboro",
    "129700": "Smithfield",
    "129800": "Stoneybatter",
    "129900": "Dublin 8",
    "130000": "Christchurch",
    "130100": "Cork Street",
    "130200": "Dolphins Barn",
    "130300": "Inchicore",
    "130400": "Islandbridge",
    "130500": "Kilmainham ",
    "130600": "Portobello",
    "130700": "Rialto",
    "130800": "South Circular Road",
    "130900": "The Coombe",
    "131000": "Dublin 9",
    "131100": "Ballymun",
    "131200": "Beaumont",
    "131400": "Drumcondra",
    "131500": "Glasnevin",
    "131600": "Santry",
    "131700": "Whitehall",
    "131800": "Dublin 10",
    "131900": "Ballyfermot",
    "132000": "Cherry Orchard",
    "132100": "Dublin 11",
    "132200": "Ballymun",
    "132300": "Finglas",
    "132400": "Glasnevin",
    "132500": "Meakstown",
    "132600": "St Margarets Road",
    "132700": "Dublin 12",
    "132900": "Crumlin",
    "133000": "Drimnagh",
    "133100": "Kimmage",
    "133200": "Walkinstown",
    "133300": "Dublin 13",
    "133500": "Baldoyle",
    "133600": "Balgriffin",
    "133900": "Clongriffin",
    "134000": "Donaghmede",
    "134200": "Sutton",
    "134300": "Dublin 14",
    "134400": "Churchtown",
    "134500": "Clonskeagh",
    "134600": "Dundrum",
    "134700": "Goatstown",
    "134900": "Rathfarnham",
    "135000": "Dublin 15",
    "135100": "Ashtown",
    "135200": "Blanchardstown",
    "135300": "Carpenterstown",
    "135400": "Castleknock",
    "135500": "Clonee",
    "135600": "Clonsilla",
    "135700": "Coolmine",
    "135900": "Mulhuddart",
    "136000": "Ongar",
    "136100": "Porterstown",
    "136200": "Royal Canal Park",
    "136300": "Tyrrelstown",
    "136400": "Dublin 16",
    "136500": "Ballinteer",
    "136600": "Dundrum",
    "136700": "Knocklyon",
    "136800": "Rathfarnham",
    "136900": "Sandyford",
    "137100": "Dublin 17",
    "137500": "Malahide Road",
    "137600": "Northern Cross",
    "137800": "Dublin 18",
    "137900": "Cabinteely",
    "138000": "Carrickmines",
    "138100": "Foxrock",
    "138300": "Leopardstown",
    "138600": "Sandyford",
    "138900": "Stepaside",
    "139100": "Dublin 20",
    "139200": "Chapelizod",
    "139300": "Palmerstown",
    "139400": "Clondalkin",
    "139500": "Dublin 24",
    "139600": "Ballycullen",
    "139700": "Citywest",
    "139800": "Firhouse",
    "140100": "Tallaght",
    "140200": "Galway",
    "141600": "Galway City",
    "140300": "Athenry",
    "140400": "Ballinasloe",
    "140500": "Ballybane",
    "140600": "Ballybrit",
    "140800": "Barna",
    "140900": "Bohermore",
    "141000": "Claregalway",
    "141200": "Clifden",
    "141400": "Doughiska",
    "141700": "Gort",
    "141800": "Headford",
    "141900": "Knocknacarra",
    "142000": "Loughrea",
    "142100": "Mervue",
    "142200": "Monivea",
    "142300": "Moycullen",
    "142400": "Newcastle",
    "142500": "Oranmore",
    "142600": "Oughterard",
    "142700": "Portumna",
    "142800": "Rahoon",
    "142900": "Renmore",
    "143000": "Roscam",
    "143100": "Salthill",
    "143200": "Tuam",
    "143300": "Wellpark",
    "143400": "Woodquay",
    "143500": "Kerry",
    "143700": "Castleisland",
    "143800": "Dingle",
    "143900": "Kenmare",
    "144000": "Killarney",
    "144100": "Killorglin",
    "144200": "Listowel",
    "144500": "Tralee",
    "144600": "Kildare",
    "145400": "Kildare Town",
    "144700": "Athy",
    "144800": "Castledermot",
    "144900": "Celbridge",
    "145000": "Clane",
    "145200": "Kilcock",
    "145300": "Kilcullen",
    "145500": "Kill",
    "145600": "Leixlip",
    "145700": "Maynooth",
    "145800": "Monasterevin",
    "145900": "Naas",
    "146000": "Newbridge",
    "146200": "Rathangan",
    "146300": "Sallins",
    "146500": "Kilkenny",
    "147200": "Kilkenny City",
    "146700": "Callan",
    "146800": "Castlecomer",
    "146900": "Freshford",
    "147100": "Kells",
    "147400": "Thomastown",
    "147600": "Laois",
    "148500": "Mountmellick",
    "148600": "Mountrath",
    "148700": "Portarlington",
    "148800": "Portlaoise",
    "149100": "Leitrim",
    "149300": "Carrick-On-Shannon",
    "149900": "Manorhamilton",
    "150100": "Limerick",
    "151900": "Limerick City",
    "150200": "Abbeyfeale",
    "150400": "Annacotty",
    "150900": "Castleconnell",
    "151000": "Castletroy",
    "151100": "Corbally",
    "151300": "Dock Road",
    "151400": "Dooradoyle",
    "151500": "Glen",
    "151700": "Kilmallock",
    "152000": "Newcastle West",
    "152100": "Old Cratloe Road",
    "152200": "Raheen",
    "152400": "Longford",
    "153100": "Longford Town",
    "152500": "Ballymahon",
    "152800": "Edgeworthstown",
    "153200": "Newtownforbes",
    "153300": "Louth",
    "153400": "Ardee",
    "154000": "Drogheda",
    "154200": "Dundalk",
    "154500": "Louth Town",
    "154900": "Mayo",
    "155100": "Ballina",
    "155200": "Ballinrobe",
    "155300": "Ballyhaunis",
    "155400": "Belmullet",
    "155500": "Castlebar",
    "155600": "Charlestown",
    "155700": "Claremorris",
    "155900": "Foxford",
    "156400": "Swinford",
    "156500": "Westport",
    "156600": "Meath",
    "156700": "Ashbourne",
    "156800": "Athboy",
    "157000": "Bettystown",
    "157100": "Clonee",
    "157200": "Drogheda",
    "157300": "Duleek",
    "157400": "Dunboyne",
    "157500": "Dunshaughlin",
    "157600": "Enfield",
    "157700": "Kells",
    "157800": "Laytown",
    "158100": "Navan",
    "158300": "Ratoath",
    "158500": "Stamullen",
    "158700": "Trim",
    "158800": "Monaghan",
    "158900": "Ballybay",
    "159000": "Carrickmacross",
    "159100": "Castleblayney",
    "159300": "Monaghan Town",
    "159400": "Offaly",
    "159500": "Banagher",
    "159600": "Birr",
    "159700": "Clara",
    "159900": "Edenderry",
    "160100": "Tullamore",
    "160200": "Roscommon",
    "161000": "Roscommon Town",
    "160300": "Athlone",
    "160400": "Ballaghaderreen",
    "160600": "Boyle",
    "160800": "Castlerea",
    "161100": "Strokestown",
    "161200": "Sligo",
    "162200": "Sligo Town",
    "161300": "Ballinode",
    "161400": "Ballisodare",
    "161500": "Ballymote",
    "161600": "Ballytivnan",
    "161800": "Collooney",
    "162000": "Lough Gill",
    "162300": "Strandhill",
    "162400": "Tubbercurry",
    "162500": "Tipperary",
    "163900": "Tipperary Town",
    "162600": "Ballina",
    "162800": "Cahir",
    "162900": "Carrick-On-Suir",
    "163000": "Cashel",
    "163100": "Clonmel",
    "163300": "Fethard",
    "163400": "Nenagh",
    "163600": "Roscrea",
    "163700": "Templemore",
    "163800": "Thurles",
    "164000": "Waterford",
    "167100": "Waterford City",
    "164200": "Ballytruckl, Waterford",
    "164400": "Canada Street",
    "164600": "Castle Place",
    "164700": "Cork Road",
    "164800": "Dungarvan",
    "164900": "Dunmore East",
    "165000": "Dunmore Road",
    "165200": "Ferrybank",
    "165400": "Inner Ring Road",
    "165500": "Johns Hill",
    "165900": "Lismore",
    "166000": "Mary Street",
    "166200": "Penrose Lane",
    "166300": "Poleberry",
    "166400": "Portlaw",
    "166500": "Railway Square",
    "166600": "Scotch Quay",
    "166800": "Templars Hall",
    "166900": "Tramore",
    "167300": "Westmeath",
    "167400": "Athlone",
    "167500": "Castlepollard",
    "167700": "Kilbeggan",
    "167900": "Kinnegad",
    "168000": "Moate",
    "168100": "Mullingar",
    "168200": "Wexford",
    "168300": "Bunclody",
    "168500": "Clonard",
    "168600": "Enniscorthy",
    "168700": "Ferns",
    "168800": "Ford",
    "168900": "Gorey",
    "169000": "Mulgannon",
    "169100": "New Ross",
    "169200": "Rosslare",
    "169300": "Wicklow",
    "171200": "Wicklow Town",
    "169400": "Arklow",
    "169700": "Baltinglass",
    "169900": "Blessington",
    "170000": "Bray",
    "170200": "Delgany",
    "170500": "Greystones",
    "170600": "Kilcoole",
    "170700": "Newtownmountkennedy",
    "170900": "Rathnew"
  }


  useEffect(() => {
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
        <p><strong>Year:</strong> {house.year}</p>
        <p><strong>Area:</strong> {house.area}</p>
        <p><strong>Average Home Cost:</strong> {house.price}</p>
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

  useEffect(() => {

    const areaCode = areaMapping[searchTerm];
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
  }, [areaInput, searchTerm]);

  return (
    <div>
      <h1>Housing and Rent Prices 🏠</h1>
      {displayHouse()}
      <div>
        <pre>{formatHouseData()}</pre>
      </div>
    </div>
  );
}

export default House;

