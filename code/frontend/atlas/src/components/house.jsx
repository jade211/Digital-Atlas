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




// import React, { useState, useEffect } from 'react';

// function House({ searchTerm }) {
//   const [data, setData] = useState(null);
//   const [houses, setHouses] = useState([]); // Initialize as an empty array
//   const [areaInput, setAreaInput] = useState("");
//   const [apiUrl, setApiUrl] = useState(""); 

//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     "cavan": "110550",
//     "cavan town": "111100",
//     "bailieborough": "110600",
//     "ballyconnell": "110800",
//     "ballyjamesduff": "110900",
//     "belturbet": "111000",
//     "cootehill": "111200",
//     "kingscourt": "111300",
//     "virginia": "111500",
//     "clare": "111600",
//     "ennis": "111900",
//     "killaloe": "112100",
//     "kilrush": "112200",
//     "newmarket-on-fergus": "112400",
//     "shannon": "112700",
//     "sixmilebridge": "112800",
//     "cork": "113000",
//     "cork city": "115200",
//     "ballincollig": "113100",
//     "ballintemple": "113200",
//     "ballinure": "113000",
//     "bandon": "113500",
//     "bantry": "113600",
//     "bishopstown": "113800",
//     "blackpool": "113900",
//     "blackrock, cork": "114000",
//     "blarney": "114100",
//     "carrigaline": "114300",
//     "carrigtwohill": "114400",
//     "castlemartyr": "114500",
//     "charleville": "114700",
//     "clonakilty": "114800",
//     "cloyne": "114900",
//     "cobh": "115000",
//     "crosshaven": "115500",
//     "douglas": "115700",
//     "dunmanway": "115900",
//     "fermoy": "116100",
//     "frankfield": "113000",
//     "glanmire": "116300",
//     "kanturk": "116500",
//     "kinsale": "116800",
//     "macroom": "116900",
//     "mallow": "117000",
//     "midleton": "117100",
//     "millstreet": "117200",
//     "mitchelstown": "117300",
//     "montenotte": "113000",
//     "passage west": "117500",
//     "rathcormac": "117600",
//     "ringaskiddy": "113000",
//     "rochestown": "113000",
//     "skibbereen": "118200",
//     "tivoli": "113000",
//     "tower": "113000",
//     "whitegate": "113000",
//     "wilton": "118700",
//     "youghal": "118800",
//     "donegal": "118900",   
//     "donegal town": "119800",
//     "ballybofey": "119200",
//     "buncrana": "119400",
//     "bundoran": "119500",
//     "carndonagh": "119600",
//     "letterkenny": "120000",
//     "lifford": "120100",
//     "stranorlar": "120400",
//     "dublin": "120500",
//     "balbriggan": "120600",
//     "blackrock": "120700",
//     "booterstown": "120800",
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
//     "stillorgan": "123200",
//     "swords": "123300",
//     "i.f.s.c.": "123500",
//     "parnell street": "123600",
//     "spencer dock": "123700",
//     "summerhill": "123800",
//     "aungier street": "120500",
//     "charlemont street": "124100",
//     "grand canal dock": "120500",
//     "grand canal square": "120500",
//     "hanover quay": "124400",
//     "lower mount street": "120500",
//     "pearse street": "124600",
//     "tara street": "120500",
//     "temple bar": "124800",
//     "townsend street": "124900",
//     "clonliffe": "125200",
//     "clontarf": "125300",
//     "drumcondra": "125400",
//     "east wall": "125500",
//     "fairview": "125700",
//     "marino": "125900",
//     "north strand": "126000",
//     "ballsbridge": "126200",
//     "donnybrook": "126300",
//     "irishtown": "126400",
//     "merrion": "126500",
//     "pembroke": "126600",
//     "ringsend": "126700",
//     "sandymount": "126800",
//     "artane": "127000",
//     "killester": "127400",
//     "raheny": "127500",
//     "dartry": "127800",
//     "harolds cross": "127900",
//     "milltown": "128000",
//     "ranelagh": "128100",
//     "rathgar": "128200",
//     "rathmines": "128300",
//     "templeogue": "128900",
//     "terenure": "129000",
//     "arbour hill": "129200",
//     "cabra": "129300",
//     "navan road": "120500",
//     "north circular road": "129500",
//     "phibsboro": "129600",
//     "smithfield": "129700",
//     "stoneybatter": "129800",
//     "christchurch": "130000",
//     "cork street": "130100",
//     "dolphins barn": "120500",
//     "inchicore": "130300",
//     "islandbridge": "130400",
//     "kilmainham": "130500",
//     "portobello": "130600",
//     "rialto": "130700",
//     "south circular road": "130800",
//     "the coombe": "130900",
//     "dublin 9": "131000",
//     "ballymun": "131100",
//     "beaumont": "131200",
//     "glasnevin": "131500",
//     "santry": "131600",
//     "whitehall": "131700",
//     "ballyfermot": "131900",
//     "cherry orchard": "132000",
//     "finglas": "132300",
//     "meakstown": "132300",
//     "st margarets road": "132300",
//     "crumlin": "132900",
//     "drimnagh": "133000",
//     "kimmage": "133100",
//     "walkinstown": "133200",
//     "baldoyle": "133500",
//     "balgriffin": "133600",
//     "clongriffin": "133900",
//     "donaghmede": "134000",
//     "sutton": "134200",
//     "churchtown": "134400",
//     "clonskeagh": "134500",
//     "goatstown": "134700",
//     "ashtown": "135100",
//     "blanchardstown": "135200",
//     "carpenterstown": "135200",
//     "castleknock": "135400",
//     "clonee": "135500",
//     "clonsilla": "135600",
//     "coolmine": "135600",
//     "mulhuddart": "135900",
//     "ongar": "136000",
//     "porterstown": "136100",
//     "royal canal park": "136200",
//     "tyrrelstown": "136200",
//     "ballinteer": "136500",
//     "dundrum": "136600",
//     "knocklyon": "136700",
//     "rathfarnham": "136800",
//     "malahide road": "137500",
//     "northern cross": "137500",
//     "cabinteely": "137900",
//     "carrickmines": "138000",
//     "foxrock": "138100",
//     "leopardstown": "138300",
//     "sandyford": "138600",
//     "stepaside": "138900",
//     "chapelizod": "139200",
//     "palmerstown": "139300",
//     "clondalkin": "139400",
//     "ballycullen": "139600",
//     "citywest": "139700",
//     "firhouse": "139800",
//     "tallaght": "140100",
//     "galway": "140200",
//     "galway city": "141600",
//     "athenry": "140300",
//     "ballinasloe": "140400",
//     "ballybane": "140500",
//     "ballybrit": "140600",
//     "barna": "140800",
//     "bohermore": "140900",
//     "claregalway": "141000",
//     "clifden": "141200",
//     "doughiska": "141400",
//     "gort": "141700",
//     "headford": "141800",
//     "knocknacarra": "141800",
//     "loughrea": "142000",
//     "mervue": "142300",
//     "monivea": "142300",
//     "moycullen": "142300",
//     "newcastle": "142400",
//     "oranmore": "142500",
//     "oughterard": "142600",
//     "portumna": "142700",
//     "rahoon": "142800",
//     "renmore": "142800",
//     "roscam": "142800",
//     "salthill": "143100",
//     "tuam": "143200",
//     "wellpark": "143200",
//     "woodquay": "143200",
//     "kerry": "143500",
//     "castleisland": "143700",
//     "dingle": "143800",
//     "kenmare": "143900",
//     "killarney": "144000",
//     "killorglin": "144100",
//     "listowel": "144200",
//     "tralee": "144500",
//     "kildare": "144600",
//     "kildare town": "145400",
//     "athy": "144700",
//     "castledermot": "144800",
//     "celbridge": "144900",
//     "clane": "145000",
//     "kilcock": "145200",
//     "kilcullen": "145300",
//     "kill": "145500",
//     "leixlip": "145600",
//     "maynooth": "145700",
//     "monasterevin": "145800",
//     "naas": "145900",
//     "newbridge": "146000",
//     "rathangan": "146200",
//     "sallins": "146300",
//     "kilkenny": "146500",
//     "kilkenny city": "147200",
//     "callan": "146700",
//     "castlecomer": "146800",
//     "freshford": "146900",
//     "kells": "146500",
//     "thomastown": "147400",
//     "laois": "147600",
//     "mountmellick": "148500",
//     "mountrath": "148600",
//     "portarlington": "148700",
//     "portlaoise": "148800",
//     "leitrim": "149100",
//     "carrick-on-shannon": "149300",
//     "manorhamilton": "149900",
//     "limerick": "150100",
//     "limerick city": "151900",
//     "abbeyfeale": "150200",
//     "annacotty": "150400",
//     "castleconnell": "150900",
//     "castletroy": "151000",
//     "corbally": "151100",
//     "dock road": "151300",
//     "dooradoyle": "151400",
//     "glen": "150100",
//     "kilmallock": "151700",
//     "newcastle west": "152000",
//     "old cratloe road": "150100",
//     "raheen": "152200",
//     "longford": "152400",
//     "longford town": "153100",
//     "ballymahon": "152500",
//     "edgeworthstown": "152800",
//     "newtownforbes": "153200",
//     "louth": "153300",
//     "ardee": "153400",
//     "drogheda": "154000",
//     "termonfeckin": "153300",
//     "clogherhead": "153300",
//     "baltray": "153300",
//     "dundalk": "154200",
//     "louth town": "153300",
//     "mayo": "154900",
//     "ballina": "155100",
//     "ballinrobe": "155200",
//     "ballyhaunis": "155300",
//     "belmullet": "155400",
//     "castlebar": "155500",
//     "charlestown": "155600",
//     "claremorris": "155700",
//     "foxford": "155900",
//     "swinford": "156400",
//     "westport": "156500",
//     "meath": "156600",
//     "ashbourne": "156700",
//     "athboy": "156800",
//     "bettystown": "157000",
//     "clonee, meath": "157100",
//     "drogheda, meath": "157200",
//     "duleek": "157300",
//     "dunboyne": "157400",
//     "dunshaughlin": "157500",
//     "enfield": "157600",
//     "kells, meath": "157700",
//     "laytown": "157800",
//     "navan": "158100",
//     "ratoath": "158300",
//     "stamullen": "158500",
//     "trim": "158700",
//     "monaghan": "158800",
//     "ballybay": "158900",
//     "carrickmacross": "159000",
//     "castleblayney": "159100",
//     "monaghan town": "159300",
//     "offaly": "159400",
//     "banagher": "159500",
//     "birr": "159600",
//     "clara": "159700",
//     "edenderry": "159900",
//     "tullamore": "160100",
//     "roscommon": "160200",
//     "roscommon town": "161000",
//     "athlone": "160300",
//     "ballaghaderreen": "160400",
//     "boyle": "160600",
//     "castlerea": "160800",
//     "strokestown": "161100",
//     "sligo": "161200",
//     "sligo town": "162200",
//     "ballinode": "161300",
//     "ballisodare": "161400",
//     "ballymote": "161500",
//     "ballytivnan": "161500",
//     "collooney": "161800",
//     "lough gill": "161800",
//     "strandhill": "162300",
//     "tubbercurry": "162400",
//     "tipperary": "162500",
//     "tipperary town": "163900",
//     "ballina, tipperary": "162600",
//     "cahir": "162800",
//     "carrick-on-suir": "162900",
//     "cashel": "163000",
//     "clonmel": "163100",
//     "fethard": "163300",
//     "nenagh": "163400",
//     "roscrea": "163600",
//     "templemore": "163700",
//     "thurles": "163800",
//     "waterford": "164000",
//     "waterford city": "167100",
//     "ballytruckl": "164000",
//     "canada street": "164000",
//     "castle place": "164000",
//     "cork road": "164700",
//     "dungarvan": "164800",
//     "dunmore east": "164900",
//     "dunmore road": "165000",
//     "ferrybank": "165200",
//     "inner ring road": "165400",
//     "johns hill": "165500",
//     "lismore": "165900",
//     "mary street": "165900",
//     "penrose lane": "166200",
//     "poleberry": "166300",
//     "portlaw": "166400",
//     "railway square": "166400",
//     "scotch quay": "166400",
//     "templars hall": "166800",
//     "tramore": "166900",
//     "westmeath": "167300",
//     "athlone, westmeath": "167400",
//     "castlepollard": "167500",
//     "kilbeggan": "167700",
//     "kinnegad": "167900",
//     "moate": "168000",
//     "mullingar": "168100",
//     "wexford": "168200",
//     "bunclody": "168300",
//     "clonard": "168500",
//     "enniscorthy": "168600",
//     "ferns": "168700",
//     "ford": "168700",
//     "gorey": "168900",
//     "mulgannon": "169000",
//     "new ross": "169100",
//     "rosslare": "169200",
//     "wicklow": "169300",
//     "wicklow town": "171200",
//     "arklow": "169400",
//     "baltinglass": "169700",
//     "blessington": "169900",
//     "bray": "170000",
//     "delgany": "170200",
//     "greystones": "170500",
//     "kilcoole": "169300",
//     "newtownmountkennedy": "170700",
//     "rathnew": "170900"
//   }


