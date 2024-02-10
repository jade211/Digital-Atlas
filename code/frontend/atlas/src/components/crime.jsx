// import React, {useState, useEffect} from 'react';

// function Crime() {
//   // return (
//     const [data, setData] = useState(null);

//     useEffect(() => {
//       fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
//       .then((response) => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//     }, []);

//     return (
//       <div>
//         {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading......'}
//       </div>
//     );
// }

// export default Crime;












// import React, { useState, useEffect } from 'react';

// function Crime() {
//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {

//     fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
//       .then((response) => response.json())
//       .then((json) => setApiData(json))
//       .catch((error) => console.error(error));
//   }, []); // Empty dependency array to run the effect only once on mount


//   const statisticLabel = apiData?.dimension?.STATISTIC?.label;
//   const quarterLabels = apiData?.dimension?.["TLIST(Q1)"]?.category?.label;
//   const gardaDivisionLabels = apiData?.dimension?.C02481V03160?.category?.label;
//   const regionLabels = apiData?.dimension?.C02480V03003?.category?.label;

//   return (
//     <div>
//       <h2>Extracted Data:</h2>
//       <p>Statistic Label: {statisticLabel}</p>
//       <p>Quarter Labels: {JSON.stringify(quarterLabels)}</p>
//       <p>Garda Division Labels: {JSON.stringify(gardaDivisionLabels)}</p>
//       <p>Region Labels: {JSON.stringify(regionLabels)}</p>
//     </div>
//   );
// }

// export default Crime;









// import React, { useState, useEffect } from 'react';

// function Crime() {
//   const [apiData, setApiData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
//       .then((response) => response.json())
//       .then((json) => setApiData(json))
//       .catch((error) => console.error(error));
//   }, []); 

//   // const statisticLabel = apiData?.dimension?.STATISTIC?.label;
//   // const quarterLabels = apiData?.dimension?.["TLIST(Q1)"]?.category?.label;
//   const gardaDivisionLabels = apiData?.dimension?.C02481V03160?.category?.label;
//   // const regionLabels = apiData?.dimension?.C02480V03003?.category?.label;

//   // Filter data based on user input
//   const filteredDivisions = gardaDivisionLabels
//     ? Object.entries(gardaDivisionLabels)
//         .filter(([divisionCode, divisionLabel]) =>
//           divisionLabel.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//         .reduce((acc, [divisionCode, divisionLabel]) => {
//           acc[divisionCode] = divisionLabel;
//           return acc;
//         }, {})
//     : {};

//   return (
//     <div>
//       <div>
//         <label>
//           Search by Garda Division:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </label>
//       </div>
//       <h2>Filtered Garda Divisions:</h2>
//       <pre>{JSON.stringify(filteredDivisions, null, 2)}</pre>
//     </div>
//   );
// }

// export default Crime;





















// import React, { useState, useEffect } from 'react';

// function Crime() {
//   const [apiData, setApiData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
//       .then((response) => response.json())
//       .then((json) => setApiData(json))
//       .catch((error) => console.error(error));
//   }, []); 


//   const values = apiData?.value;
//   const gardaDivisionLabels = apiData?.dimension?.C02481V03160?.category?.label;


//   const reportedCrimesByDivision = {}; // Array to store the number of reported crimes for each Garda Division

//   if (values && gardaDivisionLabels) {
//     values.forEach((value, index) => {
//       const quarter = apiData?.dimension?.["TLIST(Q1)"]?.category?.index[index];
//       const divisionCode = apiData?.dimension?.C02481V03160?.category?.index[index];
//       const divisionLabel = gardaDivisionLabels[divisionCode];
//       const crimeType = apiData?.dimension?.C02480V03003?.category?.index[index];
//       const crimeCount = value;

//       if (!reportedCrimesByDivision[divisionLabel]) {
//         reportedCrimesByDivision[divisionLabel] = {};
//       }

//       if (!reportedCrimesByDivision[divisionLabel][quarter]) {
//         reportedCrimesByDivision[divisionLabel][quarter] = {};
//       }

//       reportedCrimesByDivision[divisionLabel][quarter][crimeType] = crimeCount;
//     });
//   }


//   const filteredDivisions = Object.keys(reportedCrimesByDivision)
//     .filter((divisionLabel) =>
//       divisionLabel.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .reduce((acc, divisionLabel) => {
//       acc[divisionLabel] = reportedCrimesByDivision[divisionLabel];
//       return acc;
//     }, {});

//   return (
//     <div>
//       <div>
//         <label>
//           Search by Garda Division:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </label>
//       </div>
//       <h2>Reported Crimes by Garda Division:</h2>
//       <pre>{JSON.stringify(filteredDivisions, null, 2)}</pre>
//     </div>
//   );
// }

// export default Crime;
















// import React, { useState, useEffect } from 'react';

// function Crime() {
//   const [apiData, setApiData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
//       .then((response) => response.json())
//       .then((json) => setApiData(json))
//       .catch((error) => console.error(error));
//   }, []); 

//   const values = apiData?.value;
//   const gardaDivisionLabels = apiData?.dimension?.C02481V03160?.category?.label;
//   const crimeTypeLabels = apiData?.dimension?.C02480V03003?.category?.label;
//   const reportedCrimesByDivision = {};

//   if (values && gardaDivisionLabels) {
//     values.forEach((value, index) => {
//       const quarter = apiData?.dimension?.["TLIST(Q1)"]?.category?.index[index];
//       const divisionCode = apiData?.dimension?.C02481V03160?.category?.index[index];
//       const divisionLabel = gardaDivisionLabels[divisionCode];
//       const crimeTypeCode = apiData?.dimension?.C02480V03003?.category?.index[index];
//       const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//       const crimeCount = value;

//       if (!reportedCrimesByDivision[divisionLabel]) {
//         reportedCrimesByDivision[divisionLabel] = {};
//       }

//       if (!reportedCrimesByDivision[divisionLabel][quarter]) {
//         reportedCrimesByDivision[divisionLabel][quarter] = {};
//       }

//       if (!reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel]) {
//         reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] = 0;
//       }

//       reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] = reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] + crimeCount;
//     });
//   }

//   const filteredDivisions = Object.keys(reportedCrimesByDivision)
//     .filter((divisionLabel) =>
//       divisionLabel.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .reduce((acc, divisionLabel) => {
//       acc[divisionLabel] = reportedCrimesByDivision[divisionLabel];
//       return acc;
//     }, {});

//   return (
//     <div>
//       <div>
//         <label>
//           Search by Garda Division:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </label>
//       </div>
//       <h2>Reported Crimes by Garda Division:</h2>
//       <pre>{JSON.stringify(filteredDivisions, null, 2)}</pre>
//     </div>
//   );
// }

