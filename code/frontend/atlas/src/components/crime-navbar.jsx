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









import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function CrimeNav() {
  const [data, setData] = useState(null);
  const [gardaStationInput, setGardaStationInput] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  
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
    
    const generateChartData = () => {
      if (!data) return null;
  
      const crimeData = data.result.value;
  
      const labels = Object.keys(data.result.dimension['C02480V03003'].category.label).map((code) => crimeTypeLabels[code]);
      const values = crimeData.map((value) => value);
  
      return {
        labels,
        datasets: [
          {
            label: 'Number of Crimes',
            data: values,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
    };
  
    const handleSearchClick = () => {
      setSearchClicked(true);
    };
  
  return (
    <div className="crime-container">
      <input
        type="text"
        placeholder="Enter Garda station name"
        value={gardaStationInput}
        onChange={(e) => setGardaStationInput(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
      {searchClicked && !data && <p>Loading...</p>}
      {data && (
        <div className="result-container">
          <pre>{formatCrimeData()}</pre>
          <div className="chart-container">
            <Bar data={generateChartData()} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      )}
    </div>
  );
}
  
export default CrimeNav;