//   useEffect(() => {
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
//         <p><strong>Year:</strong> {house.year}</p>
//         <p><strong>Area:</strong> {house.area}</p>
//         <p><strong>Average Home Cost:</strong> {house.price}</p>
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

//   useEffect(() => {

//     const areaCode = areaMapping[searchTerm];
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
//   }, [areaInput, searchTerm]);

//   return (
//     <div>
//       <h1>Housing and Rent Prices 🏠</h1>
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
//   const [houses, setHouses] = useState([]);
//   const [areaInput, setAreaInput] = useState(""); // Initialize as an empty string
//   const [apiUrl, setApiUrl] = useState("");
//   const [formattedDataRent, setFormattedDataRent] = useState('');

//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     // ... (other mappings)
//   };

//   const fetchHousesData = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(areaInput)}`);
//       const data = await response.json();
//       setHouses(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const formatHouseData = () => {
//     if (!data) return '';
//     const value = data?.result?.value[0];
//     if (!value) return 'Value not found in data.';
//     return `Average Rent Cost: €${value}`;
//   };

//   const displayHouse = () => {
//     const filteredHouses = houses.filter(
//       (house) =>
//         house.area.toLowerCase().includes(areaInput.toLowerCase()) ||
//         house.year.toString().includes(areaInput) ||
//         house.price.toString().includes(areaInput)
//     );

//     return filteredHouses.map((house) => (
//       <div key={house.id}>
//         <p><strong>Year:</strong> {house.year}</p>
//         <p><strong>Area:</strong> {house.area}</p>
//         <p><strong>Average Home Cost:</strong> {house.price}</p>
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

//   useEffect(() => {
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
//   }, [areaInput]);

//   return (
//     <div>
//       <h1>Housing and Rent Prices 🏠</h1>
//       <div>
//         <label htmlFor="searchTerm">Search by Area:</label>
//         <input
//           type="text"
//           id="searchTerm"
//           value={areaInput}
//           onChange={(e) => setAreaInput(e.target.value)}
//         />
//         <button onClick={fetchHousesData}>Search</button>
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

// function House({ searchTerm }) {
//   const [data, setData] = useState(null);
//   const [houses, setHouses] = useState([]);
//   const [apiUrl, setApiUrl] = useState("");
//   const [formattedDataRent, setFormattedDataRent] = useState('');

//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     // ... (other mappings)
//   };

//   const fetchHousesData = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`);
//       const data = await response.json();
//       setHouses(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const formatHouseData = () => {
//     if (!data) return '';
//     const value = data?.result?.value[0];
//     if (!value) return 'Value not found in data.';
//     return `Average Rent Cost: €${value}`;
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

//   useEffect(() => {
//     const areaCode = areaMapping[searchTerm];
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
//   }, [searchTerm]);

//   return (
//     <div>
//       <h1>Housing and Rent Prices 🏠</h1>
//       {displayHouse()}
//       <div>
//         <pre>{formatHouseData()}</pre>
//       </div>
//     </div>
//   );

//   function displayHouse() {
//     const filteredHouses = houses.filter(
//       (house) =>
//         house.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         house.year.toString().includes(searchTerm) ||
//         house.price.toString().includes(searchTerm)
//     );

//     return filteredHouses.map((house) => (
//       <div key={house.id}>
//         <p><strong>Year:</strong> {house.year}</p>
//         <p><strong>Area:</strong> {house.area}</p>
//         <p><strong>Average Home Cost:</strong> {house.price}</p>
//       </div>
//     ));
//   }
// }

// export default House;

































// import React, { useState, useEffect } from 'react';

// function House({ searchTerm }) {
//   const [data, setData] = useState(null);
//   const [houses, setHouses] = useState([]); // Initialize as an empty array
//   const [areaInput, setAreaInput] = useState("");
//   const [apiUrl, setApiUrl] = useState("");
//   const [formattedDataRent, setFormattedDataRent] = useState('');
  

