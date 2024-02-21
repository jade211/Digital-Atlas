import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Amenities from './amenities';
import Crime from './crime';
import Schools from './school';
import Transport from './transportation';
import House from './house';
import Comment from './comment';
import { useLocation } from 'react-router-dom';
import Footer from './footer';

function AreaSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('town'); // Default option
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [map, setMap] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    const option = searchParams.get('option') || 'town'; 
    if (query) {
      setSearchTerm(query);
      setSearchOption(option);
      handleSearch();
    }
  }, [location.search, searchButtonClicked]);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3J1dGhpMTIxIiwiYSI6ImNsc2prYndhejFnMXIybG91MDVnN2V4azUifQ.QWMTwC0egQgM4j66bfF7EQ'; // Replace with your Mapbox access token
    const mapInstance = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-6.2603, 53.3498], // Default center coordinates (Dublin, Ireland)
      zoom: 10
    });
    setMap(mapInstance);

    return () => mapInstance.remove();
  }, []);

  const handleSearch = () => {
    setSearchButtonClicked(true);
    setSelectedFeature(null); // Reset selected feature

    if (map && searchTerm.trim() !== '') {
      try {
        const geocodeApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=${mapboxgl.accessToken}`;
        fetch(geocodeApiUrl)
          .then(response => response.json())
          .then(data => {
            if (data.features && data.features.length > 0) {
              const [longitude, latitude] = data.features[0].center;
              new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
              map.flyTo({ center: [longitude, latitude], zoom: 10 });
            }
          })
          .catch(error => console.error('Error fetching location data:', error));
      } catch (error) {
        console.error('Error searching for location:', error);
      }
    }
  };

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
  };
  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
  return (
    <>
    <div style={{ display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Sidebar with background layout */}
      <div className="sidebar">
        <h2>Features</h2>
        <ul>
          <li onClick={() => handleFeatureSelect('amenities')}>Amenities</li>
          <li onClick={() => handleFeatureSelect('schools')}>Education</li>
          <li onClick={() => handleFeatureSelect('crime')}>Crime</li>
          <li onClick={() => handleFeatureSelect('house')}>House</li>
          <li onClick={() => handleFeatureSelect('transport')}>Transport</li>
        </ul>
      </div>

      <div style={{ width: '80%', marginLeft: '20px', overflowY: 'auto' }}>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <label htmlFor="searchTerm" className="form-label" style={{ marginRight: '10px' }}>
            Search by Area:
          </label>
          <input
            type="text"
            id="searchTerm"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <select
            value={searchOption}
            onChange={(e) => setSearchOption(e.target.value)}
          >
            <option value="city">Town</option>
            <option value="state">County</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div id="map" style={{ width: '100%', height: '400px', marginBottom: '20px', border: '2px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}></div>
        {searchButtonClicked && searchTerm.trim() !== '' && selectedFeature && (
          <div>
            {selectedFeature === 'amenities' && <Amenities searchTerm={searchTerm} searchOption={searchOption} />}
            {selectedFeature === 'schools' && <Schools searchTerm={searchTerm} searchOption={searchOption} />}
            {selectedFeature === 'crime' && <Crime searchTerm={searchTerm} />}
            {selectedFeature === 'house' && <House searchTerm={searchTerm} />}
            {selectedFeature === 'transport' && <Transport searchTerm={searchTerm} searchOption={searchOption} />}
            <Comment />
          </div>
        )}
        {searchButtonClicked && searchTerm.trim() !== '' && !selectedFeature && (
          <div className="alert alert-info" role="alert" style={{ borderLeft: '4px solid #007bff', borderRadius: '1', marginBottom: '20px' }}>
            <h4 className="alert-heading">Search Result: {capitalSearchTerm}</h4>
            <p className="mb-0" style={{ fontSize: '1.1rem' }}>{`You have searched for ${capitalSearchTerm}. Please use the features in the sidebar to discover more about the area.`}</p>
          </div>
        )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AreaSearch;