// import React, { useState, useEffect } from 'react';

// function CrimeNav() {
//   const [data, setData] = useState(null);
//   const [gardaStationInput, setGardaStationInput] = useState("Cavan"); // Default to "Cavan"
  
//     // Mapping object for Garda station names and numbers
//   const gardaStationMapping = {
//       "Cavan": "11",
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
  
//       const crimeTypeLabels = {
//         '0111': 'Murder',
//         '0112': 'Manslaughter',
//         '0113': 'Infanticide',
//         '012': 'Dangerous driving leading to death',
//         '02': 'Sexual offences',
//         '021': 'Rape and sexual assault',
//         '022': 'Other sexual offences',
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
//         <input
//           type="text"
//           placeholder="Enter Garda station name"
//           value={gardaStationInput}
//           onChange={(e) => setGardaStationInput(e.target.value)}
//         />
//         <pre>{formatCrimeData()}</pre>
//       </div>
//     );
//   }
  
//   export default CrimeNav;









// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import Footer from './footer';

// function CrimeNav() {
//   const [data, setData] = useState(null);
//   const [gardaStationInput, setGardaStationInput] = useState("");
//   const [searchClicked, setSearchClicked] = useState(false);
  
//     // Mapping object for Garda station names and numbers
//   const gardaStationMapping = {
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
//       "cork city": "31",
//       "cork north": "32",
//       "cork west": "33",
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
//       "dublin" : "62",
//       "D.M.R. South Central": "61",
//       "D.M.R. North Central": "62",
//       "D.M.R. Northern": "63",
//       "D.M.R. Southern": "64",
//       "D.M.R. Eastern": "65",
//       "D.M.R. Western": "66"
//     };

//     const crimeTypeLabels = {
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
  
//     useEffect(() => {
//       const fetchCrimeData = async () => {
//         try {
//           let gardaStationNumber = gardaStationMapping[gardaStationInput.toLowerCase()];
  
//           if (!gardaStationNumber) {
//             const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
//               gardaStationInput
//             )}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
  
//             const geocodeResponse = await fetch(geocodeApiUrl);
//             const geocodeData = await geocodeResponse.json();
//             const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');
  
//             const countyGardaStationNumber = gardaStationMapping[county.toLowerCase()];
//             if (countyGardaStationNumber) {
//               gardaStationNumber = countyGardaStationNumber;
//             } else {
//               console.error(`Garda station not found for county: ${county}`);
//               return;
//             }
//           }
  
//           const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
//           const response = await fetch(apiUrl);
//           const jsonData = await response.json();
//           setData(jsonData);
//         } catch (error) {
//           console.error(`Error fetching crime data for gardaStationInput: ${gardaStationInput}`, error);
//         }
//       };
  
//       if (searchClicked && gardaStationInput) {
//         fetchCrimeData();
//       }
//     }, [gardaStationInput, searchClicked]);

//     const formatCrimeData = () => {
//       if (!data) return '';
    
//       const crimeData = data.result.value;
    
//       // Sort crime data by values from highest to lowest
//       const sortedCrimeData = crimeData.slice().sort((a, b) => b - a);
    
//       // Take only the top 10 crimes
//       const topCrimes = sortedCrimeData.slice(0, 10);
    
//       const formattedCrimeData = topCrimes.map((value, index) => {
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
    
//     const generateChartData = () => {
//       if (!data) return null;
    
//       const crimeData = data.result.value;
    
//       // Sort values from highest to lowest
//       const sortedCrimeData = crimeData.slice().sort((a, b) => b - a);
    
//       const labels = Object.keys(data.result.dimension['C02480V03003'].category.label).map((code) => crimeTypeLabels[code]);
//       const values = sortedCrimeData.map((value) => value);
      