// export default Crime;








// import React, { useState, useEffect } from 'react';

// function Crime() {
//   const [apiData, setApiData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDivision, setSelectedDivision] = useState(null);

//   useEffect(() => {
//     fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
//       .then((response) => response.json())
//       .then((json) => setApiData(json))
//       .catch((error) => console.error(error));
//   }, []); 

//   const values = apiData?.value;
//   const gardaDivisionLabels = apiData?.dimension?.C02481V03160?.category?.label;
//   const crimeTypeLabels = apiData?.dimension?.C02480V03003?.category?.label;
//   const reportedCrimesByDivision = {};

//   if (values && gardaDivisionLabels) {
//     values.forEach((value, index) => {
//       const quarter = apiData?.dimension?.["TLIST(Q1)"]?.category?.index[index];
//       const divisionCode = apiData?.dimension?.C02481V03160?.category?.index[index];
//       const divisionLabel = gardaDivisionLabels[divisionCode];
//       const crimeTypeCode = apiData?.dimension?.C02480V03003?.category?.index[index];
//       const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//       const crimeCount = value;

//       if (!reportedCrimesByDivision[divisionLabel]) {
//         reportedCrimesByDivision[divisionLabel] = {};
//       }

//       if (!reportedCrimesByDivision[divisionLabel][quarter]) {
//         reportedCrimesByDivision[divisionLabel][quarter] = {};
//       }

//       if (!reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel]) {
//         reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] = 0;
//       }

//       reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] += crimeCount;
//     });
//   }

//   const filteredDivisions = Object.keys(reportedCrimesByDivision)
//     .filter((divisionLabel) =>
//       divisionLabel.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .reduce((acc, divisionLabel) => {
//       acc[divisionLabel] = reportedCrimesByDivision[divisionLabel];
//       return acc;
//     }, {});

//   const selectDivision = (divisionLabel) => {
//     setSelectedDivision(reportedCrimesByDivision[divisionLabel]);
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           Search by Garda Division:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </label>
//       </div>
//       <h2>Reported Crimes by Garda Division:</h2>
//       <div>
//         {Object.keys(filteredDivisions).map((divisionLabel, index) => (
//           <div key={index} className="card">
//             <div className="card-body">
//               <p onClick={() => selectDivision(divisionLabel)}>{divisionLabel}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedDivision && (
//         <div>
//           <h2>Selected Garda Division Details:</h2>
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">{selectedDivision.name}</h5>
//               {/* Include other details as needed */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Crime;




// Uses numbers as input
// import React, { useState, useEffect } from 'react';

//   function Crime() {
//     const [data, setData] = useState(null);
//     const [userInput, setUserInput] = useState("11"); // Default to "11"
  
//     useEffect(() => {
//       const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", userInput);
  
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then(json => setData(json))
//         .catch(error => console.error(error));
//     }, [userInput]);
  
//     const formatCrimeData = () => {
//       if (!data) return 'Loading......';
  
//       const crimeData = data.result.value;
  
//       const crimeTypeLabels = {
//         '10': 'Homicide offences',
//         '11': 'Murder',
//         '12': 'Manslaughter',
//         '13': 'Infanticide',
//         '15': 'Dangerous driving leading to death',
//         '103': 'Sexual offences',
//         '111': 'Rape and sexual assault',
//         '113': 'Other sexual offences',
//         // ADD REST****
//       };
  
//       const formattedCrimeData = crimeData.map((value, index) => {
//         const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
//         const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//         return `${crimeTypeLabel}: ${value}`;
//       });
  
//       return formattedCrimeData.join('\n');
//     };
  
//     const generateApiUrl = (id1, id2, categoryIndex1, categoryIndex2) => {
//       const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//         "jsonrpc": "2.0",
//         "method": "PxStat.Data.Cube_API.ReadDataset",
//         "params": {
//           "class": "query",
//           "id": [id1, id2],
//           "dimension": {
//             [id1]: {
//               "category": {
//                 "index": [categoryIndex1]
//               }
//             },
//             [id2]: {
//               "category": {
//                 "index": [categoryIndex2]
//               }
//             }
//           },
//           "extension": {
//             "pivot": null,
//             "codes": true,
//             "language": {
//               "code": "en"
//             },
//             "format": {
//               "type": "JSON-stat",
//               "version": "2.0"
//             },
//             "matrix": "CJQ06"
//           },
//           "version": "2.0"
//         }
//       }))}`;
  
//       return apiUrl;
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a number"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//         />
//         <pre>{formatCrimeData()}</pre>
//       </div>
//     );
//   }
  
//   export default Crime;






// import React, { useState, useEffect } from 'react';

//   function Crime() {
//     const [data, setData] = useState(null);
//     const [gardaStationInput, setGardaStationInput] = useState("Cavan"); // Default to "Cavan"
  
//     // Mapping object for Garda station names and numbers
//     const gardaStationMapping = {
//       "Cavan" : "11",
//       "Monaghan" : 11,
//       "Donegal": "12",
//       "Sligo": "13",
//       "Leitrim": "13",
//       "Louth": "14",
//       "Clare": "21",
//       "Mayo": "22",
//       "Galway": "23",
//       "Roscommon": "24",
//       "Longford": "24",
//       "Cork": "31",
//       "Cork City": "31",
//       "Cork North": "32",
//       "Cork West": "33",
//       "Kerry": "34",
//       "Limerick": "35",
//       "Laois": "41",
//       "Offaly": "41",
//       "Meath": "42",
//       "Wicklow": "43",
//       "Westmeath": "44",
//       "Kildare": "45",
//       "Tipperary": "51",
//       "Wexford": "52",
//       "Carlow": "53",
//       "Kilkenny": "53",
//       "Waterford": "54",
//       "D.M.R. South Central": "61",
//       "D.M.R. North Central": "62",
//       "D.M.R. Northern": "63",
//       "D.M.R. Southern": "64",
//       "D.M.R. Eastern": "65",
//       "D.M.R. Western": "66"
//     };
  
//     useEffect(() => {
//       const gardaStationNumber = gardaStationMapping[gardaStationInput];
  
//       const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then(json => setData(json))
//         .catch(error => console.error(error));
//     }, [gardaStationInput]);
  
//     const formatCrimeData = () => {
//       if (!data) return 'Loading......';
  
