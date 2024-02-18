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


// import React, { useState, useEffect } from 'react';

// function Schools() {
//   const [primaryData, setPrimaryData] = useState([]);
//   const [postPrimaryData, setPostPrimaryData] = useState([]);
//   const [specialData, setSpecialData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

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

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredPrimary = primaryData.filter(school => school.county_name.toLowerCase().includes(searchTerm.toLowerCase()));
//   const filteredPostPrimary = postPrimaryData.filter(school => school.county_name.toLowerCase().includes(searchTerm.toLowerCase()));
//   const filteredSpecial = specialData.filter(school => school.county_name.toLowerCase().includes(searchTerm.toLowerCase()));

//   return (
//     <div>
//       <h1>Schools</h1>
//       <input type="text" placeholder="Search by county name" value={searchTerm} onChange={handleSearchChange} />
      
//       <h2>Primary Schools</h2>
//       <ul>
//         {filteredPrimary.map((school) => (
//           <li key={school.id}>
//             <h3>{school.name}</h3>
//             <h3>{school.address}</h3>
//             <h3>county: {school.county_name}</h3>
//           </li>
//         ))}
//       </ul>

//       <h2>Post Primary Schools</h2>
//       <ul>
//         {filteredPostPrimary.map((school) => (
//           <li key={school.id}>
//             <h3>{school.name}</h3>
//             <h3>{school.address}</h3>
//             <h3>county: {school.county_name}</h3>
//           </li>
//         ))}
//       </ul>

//       <h2>Special Schools</h2>
//       <ul>
//         {filteredSpecial.map((school) => (
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



import React, { useState } from 'react';
import Footer from './footer';

function SchoolsNav() {
  const [schoolsData, setSchoolsData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
        const geocodeResponse = await fetch(geocodeApiUrl);
        const geocodeData = await geocodeResponse.json();
        const placeId = geocodeData.results[0]?.place_id;

        if (placeId) {
          const schoolUrl = `https://api.geoapify.com/v2/places?categories=education.school&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
          const collegeUrl = `https://api.geoapify.com/v2/places?categories=education.college,education.university&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
          
          const [schoolResponse, collegeResponse] = await Promise.all([fetch(schoolUrl), fetch(collegeUrl)]);
          const [schoolsData, collegeData] = await Promise.all([schoolResponse.json(), collegeResponse.json()]);

          setSchoolsData(schoolsData);
          setCollegeData(collegeData);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterDataWithNames = (data) => {
    return data.features ? data.features.filter(result => result.properties.name) : [];
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className="container mt-4 flex-grow-1">
          <div className="mb-3"></div>
          <label htmlFor="searchTerm" className="form-label">
            Search by Locality or County:
          </label>
          <div className="input-group">
            <input
              type="text"
              id="searchTerm"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <div className="row flex-grow-1">
          <div className="col-md-6 d-flex">
            <div className="section-container flex-grow-1">
              <div className='school-info'>
                <h2>Schools</h2>
                {filterDataWithNames(schoolsData).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {schoolsData.features && schoolsData.features.length === 0 && (
                  <p>No Schools Found in {searchTerm}</p>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex">
            <div className="section-container flex-grow-1">
              <div className='school-info'>
                <h2>Colleges/ Universities</h2>
                {filterDataWithNames(collegeData).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {collegeData.features && collegeData.features.length === 0 && (
                  <p>No Universities Found in {searchTerm}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SchoolsNav;