//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     "cavan": "110550",
//     "cavan town": "111100",
//     "bailieborough": "110600",
//     "ballyconnell": "110800",
//     "ballyjamesduff": "110900",
//     "belturbet": "111000",
//     "cootehill": "111200",
//     "kingscourt": "111300",
//     "virginia": "111500",
//     "clare": "111600",
//     "ennis": "111900",
//     "killaloe": "112100",
//     "kilrush": "112200",
//     "newmarket-on-fergus": "112400",
//     "shannon": "112700",
//     "sixmilebridge": "112800",
//     "cork": "113000",
//     "cork city": "115200",
//     "ballincollig": "113100",
//     "ballintemple": "113200",
//     "ballinure": "113000",
//     "bandon": "113500",
//     "bantry": "113600",
//     "bishopstown": "113800",
//     "blackpool": "113900",
//     "blackrock, cork": "114000",
//     "blarney": "114100",
//     "carrigaline": "114300",
//     "carrigtwohill": "114400",
//     "castlemartyr": "114500",
//     "charleville": "114700",
//     "clonakilty": "114800",
//     "cloyne": "114900",
//     "cobh": "115000",
//     "crosshaven": "115500",
//     "douglas": "115700",
//     "dunmanway": "115900",
//     "fermoy": "116100",
//     "frankfield": "113000",
//     "glanmire": "116300",
//     "kanturk": "116500",
//     "kinsale": "116800",
//     "macroom": "116900",
//     "mallow": "117000",
//     "midleton": "117100",
//     "millstreet": "117200",
//     "mitchelstown": "117300",
//     "montenotte": "113000",
//     "passage west": "117500",
//     "rathcormac": "117600",
//     "ringaskiddy": "113000",
//     "rochestown": "113000",
//     "skibbereen": "118200",
//     "tivoli": "113000",
//     "tower": "113000",
//     "whitegate": "113000",
//     "wilton": "118700",
//     "youghal": "118800",
//     "donegal": "118900",   
//     "donegal town": "119800",
//     "ballybofey": "119200",
//     "buncrana": "119400",
//     "bundoran": "119500",
//     "carndonagh": "119600",
//     "letterkenny": "120000",
//     "lifford": "120100",
//     "stranorlar": "120400",
//     "dublin": "120500",
//     "balbriggan": "120600",
//     "blackrock": "120700",
//     "booterstown": "120800",
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
//     "stillorgan": "123200",
//     "swords": "123300",
//     "i.f.s.c.": "123500",
//     "parnell street": "123600",
//     "spencer dock": "123700",
//     "summerhill": "123800",
//     "aungier street": "120500",
//     "charlemont street": "124100",
//     "grand canal dock": "120500",
//     "grand canal square": "120500",
//     "hanover quay": "124400",
//     "lower mount street": "120500",
//     "pearse street": "124600",
//     "tara street": "120500",
//     "temple bar": "124800",
//     "townsend street": "124900",
//     "clonliffe": "125200",
//     "clontarf": "125300",
//     "drumcondra": "125400",
//     "east wall": "125500",
//     "fairview": "125700",
//     "marino": "125900",
//     "north strand": "126000",
//     "ballsbridge": "126200",
//     "donnybrook": "126300",
//     "irishtown": "126400",
//     "merrion": "126500",
//     "pembroke": "126600",
//     "ringsend": "126700",
//     "sandymount": "126800",
//     "artane": "127000",
//     "killester": "127400",
//     "raheny": "127500",
//     "dartry": "127800",
//     "harolds cross": "127900",
//     "milltown": "128000",
//     "ranelagh": "128100",
//     "rathgar": "128200",
//     "rathmines": "128300",
//     "templeogue": "128900",
//     "terenure": "129000",
//     "arbour hill": "129200",
//     "cabra": "129300",
//     "navan road": "120500",
//     "north circular road": "129500",
//     "phibsboro": "129600",
//     "smithfield": "129700",
//     "stoneybatter": "129800",
//     "christchurch": "130000",
//     "cork street": "130100",
//     "dolphins barn": "120500",
//     "inchicore": "130300",
//     "islandbridge": "130400",
//     "kilmainham": "130500",
//     "portobello": "130600",
//     "rialto": "130700",
//     "south circular road": "130800",
//     "the coombe": "130900",
//     "dublin 9": "131000",
//     "ballymun": "131100",
//     "beaumont": "131200",
//     "glasnevin": "131500",
//     "santry": "131600",
//     "whitehall": "131700",
//     "ballyfermot": "131900",
//     "cherry orchard": "132000",
//     "finglas": "132300",
//     "meakstown": "132300",
//     "st margarets road": "132300",
//     "crumlin": "132900",
//     "drimnagh": "133000",
//     "kimmage": "133100",
//     "walkinstown": "133200",
//     "baldoyle": "133500",
//     "balgriffin": "133600",
//     "clongriffin": "133900",
//     "donaghmede": "134000",
//     "sutton": "134200",
//     "churchtown": "134400",
//     "clonskeagh": "134500",
//     "goatstown": "134700",
//     "ashtown": "135100",
//     "blanchardstown": "135200",
//     "carpenterstown": "135200",
//     "castleknock": "135400",
//     "clonee": "135500",
//     "clonsilla": "135600",
//     "coolmine": "135600",
//     "mulhuddart": "135900",
//     "ongar": "136000",
//     "porterstown": "136100",
//     "royal canal park": "136200",
//     "tyrrelstown": "136200",
//     "ballinteer": "136500",
//     "dundrum": "136600",
//     "knocklyon": "136700",
//     "rathfarnham": "136800",
//     "malahide road": "137500",
//     "northern cross": "137500",
//     "cabinteely": "137900",
//     "carrickmines": "138000",
//     "foxrock": "138100",
//     "leopardstown": "138300",
//     "sandyford": "138600",
//     "stepaside": "138900",
//     "chapelizod": "139200",
//     "palmerstown": "139300",
//     "clondalkin": "139400",
//     "ballycullen": "139600",
//     "citywest": "139700",
//     "firhouse": "139800",
//     "tallaght": "140100",
//     "galway": "140200",
//     "galway city": "141600",
//     "athenry": "140300",
//     "ballinasloe": "140400",
//     "ballybane": "140500",
//     "ballybrit": "140600",
//     "barna": "140800",
//     "bohermore": "140900",
//     "claregalway": "141000",
//     "clifden": "141200",
//     "doughiska": "141400",
//     "gort": "141700",
//     "headford": "141800",
//     "knocknacarra": "141800",
//     "loughrea": "142000",
//     "mervue": "142300",
//     "monivea": "142300",
//     "moycullen": "142300",
//     "newcastle": "142400",
//     "oranmore": "142500",
//     "oughterard": "142600",
//     "portumna": "142700",
//     "rahoon": "142800",
//     "renmore": "142800",
//     "roscam": "142800",
//     "salthill": "143100",
//     "tuam": "143200",
//     "wellpark": "143200",
//     "woodquay": "143200",
//     "kerry": "143500",
//     "castleisland": "143700",
//     "dingle": "143800",
//     "kenmare": "143900",
//     "killarney": "144000",
//     "killorglin": "144100",
//     "listowel": "144200",
//     "tralee": "144500",
//     "kildare": "144600",
//     "kildare town": "145400",
//     "athy": "144700",
//     "castledermot": "144800",
//     "celbridge": "144900",
//     "clane": "145000",
//     "kilcock": "145200",
//     "kilcullen": "145300",
//     "kill": "145500",
//     "leixlip": "145600",
//     "maynooth": "145700",
//     "monasterevin": "145800",
//     "naas": "145900",
//     "newbridge": "146000",
//     "rathangan": "146200",
//     "sallins": "146300",
//     "kilkenny": "146500",
//     "kilkenny city": "147200",
//     "callan": "146700",
//     "castlecomer": "146800",
//     "freshford": "146900",
//     "kells": "146500",
//     "thomastown": "147400",
//     "laois": "147600",
//     "mountmellick": "148500",
//     "mountrath": "148600",
//     "portarlington": "148700",
//     "portlaoise": "148800",
//     "leitrim": "149100",
//     "carrick-on-shannon": "149300",
//     "manorhamilton": "149900",
//     "limerick": "150100",
//     "limerick city": "151900",
//     "abbeyfeale": "150200",
//     "annacotty": "150400",
//     "castleconnell": "150900",
//     "castletroy": "151000",
//     "corbally": "151100",
//     "dock road": "151300",
//     "dooradoyle": "151400",
//     "glen": "150100",
//     "kilmallock": "151700",
//     "newcastle west": "152000",
//     "old cratloe road": "150100",
//     "raheen": "152200",
//     "longford": "152400",
//     "longford town": "153100",
//     "ballymahon": "152500",
//     "edgeworthstown": "152800",
//     "newtownforbes": "153200",
    // "louth": "153300",
//     "ardee": "153400",
//     "drogheda": "154000",
//     "termonfeckin": "153300",
//     "clogherhead": "153300",
//     "baltray": "153300",
//     "dundalk": "154200",
//     "louth town": "153300",
//     "mayo": "154900",
//     "ballina": "155100",
//     "ballinrobe": "155200",
//     "ballyhaunis": "155300",
//     "belmullet": "155400",
//     "castlebar": "155500",
//     "charlestown": "155600",
//     "claremorris": "155700",
//     "foxford": "155900",
//     "swinford": "156400",
//     "westport": "156500",
//     "meath": "156600",
//     "ashbourne": "156700",
//     "athboy": "156800",
//     "bettystown": "157000",
//     "clonee, meath": "157100",
//     "drogheda, meath": "157200",
//     "duleek": "157300",
//     "dunboyne": "157400",
//     "dunshaughlin": "157500",
//     "enfield": "157600",
//     "kells, meath": "157700",
//     "laytown": "157800",
//     "navan": "158100",
//     "ratoath": "158300",
//     "stamullen": "158500",
//     "trim": "158700",
//     "monaghan": "158800",
//     "ballybay": "158900",
//     "carrickmacross": "159000",
//     "castleblayney": "159100",
//     "monaghan town": "159300",
//     "offaly": "159400",
//     "banagher": "159500",
//     "birr": "159600",
//     "clara": "159700",
//     "edenderry": "159900",
//     "tullamore": "160100",
//     "roscommon": "160200",
//     "roscommon town": "161000",
//     "athlone": "160300",
//     "ballaghaderreen": "160400",
//     "boyle": "160600",
//     "castlerea": "160800",
//     "strokestown": "161100",
//     "sligo": "161200",
//     "sligo town": "162200",
//     "ballinode": "161300",
//     "ballisodare": "161400",
//     "ballymote": "161500",
//     "ballytivnan": "161500",
//     "collooney": "161800",
//     "lough gill": "161800",
//     "strandhill": "162300",
//     "tubbercurry": "162400",
//     "tipperary": "162500",
//     "tipperary town": "163900",
//     "ballina, tipperary": "162600",
//     "cahir": "162800",
//     "carrick-on-suir": "162900",
//     "cashel": "163000",
//     "clonmel": "163100",
//     "fethard": "163300",
//     "nenagh": "163400",
//     "roscrea": "163600",
//     "templemore": "163700",
//     "thurles": "163800",
//     "waterford": "164000",
//     "waterford city": "167100",
//     "ballytruckl": "164000",
//     "canada street": "164000",
//     "castle place": "164000",
//     "cork road": "164700",
//     "dungarvan": "164800",
//     "dunmore east": "164900",
//     "dunmore road": "165000",
//     "ferrybank": "165200",
//     "inner ring road": "165400",
//     "johns hill": "165500",
//     "lismore": "165900",
//     "mary street": "165900",
//     "penrose lane": "166200",
//     "poleberry": "166300",
//     "portlaw": "166400",
//     "railway square": "166400",
//     "scotch quay": "166400",
//     "templars hall": "166800",
//     "tramore": "166900",
//     "westmeath": "167300",
//     "athlone, westmeath": "167400",
//     "castlepollard": "167500",
//     "kilbeggan": "167700",
//     "kinnegad": "167900",
//     "moate": "168000",
//     "mullingar": "168100",
//     "wexford": "168200",
//     "bunclody": "168300",
//     "clonard": "168500",
//     "enniscorthy": "168600",
//     "ferns": "168700",
//     "ford": "168700",
//     "gorey": "168900",
//     "mulgannon": "169000",
//     "new ross": "169100",
//     "rosslare": "169200",
//     "wicklow": "169300",
//     "wicklow town": "171200",
//     "arklow": "169400",
//     "baltinglass": "169700",
//     "blessington": "169900",
//     "bray": "170000",
//     "delgany": "170200",
//     "greystones": "170500",
//     "kilcoole": "169300",
//     "newtownmountkennedy": "170700",
//     "rathnew": "170900"
//   }


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         const jsonData = await response.json();
//         setData(jsonData);

//         const newValue = jsonData?.result?.value[0];
//         if (!newValue) {
//           const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

//           const areaCode = areaMapping[county.toLowerCase()];
//           if (areaCode) {
//             const newApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//             const newResponse = await fetch(newApiUrl);
//             const newData = await newResponse.json();
//             setData(newData);

//             const newFormattedValue = newData?.result?.value[0];
//             if (!newFormattedValue) {
//               setFormattedDataRent('Value not found in data.');
//             } else {
//               setFormattedDataRent(`Average Rent Cost: €${newFormattedValue}`);
//             }
//           } else {
//             setFormattedDataRent('County not found in the mapping.');
//           }
//         } else {
//           setFormattedDataRent(`Average Rent Cost: €${newValue}`);
//         }
//       } catch (error) {
//         console.error(error);
//         setFormattedDataRent('Error during data fetching.');
//       }
//     };

//     if (apiUrl) {
//       fetchData();
//     }
//   }, [apiUrl]);

//   // const formatHouseData = () => {
//   //   if (!data) return '';
//   //   const value = data?.result?.value[0];
//   //   if (!value) return 'Value not found in data.';
//   //   return `Average Rent Cost: €${value}`;
//   // };

//   const displayHouse = () => {
//     const filteredHouses = houses.filter(
//       (house) =>
//         house.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         house.year.toString().includes(searchTerm) ||
//         house.price.toString().includes(searchTerm)
//     );

//     return filteredHouses.map((house) => (
//       <div key={house.id}>
//         <p><strong>Year:</strong> {house.year}</p>
//         <p><strong>Area:</strong> {house.area}</p>
//         <p><strong>Average Home Cost:</strong> {house.price}</p>
//       </div>
//     ));
//   };

  // const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
  //   const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
  //     "jsonrpc": "2.0",
  //     "method": "PxStat.Data.Cube_API.ReadDataset",
  //     "params": {
  //       "class": "query",
  //       "id": [id1, id2, id3, id4],
  //       "dimension": {
  //         [id1]: {
  //           "category": {
  //             "index": ["2022"]
  //           }
  //         },
  //         [id2]: {
  //           "category": {
  //             "index": ["-"]
  //           }
  //         },
  //         [id3]: {
  //           "category": {
  //             "index": ["-"]
  //           }
  //         },
  //         [id4]: {
  //           "category": {
  //             "index": [categoryIndex]
  //           }
  //         }
  //       },
  //       "extension": {
  //         "pivot": null,
  //         "codes": true,
  //         "language": {
  //           "code": "en"
  //         },
  //         "format": {
  //           "type": "JSON-stat",
  //           "version": "2.0"
  //         },
  //         "matrix": "RIA02"
  //       },
  //       "version": "2.0"
  //     }
  //   }))}`;
  
  //   return apiUrl;
  // };