//       const crimeData = data.result.value;
  
      // const crimeTypeLabels = {
      //   '01': 'Homicide Offences',
      //   '0111': 'Murder',
      //   '0112': 'Manslaughter',
      //   '0113': 'Infanticide',
      //   '012': 'Dangerous driving leading to death',
      //   '02': 'Sexual offences',
      //   '021': 'Rape and sexual assault',
      //   '022': 'Other sexual offences',
      //   '03' : 'Attempts/threats to murder, assaults, harassments and related offences',
      //   '0311': 'Murder-attempt',
      //   '0313': 'Threat to kill or cause serious harm',
      //   '033': 'Harassment and related offences',
      //   '034': 'Assault causing harm, poisoning',
      //   '035': 'Other assault',
      //   '04': 'Dangerous or negligent acts',
      //   '0411': 'Dangerous driving causing serious bodily harm',
      //   '0412': 'Driving/in charge of a vehicle while over legal alcohol limit',
      //   '0413': 'Driving/in charge of a vehicle under the influence of drugs',
      //   '0421': 'Endangerment with potential for serious harm/death',
      //   '0422': 'Abandoning a child, child neglect and cruelty',
      //   '0423': 'Unseaworthy/dangerous use of boat or ship',
      //   '0424': 'False alarm/interference with aircraft or air transport facilities',
      //   '0425': 'Endangering traffic offences',
      //   '05': 'Kidnapping and related offences',
      //   '0511': 'False imprisonment',
      //   '0512': 'Abduction of person under 16 years of age',
      //   '0513': 'Human trafficking offences',
      //   '06': 'Robbery, extortion and hijacking offences',
      //   '0611': 'Robbery of an establishment or institution',
      //   '0612': 'Robbery of cash or goods in transit',
      //   '0613': 'Robbery from the person',
      //   '0621': 'Blackmail or extortion',
      //   '0631': 'Carjacking, hijacking/unlawful seizure of aircraft/vessel',
      //   '07': 'Burglary and related offences',
      //   '0711': 'Aggravated burglary',
      //   '0712': 'Burglary (not aggravated)',
      //   '0713': 'Possession of an article (with intent to burgle, steal, demand)',
      //   '08': 'Theft and related offences',
      //   '081': 'Theft/taking of vehicle and related offences',
      //   '0821': 'Theft from person',
      //   '0822': 'Theft from shop',
      //   '084': 'Other thefts, handling stolen property',
      //   '09': 'Fraud, deception and related offences',
      //   '10': 'Controlled drug offences',
      //   '1011': 'Importation of drugs',
      //   '1012': 'Cultivation or manufacture of drugs',
      //   '1021': 'Possession of drugs for sale or supply',
      //   '1022': 'Possession of drugs for personal use',
      //   '103': 'Other drug offences',
      //   '11': 'Weapons and Explosives Offences',
      //   '111': 'Explosives, chemical weapons offences',
      //   '1121': 'Discharging a firearm',
      //   '1122': 'Possession of a firearm',
      //   '113': 'Offensive weapons offences (n.e.c.)',
      //   '114': 'Fireworks offences',
      //   '12': 'Damage to property and to the environment',
      //   '1211': 'Arson',
      //   '1212': 'Criminal damage (not arson)',
      //   '1221': 'Litter offences',
      //   '13': 'Public order and other social code offences',
      //   '131': 'Disorderly conduct',
      //   '132': 'Trespass offences',
      //   '133': 'Liquor licensing offences',
      //   '134': 'Prostitution offences',
      //   '135': 'Regulated betting/money, collection/trading offences',
      //   '136': 'Social code offences (n.e.c.)',
      //   '15': 'Offences against government, justice procedures and organisation of crime',
      //   '151': 'Offences against government and its agents',
      //   '152': 'Organisation of crime and conspiracy to commit crime',
      //   '153': 'Perverting the course of justice',
      //   '157': 'Offences while in custody, breach of court orders',
      // };
  
//       const formattedCrimeData = crimeData.map((value, index) => {
//         const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
//         const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//         return `${crimeTypeLabel}: ${value}`;
//       });
  
//       return formattedCrimeData.join('\n');
//     };
  
//     const generateApiUrl = (id1, id2, categoryIndex1, categoryIndex2) => {
//       const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//         "jsonrpc": "2.0",
//         "method": "PxStat.Data.Cube_API.ReadDataset",
//         "params": {
//           "class": "query",
//           "id": [id1, id2],
//           "dimension": {
//             [id1]: {
//               "category": {
//                 "index": [categoryIndex1]
//               }
//             },
//             [id2]: {
//               "category": {
//                 "index": [categoryIndex2]
//               }
//             }
//           },
//           "extension": {
//             "pivot": null,
//             "codes": true,
//             "language": {
//               "code": "en"
//             },
//             "format": {
//               "type": "JSON-stat",
//               "version": "2.0"
//             },
//             "matrix": "CJQ06"
//           },
//           "version": "2.0"
//         }
//       }))}`;
  
//       return apiUrl;
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Garda station name"
//           value={gardaStationInput}
//           onChange={(e) => setGardaStationInput(e.target.value)}
//         />
//         <h2>Crimes Commited 2023 Statistics:</h2>
//         <pre>{formatCrimeData()}</pre>
//       </div>
//     );
//   }

// export default Crime;
























// import React, { useState, useEffect } from 'react';

//   function Crime( {searchTerm} ) {
//     const [data, setData] = useState(null);
//     // const [gardaStationInput, setGardaStationInput] = useState("Cavan"); // Default to "Cavan"
  
//     // Mapping object for Garda station names and numbers
//     const gardaStationMapping = {
//       "cavan": "11",
//       "monaghan" : 11,
//       "donegal": "12",
//       "sligo": "13",
//       "leitrim": "13",
//       "louth": "14",
//       "clare": "21",
//       "mayo": "22",
//       "galway": "23",
//       "roscommon": "24",
//       "longford": "24",
//       "cork": "31",
//       "cork City": "31",
//       "cork North": "32",
//       "cork West": "33",
//       "kerry": "34",
//       "limerick": "35",
//       "laois": "41",
//       "offaly": "41",
//       "meath": "42",
//       "wicklow": "43",
//       "westmeath": "44",
//       "kildare": "45",
//       "tipperary": "51",
//       "wexford": "52",
//       "carlow": "53",
//       "kilkenny": "53",
//       "waterford": "54",
//       "dublin": "62",
//       "D.M.R. South Central": "61",
//       "D.M.R. North Central": "62",
//       "D.M.R. Northern": "63",
//       "D.M.R. Southern": "64",
//       "D.M.R. Eastern": "65",
//       "D.M.R. Western": "66"
//     };
  
//     useEffect(() => {
//       const gardaStationNumber = gardaStationMapping[searchTerm];
//       if (!gardaStationNumber) {
//         // Handle the case when searchTerm doesn't match any Garda station
//         console.error(`Garda station not found for searchTerm: ${searchTerm}`);
//         return;
//       }


//       // const gardaStationNumber = gardaStationMapping[searchTerm];
      
//       const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then(json => setData(json))
//         .catch(error => console.error(error));
//     }, [searchTerm]);
  
