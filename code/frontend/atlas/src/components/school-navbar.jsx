import React, { useState } from 'react';
import Footer from './footer';

function SchoolsNav() {
  const [schoolsData, setSchoolsData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [universityData, setUniversityData] = useState([]);
  const API_KEY = 'a777d7b98c864c52ac9a1081e45d8e51';

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=${API_KEY}`;
        const geocodeResponse = await fetch(geocodeApiUrl);
        const geocodeData = await geocodeResponse.json();
        const placeId = geocodeData.results[0]?.place_id;

        if (placeId) {
          const schoolUrl = `https://api.geoapify.com/v2/places?categories=education.school&filter=place:${encodeURIComponent(placeId)}&limit=20&apiKey=${API_KEY}`;
          const collegeUrl = `https://api.geoapify.com/v2/places?categories=education.college,education.university&filter=place:${encodeURIComponent(placeId)}&limit=20&apiKey=${API_KEY}`;
          const universityUrl = `https://api.geoapify.com/v2/places?categories=education.university&filter=place:${encodeURIComponent(placeId)}&limit=20&apiKey=${API_KEY}`;
          
          const [schoolResponse, collegeResponse, universityResponse] = await Promise.all([fetch(schoolUrl), fetch(collegeUrl), fetch(universityUrl)]);
            const [schoolsData, collegeData, universityData] = await Promise.all([schoolResponse.json(), collegeResponse.json(), universityResponse.json()]);

          setSchoolsData(removeDuplicates(schoolsData, 'place_id'));
          setCollegeData(removeDuplicates(collegeData, 'place_id'));
          setUniversityData(removeDuplicates(universityData, 'place_id'));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterDataWithNames = (data) => {
    return data.features ? data.features.filter(result => result.properties.name) : [];
  };

  const removeDuplicates = (data, property) => {
    const uniqueData = [];
    const uniqueValues = new Set();
    
    data.features.forEach(result => {
      if (!uniqueValues.has(result.properties[property])) {
        uniqueValues.add(result.properties[property]);
        uniqueData.push(result);
      }
    });

    return { features: uniqueData };
  };

  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

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

        <div className="row">
          <div className="col-md-6">
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
                  <p>No Schools Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>
          

            <div className="section-container flex-grow-1">
              <div className='school-info'>
                <h2>Colleges</h2>
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
                  <p>No Colleges Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>
            </div>

            <div className="col-md-6">
            <div className="section-container flex-grow-1">
              <div className='school-info'>
              <h2>University</h2>
              {filterDataWithNames(universityData).map((result) => (
                <div className="card" key={result.properties.place_id}>
                  <div className="card-body">
                    <h5 className="card-title">{result.properties.name}</h5>
                    <p className="card-text">Address: {result.properties.formatted}</p>
                    <p className="card-text">Eircode: {result.properties.postcode}</p>
                  </div>
                </div>
              ))}
              {universityData.features && universityData.features.length === 0 && (
                  <p>No University Found in {capitalSearchTerm}</p>
                )}
            </div>
          </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SchoolsNav;