//       return {
//         labels,
//     datasets: [
//       {
//         label: 'Number of Crimes',
//         data: values,
//         // Choose your preferred color options:
//         backgroundColor: [
//           'rgba(75,192,192,1.2)',
//           // 'rgba(255,99,132,0.2)', // Light red
//           // 'rgba(255,205,86,0.2)', // Light yellow
//           // 'rgba(54,162,235, )', // Light blue
//           // 'rgba(255,159,64,0.2)', // Light orange
//           // 'rgba(153,102,255,0.2)', // Light purple
//           // 'rgba(255,77,77,0.2)', // Light coral
//           // 'rgba(75,192,192,0.2)',
//           // 'rgba(255,99,132,0.2)',
//           // 'rgba(255,205,86,0.2)',
//         ],
//         borderColor: [
//           // 'rgba(75,192,192,1)',
//           // 'rgba(255,99,132,1)', // Solid red
//           // 'rgba(255,205,86,1)', // Solid yellow
//           'rgba(54,162,235,1)', // Solid blue
//           // 'rgba(255,159,64,1)', // Solid orange
//           // 'rgba(153,102,255,1)', // Solid purple
//           // 'rgba(255,77,77,1)', // Solid coral
//           // 'rgba(75,192,192,1)',
//           // 'rgba(255,99,132,1)',
//           // 'rgba(255,205,86,1)',
//         ],
//         borderWidth: 1,
//       },
//         // labels,
//         // datasets: [
//         //   {
//         //     label: 'Number of Crimes',
//         //     data: values,
//         //     backgroundColor: 'rgba(75,192,192,0.2)',
//         //     borderColor: 'rgba(79,192,192,1)',
//         //     borderWidth: 1,
//         //   },
//         ],
//       };
//     };
  
//     const handleSearchClick = () => {
//       setSearchClicked(true);
//     };

//     return (
//       <>
//         <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//           <div className="container mt-4 ">
//             <div className="mb-3"></div>
//             <label htmlFor="searchTerm" className="form-label">
//               Search by Locality or County:
//             </label>
//             <div className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={gardaStationInput}
//                 onChange={(e) => setGardaStationInput(e.target.value)}
//               />
//               <button onClick={handleSearchClick} className="btn btn-primary mb-2">
//                 Search
//               </button>
//             </div>
//           </div>
 
  
//         {searchClicked && !data && <p>Loading...</p>}
//         {data && (
//           <div className="result-container">
//             <h2 className="mb-3">Top 10 Crimes of the Area</h2>
//             <pre style={{ fontSize: '20px', lineHeight: '2.0' }}>{formatCrimeData()}</pre>
//             <div className="chart-container">
//               <Bar data={generateChartData()} options={{ maintainAspectRatio: false }} />
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//       </>
//     );
//   }
  
//   export default CrimeNav;





// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import Footer from './footer';

// function CrimeNav() {
//   const [data, setData] = useState(null);
//   const [gardaStationInput, setGardaStationInput] = useState("");
//   const [searchClicked, setSearchClicked] = useState(false);
//   const [showMore, setShowMore] = useState(false);

//     // Mapping object for Garda station names and numbers
//   const gardaStationMapping = {
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
//       "cork city": "31",
//       "cork north": "32",
//       "cork west": "33",
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
//       "dublin" : "62",
//       "D.M.R. South Central": "61",
//       "D.M.R. North Central": "62",
//       "D.M.R. Northern": "63",
//       "D.M.R. Southern": "64",
//       "D.M.R. Eastern": "65",
//       "D.M.R. Western": "66"
//     };

//     const crimeTypeLabels = {
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
  
//     useEffect(() => {
//       const fetchCrimeData = async () => {
//         try {
//           let gardaStationNumber = gardaStationMapping[gardaStationInput.toLowerCase()];
  
//           if (!gardaStationNumber) {
//             const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
//               gardaStationInput
//             )}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
  
//             const geocodeResponse = await fetch(geocodeApiUrl);
//             const geocodeData = await geocodeResponse.json();
//             const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');
  
//             const countyGardaStationNumber = gardaStationMapping[county.toLowerCase()];
//             if (countyGardaStationNumber) {
//               gardaStationNumber = countyGardaStationNumber;
//             } else {
//               console.error(`Garda station not found for county: ${county}`);
//               return;
//             }
//           }
  
//           const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);
  
//           const response = await fetch(apiUrl);
//           const jsonData = await response.json();
//           setData(jsonData);
//         } catch (error) {
//           console.error(`Error fetching crime data for gardaStationInput: ${gardaStationInput}`, error);
//         }
//       };
  