//     const formatCrimeData = () => {
//       if (!data) return <h2>Crime Data</h2>;
  
//       const crimeData = data.result.value;
  
//       const crimeTypeLabels = {
//         '01': 'Homicide Offences',
//         '0111': 'Murder',
//         '0112': 'Manslaughter',
//         '0113': 'Infanticide',
//         '012': 'Dangerous driving leading to death',
//         '02': 'Sexual offences',
//         '021': 'Rape and sexual assault',
//         '022': 'Other sexual offences',
//         '03' : 'Attempts/threats to murder, assaults, harassments and related offences',
//         '0311': 'Murder-attempt',
//         '0313': 'Threat to kill or cause serious harm',
//         '033': 'Harassment and related offences',
//         '034': 'Assault causing harm, poisoning',
//         '035': 'Other assault',
//         '04': 'Dangerous or negligent acts',
//         '0411': 'Dangerous driving causing serious bodily harm',
//         '0412': 'Driving/in charge of a vehicle while over legal alcohol limit',
//         '0413': 'Driving/in charge of a vehicle under the influence of drugs',
//         '0421': 'Endangerment with potential for serious harm/death',
//         '0422': 'Abandoning a child, child neglect and cruelty',
//         '0423': 'Unseaworthy/dangerous use of boat or ship',
//         '0424': 'False alarm/interference with aircraft or air transport facilities',
//         '0425': 'Endangering traffic offences',
//         '05': 'Kidnapping and related offences',
//         '0511': 'False imprisonment',
//         '0512': 'Abduction of person under 16 years of age',
//         '0513': 'Human trafficking offences',
//         '06': 'Robbery, extortion and hijacking offences',
//         '0611': 'Robbery of an establishment or institution',
//         '0612': 'Robbery of cash or goods in transit',
//         '0613': 'Robbery from the person',
//         '0621': 'Blackmail or extortion',
//         '0631': 'Carjacking, hijacking/unlawful seizure of aircraft/vessel',
//         '07': 'Burglary and related offences',
//         '0711': 'Aggravated burglary',
//         '0712': 'Burglary (not aggravated)',
//         '0713': 'Possession of an article (with intent to burgle, steal, demand)',
//         '08': 'Theft and related offences',
//         '081': 'Theft/taking of vehicle and related offences',
//         '0821': 'Theft from person',
//         '0822': 'Theft from shop',
//         '084': 'Other thefts, handling stolen property',
//         '09': 'Fraud, deception and related offences',
//         '10': 'Controlled drug offences',
//         '1011': 'Importation of drugs',
//         '1012': 'Cultivation or manufacture of drugs',
//         '1021': 'Possession of drugs for sale or supply',
//         '1022': 'Possession of drugs for personal use',
//         '103': 'Other drug offences',
//         '11': 'Weapons and Explosives Offences',
//         '111': 'Explosives, chemical weapons offences',
//         '1121': 'Discharging a firearm',
//         '1122': 'Possession of a firearm',
//         '113': 'Offensive weapons offences (n.e.c.)',
//         '114': 'Fireworks offences',
//         '12': 'Damage to property and to the environment',
//         '1211': 'Arson',
//         '1212': 'Criminal damage (not arson)',
//         '1221': 'Litter offences',
//         '13': 'Public order and other social code offences',
//         '131': 'Disorderly conduct',
//         '132': 'Trespass offences',
//         '133': 'Liquor licensing offences',
//         '134': 'Prostitution offences',
//         '135': 'Regulated betting/money, collection/trading offences',
//         '136': 'Social code offences (n.e.c.)',
//         '15': 'Offences against government, justice procedures and organisation of crime',
//         '151': 'Offences against government and its agents',
//         '152': 'Organisation of crime and conspiracy to commit crime',
//         '153': 'Perverting the course of justice',
//         '157': 'Offences while in custody, breach of court orders',
//       };
  
//       const formattedCrimeData = crimeData.map((value, index) => {
//         const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
//         const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//         return `${crimeTypeLabel}: ${value}`;
//       });
  
//       return formattedCrimeData.join('\n');
//     };
  
//     const generateApiUrl = (id1, id2, categoryIndex1, categoryIndex2) => {
//       const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//         "jsonrpc": "2.0",
//         "method": "PxStat.Data.Cube_API.ReadDataset",
//         "params": {
//           "class": "query",
//           "id": [id1, id2],
//           "dimension": {
//             [id1]: {
//               "category": {
//                 "index": [categoryIndex1]
//               }
//             },
//             [id2]: {
//               "category": {
//                 "index": [categoryIndex2]
//               }
//             }
//           },
//           "extension": {
//             "pivot": null,
//             "codes": true,
//             "language": {
//               "code": "en"
//             },
//             "format": {
//               "type": "JSON-stat",
//               "version": "2.0"
//             },
//             "matrix": "CJQ06"
//           },
//           "version": "2.0"
//         }
//       }))}`;
  
//       return apiUrl;
//     };
  
//     return (
//       <div>
//         <pre>{formatCrimeData()}</pre>
//       </div>
//     );
//   }
  
// export default Crime;









// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';

//   function Crime( {searchTerm} ) {
//     const [data, setData] = useState(null);
//     // const [gardaStationInput, setGardaStationInput] = useState("Cavan"); // Default to "Cavan"
  
//     // Mapping object for Garda station names and numbers
//     const gardaStationMapping = {
//       "cavan": "11",
//       "monaghan" : 11,
//       "donegal": "12",
//       "sligo": "13",
//       "leitrim": "13",
//       "louth": "14",
//       "clare": "21",
//       "mayo": "22",
//       "galway": "23",
//       "roscommon": "24",
//       "longford": "24",
//       "cork": "31",
//       "cork City": "31",
//       "cork North": "32",
//       "cork West": "33",
//       "kerry": "34",
//       "limerick": "35",
//       "laois": "41",
//       "offaly": "41",
//       "meath": "42",
//       "wicklow": "43",
//       "westmeath": "44",
//       "kildare": "45",
//       "tipperary": "51",
//       "wexford": "52",
//       "carlow": "53",
//       "kilkenny": "53",
//       "waterford": "54",
//       "dublin": "62",
//       "D.M.R. South Central": "61",
//       "D.M.R. North Central": "62",
//       "D.M.R. Northern": "63",
//       "D.M.R. Southern": "64",
//       "D.M.R. Eastern": "65",
//       "D.M.R. Western": "66"
//     };
  
//     useEffect(() => {
//       const gardaStationNumber = gardaStationMapping[searchTerm];
//       if (!gardaStationNumber) {
//         // Handle the case when searchTerm doesn't match any Garda station
//         console.error(`Garda station not found for searchTerm: ${searchTerm}`);
//         return;
//       }


//       // const gardaStationNumber = gardaStationMapping[searchTerm];
      
