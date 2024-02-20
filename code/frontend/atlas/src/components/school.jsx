



// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Schools( {searchTerm} ) {
//   const [schoolsData, setSchoolsData] = useState([]);
//   const [collegeData, setCollegeData] = useState([]);
//   const [universityData, setUniversityData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51'; // Replace 'YOUR_API_KEY' with your actual API key

//   const handleSearch = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const schoolUrl = `https://api.geoapify.com/v2/places?categories=education.school&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
//           const collegeUrl = `https://api.geoapify.com/v2/places?categories=education.college&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
//           const universityUrl = `https://api.geoapify.com/v2/places?categories=education.university&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

//           const [schoolResponse, collegeResponse, universityResponse] = await Promise.all([fetch(schoolUrl), fetch(collegeUrl), fetch(universityUrl)]);
//           const [schoolsData, collegeData, universityData] = await Promise.all([schoolResponse.json(), collegeResponse.json(), universityResponse.json()]);

//           setSchoolsData(schoolsData);
//           setCollegeData(collegeData);
//           setUniversityData(universityData);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-3">
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Locality or Country:
//         </label>
//         <div className="input-group">
//           <input
//             type="text"
//             id="searchTerm"
//             className="form-control"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="btn btn-primary" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//       </div>


//     <div>
//       <h2>Schools</h2>
//       {schoolsData.features && schoolsData.features.map((result) => (
//         <div className="card" key={result.properties.place_id}>
//           <div className="card-body">
//             <h5 className="card-title">{result.properties.name}</h5>
//             <p className="card-text">Address: {result.properties.formatted}</p>
//             <p className="card-text">Eircode: {result.properties.postcode}</p>
//           </div>
//         </div>
//       ))}
//     </div>

//     <div>
//       <h2>Colleges</h2>
//       {collegeData.features && collegeData.features.map((result) => (
//         <div className="card" key={result.properties.place_id}>
//           <div className="card-body">
//             <h5 className="card-title">{result.properties.name}</h5>
//             <p className="card-text">Address: {result.properties.formatted}</p>
//             <p className="card-text">Eircode: {result.properties.postcode}</p>
//           </div>
//         </div>
//       ))}
//     </div>

//     <div>
//       <h2>University</h2>
//       {universityData.features && universityData.features.map((result) => (
//         <div className="card" key={result.properties.place_id}>
//           <div className="card-body">
//             <h5 className="card-title">{result.properties.name}</h5>
//             <p className="card-text">Address: {result.properties.formatted}</p>
//             <p className="card-text">Eircode: {result.properties.postcode}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }

// export default Schools;





// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Schools({ searchTerm, searchOption }) {
//   const [schoolsData, setSchoolsData] = useState([]);
//   const [collegeData, setCollegeData] = useState([]);
//   const [universityData, setUniversityData] = useState([]);
//   const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

//   useEffect(() => {
//     const handleSearch = async () => {
//       try {
//         let geocodeApiUrl;
//         if (searchTerm.trim() !== '') {
//           if (searchOption === 'state') {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           } else {
//             geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
//           }
//           const geocodeResponse = await fetch(geocodeApiUrl);
//           const geocodeData = await geocodeResponse.json();
//           const placeId = geocodeData.results[0]?.place_id;

//           if (placeId) {
//             const schoolUrl = `https://api.geoapify.com/v2/places?categories=education.school&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
//             const collegeUrl = `https://api.geoapify.com/v2/places?categories=education.college&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
//             const universityUrl = `https://api.geoapify.com/v2/places?categories=education.university&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

//             const [schoolResponse, collegeResponse, universityResponse] = await Promise.all([fetch(schoolUrl), fetch(collegeUrl), fetch(universityUrl)]);
//             const [schoolsData, collegeData, universityData] = await Promise.all([schoolResponse.json(), collegeResponse.json(), universityResponse.json()]);

//             setSchoolsData(schoolsData);
//             setCollegeData(collegeData);
//             setUniversityData(universityData);
//           }
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     // Call the search function when the searchTerm changes
//     handleSearch();
//   }, [searchTerm, searchOption]);