//       if (searchClicked && gardaStationInput) {
//         fetchCrimeData();
//       }
//     }, [gardaStationInput, searchClicked]);



//     const formatCrimeData = () => {
//       if (!data) return '';

//       const crimeData = data.result.value;
//       const sortedCrimeData = crimeData.slice().sort((a, b) => b - a);
//       const totalCrimes = crimeData.reduce((total, value) => total + value, 0);
//       const numberOfCrimesToDisplay = showMore ? sortedCrimeData.length : 10;
//       const crimesToDisplay = sortedCrimeData.slice(0, numberOfCrimesToDisplay);

//       const formattedCrimeData = crimesToDisplay.map((value, index) => {
//         const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
//         const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
//         const percentage = ((value / totalCrimes) * 100).toFixed(2);
//         return `${crimeTypeLabel}: ${value} (${percentage}% of the total crimes committed)`;
//       });

//       return formattedCrimeData.join('\n');
//     };

//     const handleShowMoreClick = () => {
//     setShowMore(!showMore);
//   };
  
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
    
//     const generateChartData = () => {
//       if (!data) return null;
    
//       const crimeData = data.result.value;
    
//       // Sort values from highest to lowest
//       const sortedCrimeData = crimeData.slice().sort((a, b) => b - a);
    
//       const labels = Object.keys(data.result.dimension['C02480V03003'].category.label).map((code) => crimeTypeLabels[code]);
//       const values = sortedCrimeData.map((value) => value);
      
//       return {
//         labels,
//     datasets: [
//       {
//         label: 'Number of Crimes',
//         data: values,
//         backgroundColor: 'rgba(75,192,192,1.2)',
//         borderColor: 'rgba(54,162,235,1)',
//         borderWidth: 3,
//       },
//         ],
//       };
//     };
  
//     const handleSearchClick = () => {
//       setSearchClicked(true);
//     };

//     return (
//       <>
//         <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//           <div className="container mt-4 ">
//             <div className="mb-3"></div>
//             <label htmlFor="searchTerm" className="form-label">
//               Search by Locality or County:
//             </label>
//             <div className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={gardaStationInput}
//                 onChange={(e) => setGardaStationInput(e.target.value)}
//               />
//               <button onClick={handleSearchClick} className="btn btn-primary mb-2">
//                 Search
//               </button>
//             </div>
//           </div>
 
  
//         {searchClicked && !data && <p>Loading...</p>}
//         {data && (
//           <div className="result-container">
//             <div style={{ display: 'flex' }}>
//               <div style={{ flex: 1 }}>
//                 <h2 className="mb-3">10 Most Frequent Crimes in {gardaStationInput} (2023)</h2>
//                 <pre style={{ fontSize: '20px', lineHeight: '2.0' }}>{formatCrimeData()}</pre>
//               </div>
//               <div>
//                 <button onClick={handleShowMoreClick} className="btn btn-primary mb-2">
//                   {showMore ? 'Show Less' : 'Show More'}
//                 </button>
//               </div>
//             </div>
//             <div className="chart-container" style={{ flexGrow: 1 }}>
//               <Bar data={generateChartData()} options={{ maintainAspectRatio: false }} />
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default CrimeNav;


import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Footer from './footer';