//       const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then(json => setData(json))
//         .catch(error => console.error(error));
//     }, [searchTerm]);
  
//     const formatCrimeData = () => {
//       if (!data) return <h2>Crime Data</h2>;
  
//       const crimeData = data.result.value;
  
//       const crimeTypeLabels = {
//         '01': 'Homicide Offences',
//         '0111': 'Murder',
//         '0112': 'Manslaughter',
//         '0113': 'Infanticide',
//         '012': 'Dangerous driving leading to death',
//         '02': 'Sexual offences',
//         '021': 'Rape and sexual assault',
//         '022': 'Other sexual offences',
//         '03' : 'Attempts/threats to murder, assaults, harassments and related offences',
//         '0311': 'Murder-attempt',
//         '0313': 'Threat to kill or cause serious harm',
//         '033': 'Harassment and related offences',
//         '034': 'Assault causing harm, poisoning',
//         '035': 'Other assault',
//         '04': 'Dangerous or negligent acts',
//         '0411': 'Dangerous driving causing serious bodily harm',
//         '0412': 'Driving/in charge of a vehicle while over legal alcohol limit',
//         '0413': 'Driving/in charge of a vehicle under the influence of drugs',
//         '0421': 'Endangerment with potential for serious harm/death',
//         '0422': 'Abandoning a child, child neglect and cruelty',
//         '0423': 'Unseaworthy/dangerous use of boat or ship',
//         '0424': 'False alarm/interference with aircraft or air transport facilities',
//         '0425': 'Endangering traffic offences',
//         '05': 'Kidnapping and related offences',
//         '0511': 'False imprisonment',
//         '0512': 'Abduction of person under 16 years of age',
//         '0513': 'Human trafficking offences',
//         '06': 'Robbery, extortion and hijacking offences',
//         '0611': 'Robbery of an establishment or institution',
//         '0612': 'Robbery of cash or goods in transit',
//         '0613': 'Robbery from the person',
//         '0621': 'Blackmail or extortion',
//         '0631': 'Carjacking, hijacking/unlawful seizure of aircraft/vessel',
//         '07': 'Burglary and related offences',
//         '0711': 'Aggravated burglary',
//         '0712': 'Burglary (not aggravated)',
//         '0713': 'Possession of an article (with intent to burgle, steal, demand)',
//         '08': 'Theft and related offences',
//         '081': 'Theft/taking of vehicle and related offences',
//         '0821': 'Theft from person',
//         '0822': 'Theft from shop',
//         '084': 'Other thefts, handling stolen property',
//         '09': 'Fraud, deception and related offences',
//         '10': 'Controlled drug offences',
//         '1011': 'Importation of drugs',
//         '1012': 'Cultivation or manufacture of drugs',
//         '1021': 'Possession of drugs for sale or supply',
//         '1022': 'Possession of drugs for personal use',
//         '103': 'Other drug offences',
//         '11': 'Weapons and Explosives Offences',
//         '111': 'Explosives, chemical weapons offences',
//         '1121': 'Discharging a firearm',
//         '1122': 'Possession of a firearm',
//         '113': 'Offensive weapons offences (n.e.c.)',
//         '114': 'Fireworks offences',
//         '12': 'Damage to property and to the environment',
//         '1211': 'Arson',
//         '1212': 'Criminal damage (not arson)',
//         '1221': 'Litter offences',
//         '13': 'Public order and other social code offences',
//         '131': 'Disorderly conduct',
//         '132': 'Trespass offences',
//         '133': 'Liquor licensing offences',
//         '134': 'Prostitution offences',
//         '135': 'Regulated betting/money, collection/trading offences',
//         '136': 'Social code offences (n.e.c.)',
//         '15': 'Offences against government, justice procedures and organisation of crime',
//         '151': 'Offences against government and its agents',
//         '152': 'Organisation of crime and conspiracy to commit crime',
//         '153': 'Perverting the course of justice',
//         '157': 'Offences while in custody, breach of court orders',
//       };
  
//       const formattedCrimeData = crimeData.map((value, index) => {
//         const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
//         const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//         return `${crimeTypeLabel}: ${value}`;
//       });
  
//       return formattedCrimeData.join('\n');
//     };
  
//     const generateApiUrl = (id1, id2, categoryIndex1, categoryIndex2) => {
//       const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//         "jsonrpc": "2.0",
//         "method": "PxStat.Data.Cube_API.ReadDataset",
//         "params": {
//           "class": "query",
//           "id": [id1, id2],
//           "dimension": {
//             [id1]: {
//               "category": {
//                 "index": [categoryIndex1]
//               }
//             },
//             [id2]: {
//               "category": {
//                 "index": [categoryIndex2]
//               }
//             }
//           },
//           "extension": {
//             "pivot": null,
//             "codes": true,
//             "language": {
//               "code": "en"
//             },
//             "format": {
//               "type": "JSON-stat",
//               "version": "2.0"
//             },
//             "matrix": "CJQ06"
//           },
//           "version": "2.0"
//         }
//       }))}`;
  
//       return apiUrl;
//     };
    
    
//     const getChartData = () => {
//       if (!data) return null;
  
//       const crimeData = data.result.value;
//       const crimeTypeLabels = Object.keys(data.result.dimension['C02480V03003'].category.label);
  
//       const chartData = {
//         labels: crimeTypeLabels.map((code) => crimeTypeLabels[code]),
//         datasets: [
//           {
//             label: 'Number of Crimes',
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderWidth: 1,
//             data: crimeData,
//           },
//         ],
//       };
  
//       return chartData;
//     };
  
//     return (
//       <div>
//         <pre>{formatCrimeData()}</pre>
//         {data && (
//           <div>
//             <h2>Crime Chart</h2>
//             <Bar data={getChartData()} />
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default Crime;








// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';

//   function Crime( {searchTerm} ) {
//     const [data, setData] = useState(null);

  
//     // Mapping object for Garda station names and numbers
//     const gardaStationMapping = {
//       "cavan": "11",
//       "monaghan" : 11,
//       "donegal": "12",
//       "sligo": "13",
//       "leitrim": "13",
//       "louth": "14",
//       "clare": "21",
//       "mayo": "22",
//       "galway": "23",
//       "roscommon": "24",
//       "longford": "24",
//       "cork": "31",
//       "cork City": "31",
//       "cork North": "32",
//       "cork West": "33",
//       "kerry": "34",
//       "limerick": "35",
//       "laois": "41",
//       "offaly": "41",
//       "meath": "42",
//       "wicklow": "43",
//       "westmeath": "44",
//       "kildare": "45",
//       "tipperary": "51",
//       "wexford": "52",
//       "carlow": "53",
//       "kilkenny": "53",
//       "waterford": "54",
//       "dublin": "62",
//       "D.M.R. South Central": "61",
//       "D.M.R. North Central": "62",
//       "D.M.R. Northern": "63",
//       "D.M.R. Southern": "64",
//       "D.M.R. Eastern": "65",
//       "D.M.R. Western": "66"
//     };
  