//   const handleSearch = () => {
//     // setSearchTerm(areaInput);
//     const areaCode = areaMapping[areaInput];
//     const generatedApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);
//     setApiUrl(generatedApiUrl);
//   };

//   useEffect(() => {
//     if (searchTerm) {
//       const fetchHousesData = async () => {
//         try {
//           const response = await fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`);
//           const data = await response.json();
//           setHouses(data);
//           handleSearch(); // Trigger the API call when searchTerm changes
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchHousesData();
//     }
//   }, [searchTerm]);

//   return (
//     <div>
//       {handleSearch()}
//       <h1>Housing and Rent Prices 🏠</h1>
//       {displayHouse()}
//       <div>
//         <pre>{formattedDataRent}</pre>
//       </div>
//     </div>
//   );
// }

// export default House;






// import React, { useState, useEffect } from 'react';

// const House = ({ searchTerm }) => {
//   const [data, setData] = useState(null);
//   const [houses, setHouses] = useState([]);
//   const [apiUrl, setApiUrl] = useState("");
//   const [formattedDataRent, setFormattedDataRent] = useState('');

//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     "cavan": "110550",
//     "cavan town": "111100",
//     "bailieborough": "110600",
//     "ballyconnell": "110800",
//   };

//   useEffect(() => {
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

//   const fetchData = async () => {
//     try {
//       const response = await fetch(apiUrl);
//       const jsonData = await response.json();
//       setData(jsonData);

//       const newValue = jsonData?.result?.value[0];
//       if (!newValue) {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

//         const areaCode = areaMapping[county.toLowerCase()];
//         if (areaCode) {
//           const newApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//           const newResponse = await fetch(newApiUrl);
//           const newData = await newResponse.json();
//           setData(newData);

//           const newFormattedValue = newData?.result?.value[0];
//           if (!newFormattedValue) {
//             setFormattedDataRent('Value not found in data.');
//           } else {
//             setFormattedDataRent(`Average Rent Cost: €${newFormattedValue}`);
//           }
//         } else {
//           setFormattedDataRent('County not found in the mapping.');
//         }
//       } else {
//         setFormattedDataRent(`Average Rent Cost: €${newValue}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setFormattedDataRent('Error during data fetching.');
//     }
//   };

//   useEffect(() => {
//     if (apiUrl) {
//       fetchData();
//     }
//   }, [apiUrl]);

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

  // const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
  //   const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
  //     "jsonrpc": "2.0",
  //     "method": "PxStat.Data.Cube_API.ReadDataset",
  //     "params": {
  //       "class": "query",
  //       "id": [id1, id2, id3, id4],
  //       "dimension": {
  //         [id1]: {
  //           "category": {
  //             "index": ["2022"]
  //           }
  //         },
  //         [id2]: {
  //           "category": {
  //             "index": ["-"]
  //           }
  //         },
  //         [id3]: {
  //           "category": {
  //             "index": ["-"]
  //           }
  //         },
  //         [id4]: {
  //           "category": {
  //             "index": [categoryIndex]
  //           }
  //         }
  //       },
  //       "extension": {
  //         "pivot": null,
  //         "codes": true,
  //         "language": {
  //           "code": "en"
  //         },
  //         "format": {
  //           "type": "JSON-stat",
  //           "version": "2.0"
  //         },
  //         "matrix": "RIA02"
  //       },
  //       "version": "2.0"
  //     }
  //   }))}`;
  
  //   return apiUrl;
  // };

//   return (
//     <div>
//       <h1>Housing and Rent Prices</h1>
//       {displayHouse()}
//       <div>
//         <pre>{formattedDataRent}</pre>
//       </div>
//     </div>
//   );
// };

// export default House;


// REAL *****
// import React, { useState, useEffect } from 'react';

// const House = ({ searchTerm }) => {
//   const [houses, setHouses] = useState([]);
//   const [formattedDataRent, setFormattedDataRent] = useState('');