function CrimeNav() {
  const [data, setData] = useState(null);
  const [gardaStationInput, setGardaStationInput] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [showMore, setShowMore] = useState(false);

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
      "cork city": "31",
      "cork north": "32",
      "cork west": "33",
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
      "dublin" : "62",
      "D.M.R. South Central": "61",
      "D.M.R. North Central": "62",
      "D.M.R. Northern": "63",
      "D.M.R. Southern": "64",
      "D.M.R. Eastern": "65",
      "D.M.R. Western": "66"
    };

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
  
    useEffect(() => {
    const fetchCrimeData = async () => {
      try {
        let gardaStationNumber = gardaStationMapping[gardaStationInput.toLowerCase()];

        if (!gardaStationNumber) {
          const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
            gardaStationInput
          )}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const geocodeResponse = await fetch(geocodeApiUrl);
          const geocodeData = await geocodeResponse.json();
          const county = geocodeData.results[0]?.county.replace(/^County\s/i, '');

          const countyGardaStationNumber = gardaStationMapping[county.toLowerCase()];
          if (countyGardaStationNumber) {
            gardaStationNumber = countyGardaStationNumber;
          } else {
            console.error(`Garda station not found for county: ${county}`);
            return;
          }
        }

        const apiUrl = generateApiUrl("TLIST(Q1)", "C02481V03160", "20231", gardaStationNumber);

        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(`Error fetching crime data for gardaStationInput: ${gardaStationInput}`, error);
      }
    };

    if (searchClicked && gardaStationInput) {
      fetchCrimeData();
    }
  }, [gardaStationInput, searchClicked]);

  const formatCrimeData = () => {
    if (!data) return '';
  
    const crimeData = data.result.value;
    const sortedCrimeData = crimeData.slice().sort((a, b) => b - a);
    const totalCrimes = crimeData.reduce((total, value) => total + value, 0);
    const numberOfCrimesToDisplay = showMore ? sortedCrimeData.length : 10;
    const crimesToDisplay = sortedCrimeData.slice(0, numberOfCrimesToDisplay);
  
    let formattedCrimeData = `<div style="margin-top: 20px;">`;
    formattedCrimeData += `<h4>Total Crimes: ${totalCrimes}</h4>`;
    formattedCrimeData += `<table style="width: 90%; border-collapse: collapse; margin-top: 20px;">
                                <thead>
                                  <tr>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Crime</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Percentage out of Total Crimes</th>
                                  </tr>
                                </thead>
                                <tbody>`;
  
    formattedCrimeData += crimesToDisplay.map((value, index) => {
      const crimeTypeCode = Object.keys(data.result.dimension['C02480V03003'].category.label)[index];
      const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
      const percentage = ((value / totalCrimes) * 100).toFixed(2);
  
      return `<tr key=${index}>
                <td style="border: 1px solid #ddd; padding: 5px; text-align: left;">${crimeTypeLabel}</td>
                <td style="border: 1px solid #ddd; padding: 5px; text-align: left;">${value}</td>
                <td style="border: 1px solid #ddd; padding: 5px; text-align: left;">${percentage}%</td>
              </tr>`;
    }).join('');
  
    formattedCrimeData += `</tbody></table>`;
    formattedCrimeData += `</div>`;
    return formattedCrimeData;
  };

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
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

  const capitalSearchTerm = gardaStationInput.charAt(0).toUpperCase() + gardaStationInput.slice(1);

  const generateChartData = () => {
    if (!data) return null;

    const crimeData = data.result.value;

    const sortedCrimeData = crimeData.slice().sort((a, b) => b - a);

    const labels = Object.keys(data.result.dimension['C02480V03003'].category.label).map((code) => crimeTypeLabels[code]);
    const values = sortedCrimeData.map((value) => value);

    return {
      labels,
      datasets: [
        {
          label: 'Number of Crimes',
          data: values,
          backgroundColor: 'rgba(75,192,192,1.2)',
          borderColor: 'rgba(54,162,235,1)',
          borderWidth: 3,
        },
      ],
    };
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className="container mt-4 ">
          <div className="mb-3"></div>
          <label htmlFor="searchTerm" className="form-label">
            Search by Locality or County:
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={gardaStationInput}
              onChange={(e) => setGardaStationInput(e.target.value)}
            />
            <button onClick={handleSearchClick} className="btn btn-primary mb-2">
              Search
            </button>
          </div>
        </div>


      {searchClicked && !data && <p>Loading...</p>}
      {data && (
        <div className="container result-container">
          <div style={{ display: 'flex' }}></div>
          <div className="d-flex">
          <div style={{ flex: 1 }}>
            <h2 className="mb-3">10 Most Frequent Crimes in {capitalSearchTerm} (2023)</h2>
            <div dangerouslySetInnerHTML={{ __html: formatCrimeData() }} />
          </div>
            <div>
              <button
                onClick={handleShowMoreClick}
                className="btn btn-primary btn-lg"
                style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(54,162,235,1)'}
              >
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
          <br></br>
          <div className="chart-container" style={{ flexGrow: 1 }}>
            <Bar data={generateChartData()} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      )}
      </div>
    <Footer />
  </>
  );
}
export default CrimeNav;