//     useEffect(() => {
//       const gardaStationNumber = gardaStationMapping[searchTerm];
//     if (!gardaStationNumber) {
//       console.error(`Garda station not found for searchTerm: ${searchTerm}`);
//       return;
//     }


//       const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then(json => setData(json))
//         .catch(error => console.error(error));
//     }, [searchTerm]);
  
//     const formatCrimeData = () => {
//       if (!data) return <h2>Crime Data</h2>;
  
//       const crimeData = data.result.value;
  
//       const crimeTypeLabels = {
//         '01': 'Homicide Offences',
//         '0111': 'Murder',
//         '0112': 'Manslaughter',
//         '0113': 'Infanticide',
//         '012': 'Dangerous driving leading to death',
//         '02': 'Sexual offences',
//         '021': 'Rape and sexual assault',
//         '022': 'Other sexual offences',
//         '03' : 'Attempts/threats to murder, assaults, harassments and related offences',
//         '0311': 'Murder-attempt',
//         '0313': 'Threat to kill or cause serious harm',
//         '033': 'Harassment and related offences',
//         '034': 'Assault causing harm, poisoning',
//         '035': 'Other assault',
//         '04': 'Dangerous or negligent acts',
//         '0411': 'Dangerous driving causing serious bodily harm',
//         '0412': 'Driving/in charge of a vehicle while over legal alcohol limit',
//         '0413': 'Driving/in charge of a vehicle under the influence of drugs',
//         '0421': 'Endangerment with potential for serious harm/death',
//         '0422': 'Abandoning a child, child neglect and cruelty',
//         '0423': 'Unseaworthy/dangerous use of boat or ship',
//         '0424': 'False alarm/interference with aircraft or air transport facilities',
//         '0425': 'Endangering traffic offences',
//         '05': 'Kidnapping and related offences',
//         '0511': 'False imprisonment',
//         '0512': 'Abduction of person under 16 years of age',
//         '0513': 'Human trafficking offences',
//         '06': 'Robbery, extortion and hijacking offences',
//         '0611': 'Robbery of an establishment or institution',
//         '0612': 'Robbery of cash or goods in transit',
//         '0613': 'Robbery from the person',
//         '0621': 'Blackmail or extortion',
//         '0631': 'Carjacking, hijacking/unlawful seizure of aircraft/vessel',
//         '07': 'Burglary and related offences',
//         '0711': 'Aggravated burglary',
//         '0712': 'Burglary (not aggravated)',
//         '0713': 'Possession of an article (with intent to burgle, steal, demand)',
//         '08': 'Theft and related offences',
//         '081': 'Theft/taking of vehicle and related offences',
//         '0821': 'Theft from person',
//         '0822': 'Theft from shop',
//         '084': 'Other thefts, handling stolen property',
//         '09': 'Fraud, deception and related offences',
//         '10': 'Controlled drug offences',
//         '1011': 'Importation of drugs',
//         '1012': 'Cultivation or manufacture of drugs',
//         '1021': 'Possession of drugs for sale or supply',
//         '1022': 'Possession of drugs for personal use',
//         '103': 'Other drug offences',
//         '11': 'Weapons and Explosives Offences',
//         '111': 'Explosives, chemical weapons offences',
//         '1121': 'Discharging a firearm',
//         '1122': 'Possession of a firearm',
//         '113': 'Offensive weapons offences (n.e.c.)',
//         '114': 'Fireworks offences',
//         '12': 'Damage to property and to the environment',
//         '1211': 'Arson',
//         '1212': 'Criminal damage (not arson)',
//         '1221': 'Litter offences',
//         '13': 'Public order and other social code offences',
//         '131': 'Disorderly conduct',
//         '132': 'Trespass offences',
//         '133': 'Liquor licensing offences',
//         '134': 'Prostitution offences',
//         '135': 'Regulated betting/money, collection/trading offences',
//         '136': 'Social code offences (n.e.c.)',
//         '15': 'Offences against government, justice procedures and organisation of crime',
//         '151': 'Offences against government and its agents',
//         '152': 'Organisation of crime and conspiracy to commit crime',
//         '153': 'Perverting the course of justice',
//         '157': 'Offences while in custody, breach of court orders',
//       };
  
//       const formattedCrimeData = crimeData.map((value, index) => {
//         const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
//         const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//         return `${crimeTypeLabel}: ${value}`;
//       });
  
//       return formattedCrimeData.join('\n');
//     };
  
//     const generateApiUrl = (id1, id2, categoryIndex1, categoryIndex2) => {
//       const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//         "jsonrpc": "2.0",
//         "method": "PxStat.Data.Cube_API.ReadDataset",
//         "params": {
//           "class": "query",
//           "id": [id1, id2],
//           "dimension": {
//             [id1]: {
//               "category": {
//                 "index": [categoryIndex1]
//               }
//             },
//             [id2]: {
//               "category": {
//                 "index": [categoryIndex2]
//               }
//             }
//           },
//           "extension": {
//             "pivot": null,
//             "codes": true,
//             "language": {
//               "code": "en"
//             },
//             "format": {
//               "type": "JSON-stat",
//               "version": "2.0"
//             },
//             "matrix": "CJQ06"
//           },
//           "version": "2.0"
//         }
//       }))}`;
  
//       return apiUrl;
//     };
    
    
//     const getChartData = () => {
//       if (!data) return null;
  
//       const crimeData = data.result.value;
//       const crimeTypeLabels = Object.keys(data.result.dimension['C02480V03003'].category.label);
  
//       const chartData = {
//         labels: crimeTypeLabels.map((code) => crimeTypeLabels[code]),
//         datasets: [
//           {
//             label: 'Number of Crimes',
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderWidth: 1,
//             data: crimeData,
//           },
//         ],
//       };
  
//       return chartData;
//     };
  
//     return (
//       <div>
//         <pre>{formatCrimeData()}</pre>
//         {data && (
//           <div>
//             <h2>Crime Chart</h2>
//             <Bar data={getChartData()} />
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default Crime;





// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';

//   function Crime( {searchTerm} ) {
//     const [data, setData] = useState(null);
//     let myChart = null;
  