//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     "cavan": "110550",
//     "cavan town": "111100",
//     "bailieborough": "110600",
//     "ballyconnell": "110800",
//     "ballyjamesduff": "110900",
//     "belturbet": "111000",
//     "cootehill": "111200",
//     "kingscourt": "111300",
//     "virginia": "111500",
//     "clare": "111600",
//     "ennis": "111900",
//     "killaloe": "112100",
//     "kilrush": "112200",
//     "newmarket-on-fergus": "112400",
//     "shannon": "112700",
//     "sixmilebridge": "112800",
//     "cork": "113000",
//     "cork city": "115200",
//     "ballincollig": "113100",
//     "ballintemple": "113200",
//     "ballinure": "113000",
//     "bandon": "113500",
//     "bantry": "113600",
//     "bishopstown": "113800",
//     "blackpool": "113900",
//     "blackrock, cork": "114000",
//     "blarney": "114100",
//     "carrigaline": "114300",
//     "carrigtwohill": "114400",
//     "castlemartyr": "114500",
//     "charleville": "114700",
//     "clonakilty": "114800",
//     "cloyne": "114900",
//     "cobh": "115000",
//     "crosshaven": "115500",
//     "douglas": "115700",
//     "dunmanway": "115900",
//     "fermoy": "116100",
//     "frankfield": "113000",
//     "glanmire": "116300",
//     "kanturk": "116500",
//     "kinsale": "116800",
//     "macroom": "116900",
//     "mallow": "117000",
//     "midleton": "117100",
//     "millstreet": "117200",
//     "mitchelstown": "117300",
//     "montenotte": "113000",
//     "passage west": "117500",
//     "rathcormac": "117600",
//     "ringaskiddy": "113000",
//     "rochestown": "113000",
//     "skibbereen": "118200",
//     "tivoli": "113000",
//     "tower": "113000",
//     "whitegate": "113000",
//     "wilton": "118700",
//     "youghal": "118800",
//     "donegal": "118900",   
//     "donegal town": "119800",
//     "ballybofey": "119200",
//     "buncrana": "119400",
//     "bundoran": "119500",
//     "carndonagh": "119600",
//     "letterkenny": "120000",
//     "lifford": "120100",
//     "stranorlar": "120400",
//     "dublin": "120500",
//     "balbriggan": "120600",
//     "blackrock": "120700",
//     "booterstown": "120800",
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
//     "stillorgan": "123200",
//     "swords": "123300",
//     "i.f.s.c.": "123500",
//     "parnell street": "123600",
//     "spencer dock": "123700",
//     "summerhill": "123800",
//     "aungier street": "120500",
//     "charlemont street": "124100",
//     "grand canal dock": "120500",
//     "grand canal square": "120500",
//     "hanover quay": "124400",
//     "lower mount street": "120500",
//     "pearse street": "124600",
//     "tara street": "120500",
//     "temple bar": "124800",
//     "townsend street": "124900",
//     "clonliffe": "125200",
//     "clontarf": "125300",
//     "drumcondra": "125400",
//     "east wall": "125500",
//     "fairview": "125700",
//     "marino": "125900",
//     "north strand": "126000",
//     "ballsbridge": "126200",
//     "donnybrook": "126300",
//     "irishtown": "126400",
//     "merrion": "126500",
//     "pembroke": "126600",
//     "ringsend": "126700",
//     "sandymount": "126800",
//     "artane": "127000",
//     "killester": "127400",
//     "raheny": "127500",
//     "dartry": "127800",
//     "harolds cross": "127900",
//     "milltown": "128000",
//     "ranelagh": "128100",
//     "rathgar": "128200",
//     "rathmines": "128300",
//     "templeogue": "128900",
//     "terenure": "129000",
//     "arbour hill": "129200",
//     "cabra": "129300",
//     "navan road": "120500",
//     "north circular road": "129500",
//     "phibsboro": "129600",
//     "smithfield": "129700",
//     "stoneybatter": "129800",
//     "christchurch": "130000",
//     "cork street": "130100",
//     "dolphins barn": "120500",
//     "inchicore": "130300",
//     "islandbridge": "130400",
//     "kilmainham": "130500",
//     "portobello": "130600",
//     "rialto": "130700",
//     "south circular road": "130800",
//     "the coombe": "130900",
//     "dublin 9": "131000",
//     "ballymun": "131100",
//     "beaumont": "131200",
//     "glasnevin": "131500",
//     "santry": "131600",
//     "whitehall": "131700",
//     "ballyfermot": "131900",
//     "cherry orchard": "132000",
//     "finglas": "132300",
//     "meakstown": "132300",
//     "st margarets road": "132300",
//     "crumlin": "132900",
//     "drimnagh": "133000",
//     "kimmage": "133100",
//     "walkinstown": "133200",
//     "baldoyle": "133500",
//     "balgriffin": "133600",
//     "clongriffin": "133900",
//     "donaghmede": "134000",
//     "sutton": "134200",
//     "churchtown": "134400",
//     "clonskeagh": "134500",
//     "goatstown": "134700",
//     "ashtown": "135100",
//     "blanchardstown": "135200",
//     "carpenterstown": "135200",
//     "castleknock": "135400",
//     "clonee": "135500",
//     "clonsilla": "135600",
//     "coolmine": "135600",
//     "mulhuddart": "135900",
//     "ongar": "136000",
//     "porterstown": "136100",
//     "royal canal park": "136200",
//     "tyrrelstown": "136200",
//     "ballinteer": "136500",
//     "dundrum": "136600",
//     "knocklyon": "136700",
//     "rathfarnham": "136800",
//     "malahide road": "137500",
//     "northern cross": "137500",
//     "cabinteely": "137900",
//     "carrickmines": "138000",
//     "foxrock": "138100",
//     "leopardstown": "138300",
//     "sandyford": "138600",
//     "stepaside": "138900",
//     "chapelizod": "139200",
//     "palmerstown": "139300",
//     "clondalkin": "139400",
//     "ballycullen": "139600",
//     "citywest": "139700",
//     "firhouse": "139800",
//     "tallaght": "140100",
//     "galway": "140200",
//     "galway city": "141600",
//     "athenry": "140300",
//     "ballinasloe": "140400",
//     "ballybane": "140500",
//     "ballybrit": "140600",
//     "barna": "140800",
//     "bohermore": "140900",
//     "claregalway": "141000",
//     "clifden": "141200",
//     "doughiska": "141400",
//     "gort": "141700",
//     "headford": "141800",
//     "knocknacarra": "141800",
//     "loughrea": "142000",
//     "mervue": "142300",
//     "monivea": "142300",
//     "moycullen": "142300",
//     "newcastle": "142400",
//     "oranmore": "142500",
//     "oughterard": "142600",
//     "portumna": "142700",
//     "rahoon": "142800",
//     "renmore": "142800",
//     "roscam": "142800",
//     "salthill": "143100",
//     "tuam": "143200",
//     "wellpark": "143200",
//     "woodquay": "143200",
//     "kerry": "143500",
//     "castleisland": "143700",
//     "dingle": "143800",
//     "kenmare": "143900",
//     "killarney": "144000",
//     "killorglin": "144100",
//     "listowel": "144200",
//     "tralee": "144500",
//     "kildare": "144600",
//     "kildare town": "145400",
//     "athy": "144700",
//     "castledermot": "144800",
//     "celbridge": "144900",
//     "clane": "145000",
//     "kilcock": "145200",
//     "kilcullen": "145300",
//     "kill": "145500",
//     "leixlip": "145600",
//     "maynooth": "145700",
//     "monasterevin": "145800",
//     "naas": "145900",
//     "newbridge": "146000",
//     "rathangan": "146200",
//     "sallins": "146300",
//     "kilkenny": "146500",
//     "kilkenny city": "147200",
//     "callan": "146700",
//     "castlecomer": "146800",
//     "freshford": "146900",
//     "kells": "146500",
//     "thomastown": "147400",
//     "laois": "147600",
//     "mountmellick": "148500",
//     "mountrath": "148600",
//     "portarlington": "148700",
//     "portlaoise": "148800",
//     "leitrim": "149100",
//     "carrick-on-shannon": "149300",
//     "manorhamilton": "149900",
//     "limerick": "150100",
//     "limerick city": "151900",
//     "abbeyfeale": "150200",
//     "annacotty": "150400",
//     "castleconnell": "150900",
//     "castletroy": "151000",
//     "corbally": "151100",
//     "dock road": "151300",
//     "dooradoyle": "151400",
//     "glen": "150100",
//     "kilmallock": "151700",
//     "newcastle west": "152000",
//     "old cratloe road": "150100",
//     "raheen": "152200",
//     "longford": "152400",
//     "longford town": "153100",
//     "ballymahon": "152500",
//     "edgeworthstown": "152800",
//     "newtownforbes": "153200",
//     "louth": "153300",
//     "ardee": "153400",
//     "drogheda": "154000",
//     "termonfeckin": "153300",
//     "clogherhead": "153300",
//     "baltray": "153300",
//     "dundalk": "154200",
//     "louth town": "153300",
//     "mayo": "154900",
//     "ballina": "155100",
//     "ballinrobe": "155200",
//     "ballyhaunis": "155300",
//     "belmullet": "155400",
//     "castlebar": "155500",
//     "charlestown": "155600",
//     "claremorris": "155700",
//     "foxford": "155900",
//     "swinford": "156400",
//     "westport": "156500",
//     "meath": "156600",
//     "ashbourne": "156700",
//     "athboy": "156800",
//     "bettystown": "157000",
//     "clonee, meath": "157100",
//     "drogheda, meath": "157200",
//     "duleek": "157300",
//     "dunboyne": "157400",
//     "dunshaughlin": "157500",
//     "enfield": "157600",
//     "kells, meath": "157700",
//     "laytown": "157800",
//     "navan": "158100",
//     "ratoath": "158300",
//     "stamullen": "158500",
//     "trim": "158700",
//     "monaghan": "158800",
//     "ballybay": "158900",
//     "carrickmacross": "159000",
//     "castleblayney": "159100",
//     "monaghan town": "159300",
//     "offaly": "159400",
//     "banagher": "159500",
//     "birr": "159600",
//     "clara": "159700",
//     "edenderry": "159900",
//     "tullamore": "160100",
//     "roscommon": "160200",
//     "roscommon town": "161000",
//     "athlone": "160300",
//     "ballaghaderreen": "160400",
//     "boyle": "160600",
//     "castlerea": "160800",
//     "strokestown": "161100",
//     "sligo": "161200",
//     "sligo town": "162200",
//     "ballinode": "161300",
//     "ballisodare": "161400",
//     "ballymote": "161500",
//     "ballytivnan": "161500",
//     "collooney": "161800",
//     "lough gill": "161800",
//     "strandhill": "162300",
//     "tubbercurry": "162400",
//     "tipperary": "162500",
//     "tipperary town": "163900",
//     "ballina, tipperary": "162600",
//     "cahir": "162800",
//     "carrick-on-suir": "162900",
//     "cashel": "163000",
//     "clonmel": "163100",
//     "fethard": "163300",
//     "nenagh": "163400",
//     "roscrea": "163600",
//     "templemore": "163700",
//     "thurles": "163800",
//     "waterford": "164000",
//     "waterford city": "167100",
//     "ballytruckl": "164000",
//     "canada street": "164000",
//     "castle place": "164000",
//     "cork road": "164700",
//     "dungarvan": "164800",
//     "dunmore east": "164900",
//     "dunmore road": "165000",
//     "ferrybank": "165200",
//     "inner ring road": "165400",
//     "johns hill": "165500",
//     "lismore": "165900",
//     "mary street": "165900",
//     "penrose lane": "166200",
//     "poleberry": "166300",
//     "portlaw": "166400",
//     "railway square": "166400",
//     "scotch quay": "166400",
//     "templars hall": "166800",
//     "tramore": "166900",
//     "westmeath": "167300",
//     "athlone, westmeath": "167400",
//     "castlepollard": "167500",
//     "kilbeggan": "167700",
//     "kinnegad": "167900",
//     "moate": "168000",
//     "mullingar": "168100",
//     "wexford": "168200",
//     "bunclody": "168300",
//     "clonard": "168500",
//     "enniscorthy": "168600",
//     "ferns": "168700",
//     "ford": "168700",
//     "gorey": "168900",
//     "mulgannon": "169000",
//     "new ross": "169100",
//     "rosslare": "169200",
//     "wicklow": "169300",
//     "wicklow town": "171200",
//     "arklow": "169400",
//     "baltinglass": "169700",
//     "blessington": "169900",
//     "bray": "170000",
//     "delgany": "170200",
//     "greystones": "170500",
//     "kilcoole": "169300",
//     "newtownmountkennedy": "170700",
//     "rathnew": "170900"
//   }

//   const fetchData = async (apiUrl) => {
//     try {
//       const response = await fetch(apiUrl);
//       const jsonData = await response.json();

//       const newValue = jsonData?.result?.value[0];

//       if (!newValue) {
//         setFormattedDataRent('Value not found in data.');
//       } else {
//         setFormattedDataRent(`Average Rent Cost: €${newValue}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setFormattedDataRent('Error during rent data fetching.');
//     }
//   };

//   useEffect(() => {
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

//   useEffect(() => {
//     if (searchTerm) {
//       const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//       const fetchGeocodeData = async () => {
//         try {
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

//           const areaCode = areaMapping[county.toLowerCase()];
//           if (areaCode) {
//             const newApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//             await fetchData(newApiUrl); // Fetch rent data
//           } else {
//             setFormattedDataRent('County not found in the mapping.');
//           }
//         } catch (error) {
//           console.error(error);
//           setFormattedDataRent('Error during geocode data fetching.');
//         }
//       };

//       fetchGeocodeData();
//     }
//   }, [searchTerm]);

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

//   return (
//     <div>
//       <h1>Housing and Rent Prices</h1>
//       {displayHouse()}
//       <div>
//         <pre>{formattedDataRent}</pre>
//       </div>
//     </div>
//   );
// };

// export default House;




// import React, { useState, useEffect } from 'react';

