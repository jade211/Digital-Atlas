// import React, { useState, useEffect } from 'react';

// function Schools() {
//   const [primaryData, setPrimaryData] = useState([]);
//   const [postPrimaryData, setPostPrimaryData] = useState([]);
//   const [specialData, setSpecialData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch('http://127.0.0.1:8000/primary/'),
//           fetch('http://127.0.0.1:8000/post_primary/'),
//           fetch('http://127.0.0.1:8000/special/')
//         ]);

//         const [primary, postPrimary, special] = await Promise.all(responses.map(response => response.json()));

//         setPrimaryData(primary);
//         setPostPrimaryData(postPrimary);
//         setSpecialData(special);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Schools</h1>
//       <h2>Primary Schools</h2>
//       <ul>
//         {primaryData.map((school) => (
//           <li key={school.id}>
//             <h3>{school.name}</h3>
//             <h3>{school.address}</h3>
//             <h3>county: {school.county_name}</h3>
//           </li>
//         ))}
//       </ul>

//       <h2>Post Primary Schools</h2>
//       <ul>
//         {postPrimaryData.map((school) => (
//           <li key={school.id}>
//             <h3>{school.name}</h3>
//             <h3>{school.address}</h3>
//             <h3>county: {school.county_name}</h3>

//           </li>
//         ))}
//       </ul>

//       <h2>Special Schools</h2>
//       <ul>
//         {specialData.map((school) => (
//           <li key={school.id}>
//             <h3>{school.name}</h3>
//             <h3>{school.address}</h3>
//             <h3>county: {school.county_name}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Schools;


import React, { useState, useEffect } from 'react';

function Schools() {
  const [primaryData, setPrimaryData] = useState([]);
  const [postPrimaryData, setPostPrimaryData] = useState([]);
  const [specialData, setSpecialData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('http://127.0.0.1:8000/primary/'),
          fetch('http://127.0.0.1:8000/post_primary/'),
          fetch('http://127.0.0.1:8000/special/')
        ]);

        const [primary, postPrimary, special] = await Promise.all(responses.map(response => response.json()));

        setPrimaryData(primary);
        setPostPrimaryData(postPrimary);
        setSpecialData(special);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPrimary = primaryData.filter(school => school.county_name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredPostPrimary = postPrimaryData.filter(school => school.county_name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredSpecial = specialData.filter(school => school.county_name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Schools</h1>
      <input type="text" placeholder="Search by county name" value={searchTerm} onChange={handleSearchChange} />
      
      <h2>Primary Schools</h2>
      <ul>
        {filteredPrimary.map((school) => (
          <li key={school.id}>
            <h3>{school.name}</h3>
            <h3>{school.address}</h3>
            <h3>county: {school.county_name}</h3>
          </li>
        ))}
      </ul>

      <h2>Post Primary Schools</h2>
      <ul>
        {filteredPostPrimary.map((school) => (
          <li key={school.id}>
            <h3>{school.name}</h3>
            <h3>{school.address}</h3>
            <h3>county: {school.county_name}</h3>
          </li>
        ))}
      </ul>

      <h2>Special Schools</h2>
      <ul>
        {filteredSpecial.map((school) => (
          <li key={school.id}>
            <h3>{school.name}</h3>
            <h3>{school.address}</h3>
            <h3>county: {school.county_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schools;