//     // Mapping object for Garda station names and numbers
//     const gardaStationMapping = {
//       "cavan": "11",
//       "monaghan" : 11,
//       "donegal": "12",
//       "sligo": "13",
//       "leitrim": "13",
//       "louth": "14",
//       "clare": "21",
//       "mayo": "22",
//       "galway": "23",
//       "roscommon": "24",
//       "longford": "24",
//       "cork": "31",
//       "cork City": "31",
//       "cork North": "32",
//       "cork West": "33",
//       "kerry": "34",
//       "limerick": "35",
//       "laois": "41",
//       "offaly": "41",
//       "meath": "42",
//       "wicklow": "43",
//       "westmeath": "44",
//       "kildare": "45",
//       "tipperary": "51",
//       "wexford": "52",
//       "carlow": "53",
//       "kilkenny": "53",
//       "waterford": "54",
//       "dublin": "62",
//       "D.M.R. South Central": "61",
//       "D.M.R. North Central": "62",
//       "D.M.R. Northern": "63",
//       "D.M.R. Southern": "64",
//       "D.M.R. Eastern": "65",
//       "D.M.R. Western": "66"
//     };
  
//     useEffect(() => {
//       const gardaStationNumber = gardaStationMapping[searchTerm];
//       if (!gardaStationNumber) {
//         // Handle the case when searchTerm doesn't match any Garda station
//         console.error(`Garda station not found for searchTerm: ${searchTerm}`);
//         return;
//       }
 
//       const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then(json => setData(json))
//         .catch(error => console.error(error));
      
//       return () => {
//           // Cleanup and destroy the chart when the component unmounts
//         if (myChart) {
//           myChart.destroy();
//         }
//       };
//     }, [searchTerm]);
  
//     const formatCrimeData = () => {
//       if (!data || !data.result || !data.result.value) return [];
    
//       const crimeData = data.result.value;
    
//       const crimeTypeLabels = {
//         '01': 'Homicide Offences',
//         '0111': 'Murder',
//         '0112': 'Manslaughter',
//         '0113': 'Infanticide',
//         '012': 'Dangerous driving leading to death',
//         '02': 'Sexual offences',
//         '021': 'Rape and sexual assault',
//         '022': 'Other sexual offences',
//         '03' : 'Attempts/threats to murder, assaults, harassments and related offences',
//         '0311': 'Murder-attempt',
//         '0313': 'Threat to kill or cause serious harm',
//         '033': 'Harassment and related offences',
//         '034': 'Assault causing harm, poisoning',
//         '035': 'Other assault',
//         '04': 'Dangerous or negligent acts',
//         '0411': 'Dangerous driving causing serious bodily harm',
//         '0412': 'Driving/in charge of a vehicle while over legal alcohol limit',
//         '0413': 'Driving/in charge of a vehicle under the influence of drugs',
//         '0421': 'Endangerment with potential for serious harm/death',
//         '0422': 'Abandoning a child, child neglect and cruelty',
//         '0423': 'Unseaworthy/dangerous use of boat or ship',
//         '0424': 'False alarm/interference with aircraft or air transport facilities',
//         '0425': 'Endangering traffic offences',
//         '05': 'Kidnapping and related offences',
//         '0511': 'False imprisonment',
//         '0512': 'Abduction of person under 16 years of age',
//         '0513': 'Human trafficking offences',
//         '06': 'Robbery, extortion and hijacking offences',
//         '0611': 'Robbery of an establishment or institution',
//         '0612': 'Robbery of cash or goods in transit',
//         '0613': 'Robbery from the person',
//         '0621': 'Blackmail or extortion',
//         '0631': 'Carjacking, hijacking/unlawful seizure of aircraft/vessel',
//         '07': 'Burglary and related offences',
//         '0711': 'Aggravated burglary',
//         '0712': 'Burglary (not aggravated)',
//         '0713': 'Possession of an article (with intent to burgle, steal, demand)',
//         '08': 'Theft and related offences',
//         '081': 'Theft/taking of vehicle and related offences',
//         '0821': 'Theft from person',
//         '0822': 'Theft from shop',
//         '084': 'Other thefts, handling stolen property',
//         '09': 'Fraud, deception and related offences',
//         '10': 'Controlled drug offences',
//         '1011': 'Importation of drugs',
//         '1012': 'Cultivation or manufacture of drugs',
//         '1021': 'Possession of drugs for sale or supply',
//         '1022': 'Possession of drugs for personal use',
//         '103': 'Other drug offences',
//         '11': 'Weapons and Explosives Offences',
//         '111': 'Explosives, chemical weapons offences',
//         '1121': 'Discharging a firearm',
//         '1122': 'Possession of a firearm',
//         '113': 'Offensive weapons offences (n.e.c.)',
//         '114': 'Fireworks offences',
//         '12': 'Damage to property and to the environment',
//         '1211': 'Arson',
//         '1212': 'Criminal damage (not arson)',
//         '1221': 'Litter offences',
//         '13': 'Public order and other social code offences',
//         '131': 'Disorderly conduct',
//         '132': 'Trespass offences',
//         '133': 'Liquor licensing offences',
//         '134': 'Prostitution offences',
//         '135': 'Regulated betting/money, collection/trading offences',
//         '136': 'Social code offences (n.e.c.)',
//         '15': 'Offences against government, justice procedures and organisation of crime',
//         '151': 'Offences against government and its agents',
//         '152': 'Organisation of crime and conspiracy to commit crime',
//         '153': 'Perverting the course of justice',
//         '157': 'Offences while in custody, breach of court orders',
//       };
    
//       const formattedCrimeData = crimeData.map((value, index) => {
//         const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
//         const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//         return { label: crimeTypeLabel, value };
//       });
    
//       return formattedCrimeData;
//     };
  
      
  
  
//     const generateApiUrl = (id1, id2, categoryIndex1, categoryIndex2) => {
//       const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
//         "jsonrpc": "2.0",
//         "method": "PxStat.Data.Cube_API.ReadDataset",
//         "params": {
//           "class": "query",
//           "id": [id1, id2],
//           "dimension": {
//             [id1]: {
//               "category": {
//                 "index": [categoryIndex1]
//               }
//             },
//             [id2]: {
//               "category": {
//                 "index": [categoryIndex2]
//               }
//             }
//           },
//           "extension": {
//             "pivot": null,
//             "codes": true,
//             "language": {
//               "code": "en"
//             },
//             "format": {
//               "type": "JSON-stat",
//               "version": "2.0"
//             },
//             "matrix": "CJQ06"
//           },
//           "version": "2.0"
//         }
//       }))}`;
  
//       return apiUrl;
//     };


//     const getChartData = () => {
//       if (!data) return null;
  
//       const chartData = {
//         labels: formatCrimeData().map((crime) => crime.label),
//         datasets: [
//           {
//             label: 'Number of Crimes',
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderWidth: 1,
//             data: formatCrimeData().map((crime) => crime.value),
//           },
//         ],
//       };
  
//       // If the chart has already been created, update the data
//       if (myChart) {
//         myChart.data = chartData;
//         myChart.update();
//       }
  