// const House = ({ searchTerm }) => {
//   const [houses, setHouses] = useState([]);
//   const [formattedDataRent, setFormattedDataRent] = useState('');
//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     "cavan": "110550",
//     "cavan town": "111100",
//     "bailieborough": "110600",
//     "ballyconnell": "110800",
//     "ballyjamesduff": "110900",
//     "belturbet": "111000",
//     "cootehill": "111200",
//     "kingscourt": "111300",
//     "virginia": "111500",
//     "clare": "111600",
//     "ennis": "111900",
//     "killaloe": "112100",
//     "kilrush": "112200",
//     "newmarket-on-fergus": "112400",
//     "shannon": "112700",
//     "sixmilebridge": "112800",
//     "cork": "113000",
//     "cork city": "115200",
//     "ballincollig": "113100",
//     "ballintemple": "113200",
//     "ballinure": "113000",
//     "bandon": "113500",
//     "bantry": "113600",
//     "bishopstown": "113800",
//     "blackpool": "113900",
//     "blackrock, cork": "114000",
//     "blarney": "114100",
//     "carrigaline": "114300",
//     "carrigtwohill": "114400",
//     "castlemartyr": "114500",
//     "charleville": "114700",
//     "clonakilty": "114800",
//     "cloyne": "114900",
//     "cobh": "115000",
//     "crosshaven": "115500",
//     "douglas": "115700",
//     "dunmanway": "115900",
//     "fermoy": "116100",
//     "frankfield": "113000",
//     "glanmire": "116300",
//     "kanturk": "116500",
//     "kinsale": "116800",
//     "macroom": "116900",
//     "mallow": "117000",
//     "midleton": "117100",
//     "millstreet": "117200",
//     "mitchelstown": "117300",
//     "montenotte": "113000",
//     "passage west": "117500",
//     "rathcormac": "117600",
//     "ringaskiddy": "113000",
//     "rochestown": "113000",
//     "skibbereen": "118200",
//     "tivoli": "113000",
//     "tower": "113000",
//     "whitegate": "113000",
//     "wilton": "118700",
//     "youghal": "118800",
//     "donegal": "118900",   
//     "donegal town": "119800",
//     "ballybofey": "119200",
//     "buncrana": "119400",
//     "bundoran": "119500",
//     "carndonagh": "119600",
//     "letterkenny": "120000",
//     "lifford": "120100",
//     "stranorlar": "120400",
//     "dublin": "120500",
//     "balbriggan": "120600",
//     "blackrock": "120700",
//     "booterstown": "120800",
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
//     "stillorgan": "123200",
//     "swords": "123300",
//     "i.f.s.c.": "123500",
//     "parnell street": "123600",
//     "spencer dock": "123700",
//     "summerhill": "123800",
//     "aungier street": "120500",
//     "charlemont street": "124100",
//     "grand canal dock": "120500",
//     "grand canal square": "120500",
//     "hanover quay": "124400",
//     "lower mount street": "120500",
//     "pearse street": "124600",
//     "tara street": "120500",
//     "temple bar": "124800",
//     "townsend street": "124900",
//     "clonliffe": "125200",
//     "clontarf": "125300",
//     "drumcondra": "125400",
//     "east wall": "125500",
//     "fairview": "125700",
//     "marino": "125900",
//     "north strand": "126000",
//     "ballsbridge": "126200",
//     "donnybrook": "126300",
//     "irishtown": "126400",
//     "merrion": "126500",
//     "pembroke": "126600",
//     "ringsend": "126700",
//     "sandymount": "126800",
//     "artane": "127000",
//     "killester": "127400",
//     "raheny": "127500",
//     "dartry": "127800",
//     "harolds cross": "127900",
//     "milltown": "128000",
//     "ranelagh": "128100",
//     "rathgar": "128200",
//     "rathmines": "128300",
//     "templeogue": "128900",
//     "terenure": "129000",
//     "arbour hill": "129200",
//     "cabra": "129300",
//     "navan road": "120500",
//     "north circular road": "129500",
//     "phibsboro": "129600",
//     "smithfield": "129700",
//     "stoneybatter": "129800",
//     "christchurch": "130000",
//     "cork street": "130100",
//     "dolphins barn": "120500",
//     "inchicore": "130300",
//     "islandbridge": "130400",
//     "kilmainham": "130500",
//     "portobello": "130600",
//     "rialto": "130700",
//     "south circular road": "130800",
//     "the coombe": "130900",
//     "dublin 9": "131000",
//     "ballymun": "131100",
//     "beaumont": "131200",
//     "glasnevin": "131500",
//     "santry": "131600",
//     "whitehall": "131700",
//     "ballyfermot": "131900",
//     "cherry orchard": "132000",
//     "finglas": "132300",
//     "meakstown": "132300",
//     "st margarets road": "132300",
//     "crumlin": "132900",
//     "drimnagh": "133000",
//     "kimmage": "133100",
//     "walkinstown": "133200",
//     "baldoyle": "133500",
//     "balgriffin": "133600",
//     "clongriffin": "133900",
//     "donaghmede": "134000",
//     "sutton": "134200",
//     "churchtown": "134400",
//     "clonskeagh": "134500",
//     "goatstown": "134700",
//     "ashtown": "135100",
//     "blanchardstown": "135200",
//     "carpenterstown": "135200",
//     "castleknock": "135400",
//     "clonee": "135500",
//     "clonsilla": "135600",
//     "coolmine": "135600",
//     "mulhuddart": "135900",
//     "ongar": "136000",
//     "porterstown": "136100",
//     "royal canal park": "136200",
//     "tyrrelstown": "136200",
//     "ballinteer": "136500",
//     "dundrum": "136600",
//     "knocklyon": "136700",
//     "rathfarnham": "136800",
//     "malahide road": "137500",
//     "northern cross": "137500",
//     "cabinteely": "137900",
//     "carrickmines": "138000",
//     "foxrock": "138100",
//     "leopardstown": "138300",
//     "sandyford": "138600",
//     "stepaside": "138900",
//     "chapelizod": "139200",
//     "palmerstown": "139300",
//     "clondalkin": "139400",
//     "ballycullen": "139600",
//     "citywest": "139700",
//     "firhouse": "139800",
//     "tallaght": "140100",
//     "galway": "140200",
//     "galway city": "141600",
//     "athenry": "140300",
//     "ballinasloe": "140400",
//     "ballybane": "140500",
//     "ballybrit": "140600",
//     "barna": "140800",
//     "bohermore": "140900",
//     "claregalway": "141000",
//     "clifden": "141200",
//     "doughiska": "141400",
//     "gort": "141700",
//     "headford": "141800",
//     "knocknacarra": "141800",
//     "loughrea": "142000",
//     "mervue": "142300",
//     "monivea": "142300",
//     "moycullen": "142300",
//     "newcastle": "142400",
//     "oranmore": "142500",
//     "oughterard": "142600",
//     "portumna": "142700",
//     "rahoon": "142800",
//     "renmore": "142800",
//     "roscam": "142800",
//     "salthill": "143100",
//     "tuam": "143200",
//     "wellpark": "143200",
//     "woodquay": "143200",
//     "kerry": "143500",
//     "castleisland": "143700",
//     "dingle": "143800",
//     "kenmare": "143900",
//     "killarney": "144000",
//     "killorglin": "144100",
//     "listowel": "144200",
//     "tralee": "144500",
//     "kildare": "144600",
//     "kildare town": "145400",
//     "athy": "144700",
//     "castledermot": "144800",
//     "celbridge": "144900",
//     "clane": "145000",
//     "kilcock": "145200",
//     "kilcullen": "145300",
//     "kill": "145500",
//     "leixlip": "145600",
//     "maynooth": "145700",
//     "monasterevin": "145800",
//     "naas": "145900",
//     "newbridge": "146000",
//     "rathangan": "146200",
//     "sallins": "146300",
//     "kilkenny": "146500",
//     "kilkenny city": "147200",
//     "callan": "146700",
//     "castlecomer": "146800",
//     "freshford": "146900",
//     "kells": "146500",
//     "thomastown": "147400",
//     "laois": "147600",
//     "mountmellick": "148500",
//     "mountrath": "148600",
//     "portarlington": "148700",
//     "portlaoise": "148800",
//     "leitrim": "149100",
//     "carrick-on-shannon": "149300",
//     "manorhamilton": "149900",
//     "limerick": "150100",
//     "limerick city": "151900",
//     "abbeyfeale": "150200",
//     "annacotty": "150400",
//     "castleconnell": "150900",
//     "castletroy": "151000",
//     "corbally": "151100",
//     "dock road": "151300",
//     "dooradoyle": "151400",
//     "glen": "150100",
//     "kilmallock": "151700",
//     "newcastle west": "152000",
//     "old cratloe road": "150100",
//     "raheen": "152200",
//     "longford": "152400",
//     "longford town": "153100",
//     "ballymahon": "152500",
//     "edgeworthstown": "152800",
//     "newtownforbes": "153200",
//     "louth": "153300",
//     "ardee": "153400",
//     "drogheda": "154000",
//     "termonfeckin": "153300",
//     "clogherhead": "153300",
//     "baltray": "153300",
//     "dundalk": "154200",
//     "louth town": "153300",
//     "mayo": "154900",
//     "ballina": "155100",
//     "ballinrobe": "155200",
//     "ballyhaunis": "155300",
//     "belmullet": "155400",
//     "castlebar": "155500",
//     "charlestown": "155600",
//     "claremorris": "155700",
//     "foxford": "155900",
//     "swinford": "156400",
//     "westport": "156500",
//     "meath": "156600",
//     "ashbourne": "156700",
//     "athboy": "156800",
//     "bettystown": "157000",
//     "clonee, meath": "157100",
//     "drogheda, meath": "157200",
//     "duleek": "157300",
//     "dunboyne": "157400",
//     "dunshaughlin": "157500",
//     "enfield": "157600",
//     "kells, meath": "157700",
//     "laytown": "157800",
//     "navan": "158100",
//     "ratoath": "158300",
//     "stamullen": "158500",
//     "trim": "158700",
//     "monaghan": "158800",
//     "ballybay": "158900",
//     "carrickmacross": "159000",
//     "castleblayney": "159100",
//     "monaghan town": "159300",
//     "offaly": "159400",
//     "banagher": "159500",
//     "birr": "159600",
//     "clara": "159700",
//     "edenderry": "159900",
//     "tullamore": "160100",
//     "roscommon": "160200",
//     "roscommon town": "161000",
//     "athlone": "160300",
//     "ballaghaderreen": "160400",
//     "boyle": "160600",
//     "castlerea": "160800",
//     "strokestown": "161100",
//     "sligo": "161200",
//     "sligo town": "162200",
//     "ballinode": "161300",
//     "ballisodare": "161400",
//     "ballymote": "161500",
//     "ballytivnan": "161500",
//     "collooney": "161800",
//     "lough gill": "161800",
//     "strandhill": "162300",
//     "tubbercurry": "162400",
//     "tipperary": "162500",
//     "tipperary town": "163900",
//     "ballina, tipperary": "162600",
//     "cahir": "162800",
//     "carrick-on-suir": "162900",
//     "cashel": "163000",
//     "clonmel": "163100",
//     "fethard": "163300",
//     "nenagh": "163400",
//     "roscrea": "163600",
//     "templemore": "163700",
//     "thurles": "163800",
//     "waterford": "164000",
//     "waterford city": "167100",
//     "ballytruckl": "164000",
//     "canada street": "164000",
//     "castle place": "164000",
//     "cork road": "164700",
//     "dungarvan": "164800",
//     "dunmore east": "164900",
//     "dunmore road": "165000",
//     "ferrybank": "165200",
//     "inner ring road": "165400",
//     "johns hill": "165500",
//     "lismore": "165900",
//     "mary street": "165900",
//     "penrose lane": "166200",
//     "poleberry": "166300",
//     "portlaw": "166400",
//     "railway square": "166400",
//     "scotch quay": "166400",
//     "templars hall": "166800",
//     "tramore": "166900",
//     "westmeath": "167300",
//     "athlone, westmeath": "167400",
//     "castlepollard": "167500",
//     "kilbeggan": "167700",
//     "kinnegad": "167900",
//     "moate": "168000",
//     "mullingar": "168100",
//     "wexford": "168200",
//     "bunclody": "168300",
//     "clonard": "168500",
//     "enniscorthy": "168600",
//     "ferns": "168700",
//     "ford": "168700",
//     "gorey": "168900",
//     "mulgannon": "169000",
//     "new ross": "169100",
//     "rosslare": "169200",
//     "wicklow": "169300",
//     "wicklow town": "171200",
//     "arklow": "169400",
//     "baltinglass": "169700",
//     "blessington": "169900",
//     "bray": "170000",
//     "delgany": "170200",
//     "greystones": "170500",
//     "kilcoole": "169300",
//     "newtownmountkennedy": "170700",
//     "rathnew": "170900"
//   }

//   const fetchData = async (apiUrl) => {
//     try {
//       const response = await fetch(apiUrl);
//       const jsonData = await response.json();

//       const newValue = jsonData?.result?.value[0];

//       if (!newValue) {
//         setFormattedDataRent('Value not found in data.');
//       } else {
//         setFormattedDataRent(`Average Rent Cost: €${newValue}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setFormattedDataRent('Error during rent data fetching.');
//     }
//   };

//   useEffect(() => {
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

//   useEffect(() => {
//     if (searchTerm) {
//       const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//       const fetchGeocodeData = async () => {
//         try {
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

