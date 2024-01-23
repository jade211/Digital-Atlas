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
//     // Fetch data from the API
//     fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
//       .then((response) => response.json())
//       .then((json) => setApiData(json))
//       .catch((error) => console.error(error));
//   }, []); // Empty dependency array to run the effect only once on mount

//   // Extracting specific data when API data is available
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















import React, { useState, useEffect } from 'react';

function Crime() {
  const [apiData, setApiData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error));
  }, []); 

  const values = apiData?.value;
  const gardaDivisionLabels = apiData?.dimension?.C02481V03160?.category?.label;
  const crimeTypeLabels = apiData?.dimension?.C02480V03003?.category?.label;
  const reportedCrimesByDivision = {};

  if (values && gardaDivisionLabels) {
    values.forEach((value, index) => {
      const quarter = apiData?.dimension?.["TLIST(Q1)"]?.category?.index[index];
      const divisionCode = apiData?.dimension?.C02481V03160?.category?.index[index];
      const divisionLabel = gardaDivisionLabels[divisionCode];
      const crimeTypeCode = apiData?.dimension?.C02480V03003?.category?.index[index];
      const crimeTypeLabel = crimeTypeLabels[crimeTypeCode];
      const crimeCount = value;

      if (!reportedCrimesByDivision[divisionLabel]) {
        reportedCrimesByDivision[divisionLabel] = {};
      }

      if (!reportedCrimesByDivision[divisionLabel][quarter]) {
        reportedCrimesByDivision[divisionLabel][quarter] = {};
      }

      if (!reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel]) {
        reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] = 0;
      }

      reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] = reportedCrimesByDivision[divisionLabel][quarter][crimeTypeLabel] + crimeCount;
    });
  }

  const filteredDivisions = Object.keys(reportedCrimesByDivision)
    .filter((divisionLabel) =>
      divisionLabel.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reduce((acc, divisionLabel) => {
      acc[divisionLabel] = reportedCrimesByDivision[divisionLabel];
      return acc;
    }, {});

  return (
    <div>
      <div>
        <label>
          Search by Garda Division:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <h2>Reported Crimes by Garda Division:</h2>
      <pre>{JSON.stringify(filteredDivisions, null, 2)}</pre>
    </div>
  );
}

export default Crime;