//       return chartData;
//     };
  
//     return (
//       <div>
//         <pre>{formatCrimeData().map((crime) => `${crime.label}: ${crime.value}`).join('\n')}</pre>
//         {data && (
//           <div>
//             <h2>Crime Chart</h2>
//             <Bar data={getChartData()} options={{ responsive: true }} ref={(ref) => (myChart = ref)} />
//           </div>
//         )}
//       </div>
//     );
//   }
  
// export default Crime;









import React, { useState, useEffect } from 'react';

  function Crime( {searchTerm} ) {
    const [data, setData] = useState(null);
    // const [gardaStationInput, setGardaStationInput] = useState("Cavan"); // Default to "Cavan"
  
    // Mapping object for Garda station names and numbers
    const gardaStationMapping = {
      "cavan": "11",
      "monaghan" : 11,
      "donegal": "12",
      "sligo": "13",
      "leitrim": "13",
      "louth": "14",
      "clare": "21",
      "mayo": "22",
      "galway": "23",
      "roscommon": "24",
      "longford": "24",
      "cork": "31",
      "cork City": "31",
      "cork North": "32",
      "cork West": "33",
      "kerry": "34",
      "limerick": "35",
      "laois": "41",
      "offaly": "41",
      "meath": "42",
      "wicklow": "43",
      "westmeath": "44",
      "kildare": "45",
      "tipperary": "51",
      "wexford": "52",
      "carlow": "53",
      "kilkenny": "53",
      "waterford": "54",
      "dublin": "62",
      "D.M.R. South Central": "61",
      "D.M.R. North Central": "62",
      "D.M.R. Northern": "63",
      "D.M.R. Southern": "64",
      "D.M.R. Eastern": "65",
      "D.M.R. Western": "66"
    };
  
    useEffect(() => {
      const gardaStationNumber = gardaStationMapping[searchTerm];
      if (!gardaStationNumber) {
        // Handle the case when searchTerm doesn't match any Garda station
        console.error(`Garda station not found for searchTerm: ${searchTerm}`);
        return;
      }


      // const gardaStationNumber = gardaStationMapping[searchTerm];
      
      const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, [searchTerm]);
  
    const formatCrimeData = () => {
      if (!data) return <h2>Crime Data</h2>;
  
      const crimeData = data.result.value;
  
      const crimeTypeLabels = {
        '01': 'Homicide Offences',
        '0111': 'Murder',
        '0112': 'Manslaughter',
        '0113': 'Infanticide',
        '012': 'Dangerous driving leading to death',
        '02': 'Sexual offences',
        '021': 'Rape and sexual assault',
        '022': 'Other sexual offences',
        '03' : 'Attempts/threats to murder, assaults, harassments and related offences',
        '0311': 'Murder-attempt',
        '0313': 'Threat to kill or cause serious harm',
        '033': 'Harassment and related offences',
        '034': 'Assault causing harm, poisoning',
        '035': 'Other assault',
        '04': 'Dangerous or negligent acts',
        '0411': 'Dangerous driving causing serious bodily harm',
        '0412': 'Driving/in charge of a vehicle while over legal alcohol limit',
        '0413': 'Driving/in charge of a vehicle under the influence of drugs',
        '0421': 'Endangerment with potential for serious harm/death',
        '0422': 'Abandoning a child, child neglect and cruelty',
        '0423': 'Unseaworthy/dangerous use of boat or ship',
        '0424': 'False alarm/interference with aircraft or air transport facilities',
        '0425': 'Endangering traffic offences',
        '05': 'Kidnapping and related offences',
        '0511': 'False imprisonment',
        '0512': 'Abduction of person under 16 years of age',
        '0513': 'Human trafficking offences',
        '06': 'Robbery, extortion and hijacking offences',
        '0611': 'Robbery of an establishment or institution',
        '0612': 'Robbery of cash or goods in transit',
        '0613': 'Robbery from the person',
        '0621': 'Blackmail or extortion',
        '0631': 'Carjacking, hijacking/unlawful seizure of aircraft/vessel',
        '07': 'Burglary and related offences',
        '0711': 'Aggravated burglary',
        '0712': 'Burglary (not aggravated)',
        '0713': 'Possession of an article (with intent to burgle, steal, demand)',
        '08': 'Theft and related offences',
        '081': 'Theft/taking of vehicle and related offences',
        '0821': 'Theft from person',
        '0822': 'Theft from shop',
        '084': 'Other thefts, handling stolen property',
        '09': 'Fraud, deception and related offences',
        '10': 'Controlled drug offences',
        '1011': 'Importation of drugs',
        '1012': 'Cultivation or manufacture of drugs',
        '1021': 'Possession of drugs for sale or supply',
        '1022': 'Possession of drugs for personal use',
        '103': 'Other drug offences',
        '11': 'Weapons and Explosives Offences',
        '111': 'Explosives, chemical weapons offences',
        '1121': 'Discharging a firearm',
        '1122': 'Possession of a firearm',
        '113': 'Offensive weapons offences (n.e.c.)',
        '114': 'Fireworks offences',
        '12': 'Damage to property and to the environment',
        '1211': 'Arson',
        '1212': 'Criminal damage (not arson)',
        '1221': 'Litter offences',
        '13': 'Public order and other social code offences',
        '131': 'Disorderly conduct',
        '132': 'Trespass offences',
        '133': 'Liquor licensing offences',
        '134': 'Prostitution offences',
        '135': 'Regulated betting/money, collection/trading offences',
        '136': 'Social code offences (n.e.c.)',
        '15': 'Offences against government, justice procedures and organisation of crime',
        '151': 'Offences against government and its agents',
        '152': 'Organisation of crime and conspiracy to commit crime',
        '153': 'Perverting the course of justice',
        '157': 'Offences while in custody, breach of court orders',
      };
  
      const formattedCrimeData = crimeData.map((value, index) => {
        const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
        const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
        return `${crimeTypeLabel}: ${value}`;
      });
  
      return formattedCrimeData.join('\n');
    };
  
    const generateApiUrl = (id1, id2, categoryIndex1, categoryIndex2) => {
      const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
        "jsonrpc": "2.0",
        "method": "PxStat.Data.Cube_API.ReadDataset",
        "params": {
          "class": "query",
          "id": [id1, id2],
          "dimension": {
            [id1]: {
              "category": {
                "index": [categoryIndex1]
              }
            },
            [id2]: {
              "category": {
                "index": [categoryIndex2]
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
            "matrix": "CJQ06"
          },
          "version": "2.0"
        }
      }))}`;
  
      return apiUrl;
    };
  
    return (
      <div>
        <pre>{formatCrimeData()}</pre>
      </div>
    );
  }
  
export default Crime;