//           const areaCode = areaMapping[county.toLowerCase()];
//           if (areaCode) {
//             const newApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//             await fetchData(newApiUrl); // Fetch rent data
//           } else {
//             setFormattedDataRent('County not found in the mapping.');
//           }
//         } catch (error) {
//           console.error(error);
//           setFormattedDataRent('Error during geocode data fetching.');
//         }
//       };

//       fetchGeocodeData();
//     }
//   }, [searchTerm]);

//   const displayHouse = (term) => {
//     const filteredHouses = houses.filter(
//       (house) =>
//         house.area.toLowerCase().includes(term.toLowerCase()) ||
//         house.year.toString().includes(term) ||
//         house.price.toString().includes(term)
//     );
//     return <p>Number of results: {filteredHouses.length}</p>
  
//   //   if (filteredHouses.length === 0) {
//   //     const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(term)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//   //     try {
//   //       const geocodeResponse = await fetch(geocodeApiUrl);
//   //       const geocodeData = await geocodeResponse.json();
//   //       const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');
//   //       displayHouse(county); // Run with new searchTerm
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   } else {
//   //     return filteredHouses.map((house) => (
//   //       <div key={house.id}>
//   //         <p>Year: {house.year}</p>
//   //         <p>Area: {house.area}</p>
//   //         <p>Average Home Cost: {house.price}</p>
//   //       </div>
//   //     ));
//   //   }
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

//   return (
//     <div>
//       <h1>Housing and Rent Prices</h1>
//       {displayHouse(searchTerm)}
//       <div>
//         <pre>{formattedDataRent}</pre>
//       </div>
//     </div>
//   );
// };

// export default House;



















// import React, { useState, useEffect } from 'react';

// const House = ({ searchTerm }) => {
//   const [houses, setHouses] = useState([]);
//   const [formattedDataRent, setFormattedDataRent] = useState('');
  
//   const areaMapping = {
//     "carlow": "110000",
//     "carlow town": "110200",
//     "graiguecullen": "110000",
//     "tullow": "110500",
//     "cavan": "110550",
//     "cavan town": "111100",
//     "bailieborough": "110600",
//     "ballyconnell": "110800",
//     "citywest": "139700",
//     "firhouse": "139800",
//     "tallaght": "140100",
//     "galway": "140200",
//     "galway city": "141600",
//     "athenry": "140300",
//     "ballinasloe": "140400",
//     "ballybane": "140500",
//     "tralee": "144500",
//     "kildare": "144600",
//     "kildare town": "145400",
//     "carrick-on-shannon": "149300",
//     "manorhamilton": "149900",
//     "limerick": "150100",
//     "newtownforbes": "153200",
//     "louth": "153300",
//     "ardee": "153400",
//     "drogheda": "154000",
//     "termonfeckin": "153300",
//     "clogherhead": "153300",
//     "baltray": "153300",
//     "dundalk": "154200",
//     "louth town": "153300",
//     "kilcoole": "169300",
//     "newtownmountkennedy": "170700",
//     "rathnew": "170900"
//   }

//   const fetchData = async (apiUrl) => {
//     try {
//       const response = await fetch(apiUrl);
//       const jsonData = await response.json();

//       const newValue = jsonData?.result?.value[0];

//       if (!newValue) {
//         setFormattedDataRent('Value not found in data.');
//       } else {
//         setFormattedDataRent(`Average Rent Cost: €${newValue}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setFormattedDataRent('Error during rent data fetching.');
//     }
//   };

//   useEffect(() => {
//     const displayHouse = async (term) => {
//       const filteredHouses = houses.filter(
//         (house) =>
//           house.area.toLowerCase().includes(term.toLowerCase()) ||
//           house.year.toString().includes(term) ||
//           house.price.toString().includes(term)
//       );

//       if (filteredHouses.length === 0) {
//         try {
//           const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(term)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

//           const countyApiUrl = `http://127.0.0.1:8000/house/?area=${encodeURIComponent(county)}`;
//           const countyData = await fetch(countyApiUrl).then(res => res.json());

//           setHouses(countyData);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };

//     if (searchTerm) {
//       const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//       const fetchGeocodeData = async () => {
//         try {
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

//           const areaCode = areaMapping[county.toLowerCase()];
//           if (areaCode) {
//             const newApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

//             await fetchData(newApiUrl); // Fetch rent data
//           } else {
//             setFormattedDataRent('County not found in the mapping.');
//           }
//         } catch (error) {
//           console.error(error);
//           setFormattedDataRent('Error during geocode data fetching.');
//         }
//       };

//       fetchGeocodeData();
//       displayHouse(searchTerm);
//     }
//   }, [searchTerm, houses, areaMapping, fetchData]);

//   //     return filteredHouses.map((house) => (
//   //       <div key={house.id}>
//   //         <p>Year: {house.year}</p>
//   //         <p>Area: {house.area}</p>
//   //         <p>Average Home Cost: {house.price}</p>
//   //       </div>
//   //     ));
//   //   }
//   // };

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

//   const displayHouses = () => {
//     return houses.map((house) => (
//       <div key={house.id}>
//         <p>Year: {house.year}</p>
//         <p>Area: {house.area}</p>
//         <p>Average Home Cost: {house.price}</p>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h1>Housing and Rent Prices</h1>
//       {displayHouses()}
//       <div>
//         <pre>{formattedDataRent}</pre>
//       </div>
//     </div>
//   );
// };

// export default House;




import React, { useState, useEffect } from 'react';

const House = ({ searchTerm }) => {
  const [houses, setHouses] = useState([]);
  const [formattedDataRent, setFormattedDataRent] = useState('');
  const [result, setResult] = useState(null);

  const areaMapping = {
    "carlow": "110000",
    "carlow town": "110200",
    "graiguecullen": "110000",
    "tullow": "110500",
    "cavan": "110550",
    "cavan town": "111100",
    "bailieborough": "110600",
    "ballyconnell": "110800",
    "ballyjamesduff": "110900",
    "belturbet": "111000",
    "cootehill": "111200",
    "kingscourt": "111300",
    "virginia": "111500",
    "clare": "111600",
    "ennis": "111900",
    "killaloe": "112100",
    "kilrush": "112200",
    "newmarket-on-fergus": "112400",
    "shannon": "112700",
    "sixmilebridge": "112800",
    "cork": "113000",
    "cork city": "115200",
    "ballincollig": "113100",
    "ballintemple": "113200",
    "ballinure": "113000",
    "bandon": "113500",
    "bantry": "113600",
    "bishopstown": "113800",
    "blackpool": "113900",
    "blackrock, cork": "114000",
    "blarney": "114100",
    "carrigaline": "114300",
    "carrigtwohill": "114400",
    "castlemartyr": "114500",
    "charleville": "114700",
    "clonakilty": "114800",
    "cloyne": "114900",
    "cobh": "115000",
    "crosshaven": "115500",
    "douglas": "115700",
    "dunmanway": "115900",
    "fermoy": "116100",
    "frankfield": "113000",
    "glanmire": "116300",
    "kanturk": "116500",
    "kinsale": "116800",
    "macroom": "116900",
    "mallow": "117000",
    "midleton": "117100",
    "millstreet": "117200",
    "mitchelstown": "117300",
    "montenotte": "113000",
    "passage west": "117500",
    "rathcormac": "117600",
    "ringaskiddy": "113000",
    "rochestown": "113000",
    "skibbereen": "118200",
    "tivoli": "113000",
    "tower": "113000",
    "whitegate": "113000",
    "wilton": "118700",
    "youghal": "118800",
    "donegal": "118900",   
    "donegal town": "119800",
    "ballybofey": "119200",
    "buncrana": "119400",
    "bundoran": "119500",
    "carndonagh": "119600",
    "letterkenny": "120000",
    "lifford": "120100",
    "stranorlar": "120400",
    "dublin": "120500",
    "balbriggan": "120600",
    "blackrock": "120700",
    "booterstown": "120800",
    "dalkey": "121200",
    "donabate": "121300",
    "dun laoghaire": "121400",
    "glenageary": "121500",
    "howth": "121600",
    "killiney": "121700",
    "kinsealy": "121800",
    "lucan": "121900",
    "lusk": "122000",
    "malahide": "122100",
    "monkstown": "122200",
    "mount merrion": "122300",
    "portmarnock": "122400",
    "rathcoole": "122500",
    "rush": "122600",
    "saggart": "122700",
    "sandycove": "122800",
    "shankill": "122900",
    "skerries": "123000",
    "stillorgan": "123200",
    "swords": "123300",
    "i.f.s.c.": "123500",
    "parnell street": "123600",
    "spencer dock": "123700",
    "summerhill": "123800",
    "aungier street": "120500",
    "charlemont street": "124100",
    "grand canal dock": "120500",
    "grand canal square": "120500",
    "hanover quay": "124400",
    "lower mount street": "120500",
    "pearse street": "124600",
    "tara street": "120500",
    "temple bar": "124800",
    "townsend street": "124900",
    "clonliffe": "125200",
    "clontarf": "125300",
    "drumcondra": "125400",
    "east wall": "125500",
    "fairview": "125700",
    "marino": "125900",
    "north strand": "126000",
    "ballsbridge": "126200",
    "donnybrook": "126300",
    "irishtown": "126400",
    "merrion": "126500",
    "pembroke": "126600",
    "ringsend": "126700",
    "sandymount": "126800",
    "artane": "127000",
    "killester": "127400",
    "raheny": "127500",
    "dartry": "127800",
    "harolds cross": "127900",
    "milltown": "128000",
    "ranelagh": "128100",
    "rathgar": "128200",
    "rathmines": "128300",
    "templeogue": "128900",
    "terenure": "129000",
    "arbour hill": "129200",
    "cabra": "129300",
    "navan road": "120500",
    "north circular road": "129500",
    "phibsboro": "129600",
    "smithfield": "129700",
    "stoneybatter": "129800",
    "christchurch": "130000",
    "cork street": "130100",
    "dolphins barn": "120500",
    "inchicore": "130300",
    "islandbridge": "130400",
    "kilmainham": "130500",
    "portobello": "130600",
    "rialto": "130700",
    "south circular road": "130800",
    "the coombe": "130900",
    "dublin 9": "131000",
    "ballymun": "131100",
    "beaumont": "131200",
    "glasnevin": "131500",
    "santry": "131600",
    "whitehall": "131700",
    "ballyfermot": "131900",
    "cherry orchard": "132000",
    "finglas": "132300",
    "meakstown": "132300",
    "st margarets road": "132300",
    "crumlin": "132900",
    "drimnagh": "133000",
    "kimmage": "133100",
    "walkinstown": "133200",
    "baldoyle": "133500",
    "balgriffin": "133600",
    "clongriffin": "133900",
    "donaghmede": "134000",
    "sutton": "134200",
    "churchtown": "134400",
    "clonskeagh": "134500",
    "goatstown": "134700",
    "ashtown": "135100",
    "blanchardstown": "135200",
    "carpenterstown": "135200",
    "castleknock": "135400",
    "clonee": "135500",
    "clonsilla": "135600",
    "coolmine": "135600",
    "mulhuddart": "135900",
    "ongar": "136000",
    "porterstown": "136100",
    "royal canal park": "136200",
    "tyrrelstown": "136200",
    "ballinteer": "136500",
    "dundrum": "136600",
    "knocklyon": "136700",
    "rathfarnham": "136800",
    "malahide road": "137500",
    "northern cross": "137500",
    "cabinteely": "137900",
    "carrickmines": "138000",
    "foxrock": "138100",
    "leopardstown": "138300",
    "sandyford": "138600",
    "stepaside": "138900",
    "chapelizod": "139200",
    "palmerstown": "139300",
    "clondalkin": "139400",
    "ballycullen": "139600",
    "citywest": "139700",
    "firhouse": "139800",
    "tallaght": "140100",
    "galway": "140200",
    "galway city": "141600",
    "athenry": "140300",
    "ballinasloe": "140400",
    "ballybane": "140500",
    "ballybrit": "140600",
    "barna": "140800",
    "bohermore": "140900",
    "claregalway": "141000",
    "clifden": "141200",
    "doughiska": "141400",
    "gort": "141700",
    "headford": "141800",
    "knocknacarra": "141800",
    "loughrea": "142000",
    "mervue": "142300",
    "monivea": "142300",
    "moycullen": "142300",
    "newcastle": "142400",
    "oranmore": "142500",
    "oughterard": "142600",
    "portumna": "142700",
    "rahoon": "142800",
    "renmore": "142800",
    "roscam": "142800",
    "salthill": "143100",
    "tuam": "143200",
    "wellpark": "143200",
    "woodquay": "143200",
    "kerry": "143500",
    "castleisland": "143700",
    "dingle": "143800",
    "kenmare": "143900",
    "killarney": "144000",
    "killorglin": "144100",
    "listowel": "144200",
    "tralee": "144500",
    "kildare": "144600",
    "kildare town": "145400",
    "athy": "144700",
    "castledermot": "144800",
    "celbridge": "144900",
    "clane": "145000",
    "kilcock": "145200",
    "kilcullen": "145300",
    "kill": "145500",
    "leixlip": "145600",
    "maynooth": "145700",
    "monasterevin": "145800",
    "naas": "145900",
    "newbridge": "146000",
    "rathangan": "146200",
    "sallins": "146300",
    "kilkenny": "146500",
    "kilkenny city": "147200",
    "callan": "146700",
    "castlecomer": "146800",
    "freshford": "146900",
    "kells": "146500",
    "thomastown": "147400",
    "laois": "147600",
    "mountmellick": "148500",
    "mountrath": "148600",
    "portarlington": "148700",
    "portlaoise": "148800",
    "leitrim": "149100",
    "carrick-on-shannon": "149300",
    "manorhamilton": "149900",
    "limerick": "150100",
    "limerick city": "151900",
    "abbeyfeale": "150200",
    "annacotty": "150400",
    "castleconnell": "150900",
    "castletroy": "151000",
    "corbally": "151100",
    "dock road": "151300",
    "dooradoyle": "151400",
    "glen": "150100",
    "kilmallock": "151700",
    "newcastle west": "152000",
    "old cratloe road": "150100",
    "raheen": "152200",
    "longford": "152400",
    "longford town": "153100",
    "ballymahon": "152500",
    "edgeworthstown": "152800",
    "newtownforbes": "153200",
    "louth": "153300",
    "ardee": "153400",
    "drogheda": "154000",
    "termonfeckin": "153300",
    "clogherhead": "153300",
    "baltray": "153300",
    "dundalk": "154200",
    "louth town": "153300",
    "mayo": "154900",
    "ballina": "155100",
    "ballinrobe": "155200",
    "ballyhaunis": "155300",
    "belmullet": "155400",
    "castlebar": "155500",
    "charlestown": "155600",
    "claremorris": "155700",
    "foxford": "155900",
    "swinford": "156400",
    "westport": "156500",
    "meath": "156600",
    "ashbourne": "156700",
    "athboy": "156800",
    "bettystown": "157000",
    "clonee, meath": "157100",
    "drogheda, meath": "157200",
    "duleek": "157300",
    "dunboyne": "157400",
    "dunshaughlin": "157500",
    "enfield": "157600",
    "kells, meath": "157700",
    "laytown": "157800",
    "navan": "158100",
    "ratoath": "158300",
    "stamullen": "158500",
    "trim": "158700",
    "monaghan": "158800",
    "ballybay": "158900",
    "carrickmacross": "159000",
    "castleblayney": "159100",
    "monaghan town": "159300",
    "offaly": "159400",
    "banagher": "159500",
    "birr": "159600",
    "clara": "159700",
    "edenderry": "159900",
    "tullamore": "160100",
    "roscommon": "160200",
    "roscommon town": "161000",
    "athlone": "160300",
    "ballaghaderreen": "160400",
    "boyle": "160600",
    "castlerea": "160800",
    "strokestown": "161100",
    "sligo": "161200",
    "sligo town": "162200",
    "ballinode": "161300",
    "ballisodare": "161400",
    "ballymote": "161500",
    "ballytivnan": "161500",
    "collooney": "161800",
    "lough gill": "161800",
    "strandhill": "162300",
    "tubbercurry": "162400",
    "tipperary": "162500",
    "tipperary town": "163900",
    "ballina, tipperary": "162600",
    "cahir": "162800",
    "carrick-on-suir": "162900",
    "cashel": "163000",
    "clonmel": "163100",
    "fethard": "163300",
    "nenagh": "163400",
    "roscrea": "163600",
    "templemore": "163700",
    "thurles": "163800",
    "waterford": "164000",
    "waterford city": "167100",
    "ballytruckl": "164000",
    "canada street": "164000",
    "castle place": "164000",
    "cork road": "164700",
    "dungarvan": "164800",
    "dunmore east": "164900",
    "dunmore road": "165000",
    "ferrybank": "165200",
    "inner ring road": "165400",
    "johns hill": "165500",
    "lismore": "165900",
    "mary street": "165900",
    "penrose lane": "166200",
    "poleberry": "166300",
    "portlaw": "166400",
    "railway square": "166400",
    "scotch quay": "166400",
    "templars hall": "166800",
    "tramore": "166900",
    "westmeath": "167300",
    "athlone, westmeath": "167400",
    "castlepollard": "167500",
    "kilbeggan": "167700",
    "kinnegad": "167900",
    "moate": "168000",
    "mullingar": "168100",
    "wexford": "168200",
    "bunclody": "168300",
    "clonard": "168500",
    "enniscorthy": "168600",
    "ferns": "168700",
    "ford": "168700",
    "gorey": "168900",
    "mulgannon": "169000",
    "new ross": "169100",
    "rosslare": "169200",
    "wicklow": "169300",
    "wicklow town": "171200",
    "arklow": "169400",
    "baltinglass": "169700",
    "blessington": "169900",
    "bray": "170000",
    "delgany": "170200",
    "greystones": "170500",
    "kilcoole": "169300",
    "newtownmountkennedy": "170700",
    "rathnew": "170900"
  }
    const countyMapping = {
    "Carlow": "€240,000",
    "Dublin": "Dublin City: €402,500, County: €468,749",
    "Kildare": "€404,500",
    "Kilkenny": "€285,000",
    "Laois": "€280,000",
    "Longford": "€170,000",
    "Louth": "€322,499",
    "Meath": "€355,000",
    "Offaly": "€225,000",
    "Westmeath": "€244,000",
    "Wexford": "€280,000",
    "Wicklow": "€442,500",
    "Clare": "€240,000",
    "Cork": "Cork City: €292,000 and County: €320,000",
    "Kerry": "€246,000",
    "Limerick": "Limerick City: €290,000, County: €255,000",
    "Tipperary": "€229,250",
    "Waterford": "Waterford City: €230,000, County: €287,500",
    "Galway": "Galway City: €372,500, County: €282,000",
    "Leitrim": "€177,000",
    "Mayo": "€200,000",
    "Roscommon": "€182,000",
    "Sligo": "€220,000",
    "Cavan": "€190,000",
    "Donegal": "€189,000",
    "Monaghan": "€200,000"
};
  const fetchData = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      const newValue = jsonData?.result?.value[0];

      if (!newValue) {
        setFormattedDataRent('Value not found in data.');
      } else {
        setFormattedDataRent(`Average Rent Cost: €${newValue}`);
      }
    } catch (error) {
      console.error(error);
      setFormattedDataRent('Error during rent data fetching.');
    }
  };
  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

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

  useEffect(() => {
    if (searchTerm) {
      const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

      const fetchGeocodeData = async () => {
        try {
          const geocodeResponse = await fetch(geocodeApiUrl);
          const geocodeData = await geocodeResponse.json();
          const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

          const areaCode = areaMapping[county.toLowerCase()];
          if (areaCode) {
            const newApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);

            await fetchData(newApiUrl); // Fetch rent data
          } else {
            setFormattedDataRent('County not found in the mapping.');
          }
        } catch (error) {
          console.error(error);
          setFormattedDataRent('Error during geocode data fetching.');
        }
      };

      fetchGeocodeData();
    }
  }, [searchTerm]);


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
    const fetchHousesData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setHouses(data);

        const filteredHouses = data.filter(
          (house) =>
            // house.area.toLowerCase().includes(searchTerm.toLowerCase())
            house.area.toLowerCase() === searchTerm.toLowerCase()
        );

        if (filteredHouses.length === 0) {
          const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          try {
            const geocodeResponse = await fetch(geocodeApiUrl);
            const geocodeData = await geocodeResponse.json();
            const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

            const price = countyMapping[county];
            const searchTermNew = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

            if (price) {
              setResult(
                <div>
                <p>Year: 2023 </p>
                <p>Area: {searchTermNew}, County {county}</p>
                <p>Average Home Cost: {price}</p>
                </div>
              )
            } else {
              setResult(
                <div>
                <p>No Housing Data </p>
                </div>
              );
            }
          } catch (error) {
            console.error(error);
            setResult(
              <div>
              <p>No Housing Data </p>
              </div>
            );
          }
        } else {
          setResult(
            filteredHouses.map((house) => (
              <div key={house.id}>
                <p>Year: {house.year}</p>
                <p>Area: {house.area}</p>
                <p>Average Home Cost: {house.price}</p>
              </div>
            ))
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchHousesData();
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Housing and Rent Prices for {capitalSearchTerm}</h1>
      {result}
      <div>
        <pre>{formattedDataRent}</pre>
      </div>
    </div>
  );
};

export default House;