//   return (
//     <div className="container mt-4">
//       <div>
//         <h2>Schools</h2>
//         {schoolsData.features && schoolsData.features.map((result) => (
//           <div className="card" key={result.properties.place_id}>
//             <div className="card-body">
//               <h5 className="card-title">{result.properties.name}</h5>
//               <p className="card-text">Address: {result.properties.formatted}</p>
//               <p className="card-text">Eircode: {result.properties.postcode}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h2>Colleges/ University</h2>
//         {collegeData.features && collegeData.features.map((result) => (
//           <div className="card" key={result.properties.place_id}>
//             <div className="card-body">
//               <h5 className="card-title">{result.properties.name}</h5>
//               <p className="card-text">Address: {result.properties.formatted}</p>
//               <p className="card-text">Eircode: {result.properties.postcode}</p>
//             </div>
//           </div>
//         ))}
//       {/* </div>

//       <div>
//         <h2>University</h2> */}
//         {universityData.features && universityData.features.map((result) => (
//           <div className="card" key={result.properties.place_id}>
//             <div className="card-body">
//               <h5 className="card-title">{result.properties.name}</h5>
//               <p className="card-text">Address: {result.properties.formatted}</p>
//               <p className="card-text">Eircode: {result.properties.postcode}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Schools;



import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Schools({ searchTerm, searchOption }) {
  const [schoolsData, setSchoolsData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);
  const [universityData, setUniversityData] = useState([]);
  const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        let geocodeApiUrl;
        if (searchTerm.trim() !== '') {
          if (searchOption === 'state') {
            geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=${encodeURIComponent(searchOption)}&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
          } else {
            geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
          }
          const geocodeResponse = await fetch(geocodeApiUrl);
          const geocodeData = await geocodeResponse.json();
          const placeId = geocodeData.results[0]?.place_id;

          if (placeId) {
            const schoolUrl = `https://api.geoapify.com/v2/places?categories=education.school&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
            const collegeUrl = `https://api.geoapify.com/v2/places?categories=education.college&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;
            const universityUrl = `https://api.geoapify.com/v2/places?categories=education.university&filter=place:${encodeURIComponent(placeId)}&limit=5&apiKey=${API_KEY}`;

            const [schoolResponse, collegeResponse, universityResponse] = await Promise.all([fetch(schoolUrl), fetch(collegeUrl), fetch(universityUrl)]);
            const [schoolsData, collegeData, universityData] = await Promise.all([schoolResponse.json(), collegeResponse.json(), universityResponse.json()]);

            // Function to remove duplicates
            const removeDuplicates = (data) => {
              const uniqueNamesSet = new Set();
              return data.features.filter((result) => {
                if (result.properties.name && !uniqueNamesSet.has(result.properties.name)) {
                  uniqueNamesSet.add(result.properties.name);
                  return true;
                }
                return false;
              });
            };

            setSchoolsData(removeDuplicates(schoolsData));
            setCollegeData(removeDuplicates(collegeData));
            setUniversityData(removeDuplicates(universityData));
          }
        }
      } catch (error) {
        console.error(error);
      }

    };

    // Call the search function when the searchTerm changes
    handleSearch();
  }, [searchTerm, searchOption]);

  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReturnToMenu = () => {
    setSelectedCategory(null);
  };

  const renderSchoolsByCategory = () => {
    const dataForCategory = getCategoryData(selectedCategory);

    return (
      <div>
        <button className="btn btn-primary" onClick={handleReturnToMenu}>
          Return to School Menu
        </button>
        <h2>{selectedCategory}</h2>
        {dataForCategory.length > 0 ? (
          dataForCategory.map((result) => (
            <div className="card" key={result.properties.place_id}>
              <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p className="card-text">Address: {result.properties.formatted}</p>
                <p className="card-text">Eircode: {result.properties.postcode}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No {selectedCategory} Found in {searchTerm}</p>
        )}
      </div>
    );
  };

  const getCategoryData = (category) => {
      switch (category) {
        case 'Schools':
          return schoolsData;
        case 'College':
          return (collegeData); 
        case 'University':
          return universityData;          
        default:
          return [];
      }
    };
 
  return (
    <div className="schools-container">
      <h1>Education in {capitalSearchTerm}</h1>
      {!selectedCategory ? (
        <div>
          <div className="result-section">

            <h2 className="category" onClick={() => handleCategoryClick('Schools')}>Schools</h2>

            <h2 className="category" onClick={() => handleCategoryClick('College')}>Colleges</h2>

            <h2 className="category" onClick={() => handleCategoryClick('University')}>Universities</h2>
          </div>
        </div>
      ) : (
        renderSchoolsByCategory()
      )}
    </div>
  );
}
export default Schools;