
// import React, { useState } from 'react';
// import Amenities from './amenities';
// import Crime from './crime';
// import Navbar from './navbar';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (area) => {
//     setSearchTerm(area);
//   };
//   <Navbar />
//   return (
//       <div>
//         <div>
//           <label htmlFor="searchTerm" className="form-label">
//             Search by Area:
//           </label>
//           <input
//             type="text"
//             id="searchTerm"
//             className="form-control"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={() => handleSearch(searchTerm)}>Search</button>
//         </div>
//         <Amenities searchTerm={searchTerm} />
//         <Crime searchTerm={searchTerm} />
//       </div>
    
//   );
// }

// export default AreaSearch;



// import React, { useState } from 'react';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     // Check if the searchTerm is not empty before calling components
//     if (searchTerm.trim() !== '') {
//       return (
//         <div>
//           {/* <Amenities searchTerm={searchTerm} />
//           <Schools searchTerm={searchTerm} />
//           <Crime searchTerm={searchTerm} />
//           <Transport searchTerm={searchTerm} /> */}
//           <House searchTerm={searchTerm} />
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Area:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {handleSearch()}
//     </div>
//   );
// }

// export default AreaSearch;







// 
















// import React, { useState } from 'react';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);

//   const handleSearch = () => {
//     setSearchButtonClicked(true);
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Area:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {searchButtonClicked && searchTerm.trim() !== '' && (
//         <div>
//           <Amenities searchTerm={searchTerm} />
//           <Schools searchTerm={searchTerm} />
//           <Crime searchTerm={searchTerm} />
//           <Transport searchTerm={searchTerm} /> 
//           <House searchTerm={searchTerm} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AreaSearch;








// import React, { useState, useEffect} from 'react';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);

//   const handleSearch = () => {
//     setSearchButtonClicked(true);
//   };

//   useEffect(() => {
//     // Triggering the components

//     // Reset the search button state after a short delay (e.g., 100 milliseconds)
//     const resetSearchButton = setTimeout(() => {
//       setSearchButtonClicked(false);
//     }, 100);

//     // Clean up the timeout to avoid memory leaks
//     return () => clearTimeout(resetSearchButton);
//   }, [searchTerm]);

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1, marginRight: '20px' }}>
//         <div>
//           <label htmlFor="searchTerm" className="form-label">
//             Search by Area:
//           </label>
//           <input
//             type="text"
//             id="searchTerm"
//             className="form-control"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//         {searchButtonClicked && searchTerm.trim() !== '' && (
//           <>
//             <Amenities searchTerm={searchTerm} />
//             <Schools searchTerm={searchTerm} />
//             <Crime searchTerm={searchTerm} />
//           </>
//         )}
//       </div>
//       <div style={{ flex: 1 }}>
//         {searchButtonClicked && searchTerm.trim() !== '' && <House searchTerm={searchTerm} />}
//         <br></br>
//         {searchButtonClicked && searchTerm.trim() !== '' && <Transport searchTerm={searchTerm} />}
//       </div>
//     </div>
//   );
// }

// export default AreaSearch;


// import React, { useState, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1Ijoic3J1dGhpMTIxIiwiYSI6ImNsc2prYndhejFnMXIybG91MDVnN2V4azUifQ.QWMTwC0egQgM4j66bfF7EQ'; // Replace with your Mapbox access token
//     const mapInstance = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-6.2603, 53.3498], // Default center coordinates (Dublin, Ireland)
//       zoom: 10
//     });
//     setMap(mapInstance);

//     return () => mapInstance.remove();
//   }, []);

//   const handleSearch = () => {
//     setSearchButtonClicked(true);

//     if (map && searchTerm.trim() !== '') {
//       try {
//         const geocodeApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=${mapboxgl.accessToken}`;
//         fetch(geocodeApiUrl)
//           .then(response => response.json())
//           .then(data => {
//             if (data.features && data.features.length > 0) {
//               const [longitude, latitude] = data.features[0].center;
//               new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
//               map.flyTo({ center: [longitude, latitude], zoom: 10 });
//             }
//           })
//           .catch(error => console.error('Error fetching location data:', error));
//       } catch (error) {
//         console.error('Error searching for location:', error);
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1, marginRight: '20px' }}>
//         <div>
//           <label htmlFor="searchTerm" className="form-label">
//             Search by Area:
//           </label>
//           <input
//             type="text"
//             id="searchTerm"
//             className="form-control"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//         {searchButtonClicked && searchTerm.trim() !== '' && (
//           <>
//             <Amenities searchTerm={searchTerm} />
//             <Schools searchTerm={searchTerm} />
//             <Crime searchTerm={searchTerm} />
//           </>
//         )}
//       </div>
//       <div style={{ flex: 1 }}>
//         <div id="map" style={{ width: '100%', height: '400px' }}></div>
//         {searchButtonClicked && searchTerm.trim() !== '' && <House searchTerm={searchTerm} />}
//         <br></br>
//         {searchButtonClicked && searchTerm.trim() !== '' && <Transport searchTerm={searchTerm} />}
//       </div>
//     </div>
//   );
// }

// export default AreaSearch;


// import React, { useState, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1Ijoic3J1dGhpMTIxIiwiYSI6ImNsc2prYndhejFnMXIybG91MDVnN2V4azUifQ.QWMTwC0egQgM4j66bfF7EQ'; // Replace with your Mapbox access token
//     const mapInstance = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-6.2603, 53.3498], // Default center coordinates (Dublin, Ireland)
//       zoom: 10
//     });
//     setMap(mapInstance);

//     return () => mapInstance.remove();
//   }, []);

//   const handleSearch = () => {
//     setSearchButtonClicked(true);

//     if (map && searchTerm.trim() !== '') {
//       try {
//         const geocodeApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=${mapboxgl.accessToken}`;
//         fetch(geocodeApiUrl)
//           .then(response => response.json())
//           .then(data => {
//             if (data.features && data.features.length > 0) {
//               const [longitude, latitude] = data.features[0].center;
//               new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
//               map.flyTo({ center: [longitude, latitude], zoom: 10 });
//             }
//           })
//           .catch(error => console.error('Error fetching location data:', error));
//       } catch (error) {
//         console.error('Error searching for location:', error);
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <div id="map" style={{ width: '80%', height: '600px', marginBottom: '20px' }}></div>
//       <div style={{ width: '80%' }}>
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Area:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {searchButtonClicked && searchTerm.trim() !== '' && (
//         <div style={{ width: '80%', marginTop: '20px' }}>
//           <Amenities searchTerm={searchTerm} />
//           <Schools searchTerm={searchTerm} />
//           <Crime searchTerm={searchTerm} />
//           <House searchTerm={searchTerm} />
//           <Transport searchTerm={searchTerm} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AreaSearch;


// import React, { useState, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1Ijoic3J1dGhpMTIxIiwiYSI6ImNsc2prYndhejFnMXIybG91MDVnN2V4azUifQ.QWMTwC0egQgM4j66bfF7EQ'; // Replace with your Mapbox access token
//     const mapInstance = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-6.2603, 53.3498], // Default center coordinates (Dublin, Ireland)
//       zoom: 10
//     });
//     setMap(mapInstance);

//     return () => mapInstance.remove();
//   }, []);

//   const handleSearch = () => {
//     setSearchButtonClicked(true);

//     if (map && searchTerm.trim() !== '') {
//       try {
//         const geocodeApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=${mapboxgl.accessToken}`;
//         fetch(geocodeApiUrl)
//           .then(response => response.json())
//           .then(data => {
//             if (data.features && data.features.length > 0) {
//               const [longitude, latitude] = data.features[0].center;
//               new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
//               map.flyTo({ center: [longitude, latitude], zoom: 10 });
//             }
//           })
//           .catch(error => console.error('Error fetching location data:', error));
//       } catch (error) {
//         console.error('Error searching for location:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     // Triggering the components

//     // Reset the search button state after a short delay (e.g., 100 milliseconds)
//     const resetSearchButton = setTimeout(() => {
//       setSearchButtonClicked(false);
//     }, 100);

//     // Clean up the timeout to avoid memory leaks
//     return () => clearTimeout(resetSearchButton);
//   }, [searchTerm]);


//   return (
//     <div style={{ width: '80%', margin: '0 auto' }}>
//       <div style={{ marginBottom: '20px' }}>
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Area:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div id="map" style={{ width: '100%', height: '400px', marginBottom: '20px' }}></div>
//       {searchButtonClicked && searchTerm.trim() !== '' && (
//         <div>
//           <Amenities searchTerm={searchTerm} />
//           <Schools searchTerm={searchTerm} />
//           <Crime searchTerm={searchTerm} />
//           <House searchTerm={searchTerm} />
//           <Transport searchTerm={searchTerm} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AreaSearch;



import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Amenities from './amenities';
import Crime from './crime';
import Schools from './school';
import Transport from './transportation';
import House from './house';

function AreaSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('town'); // Default option
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [map, setMap] = useState(null);

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

  useEffect(() => {
    // Triggering the components

    // Reset the search button state after a short delay (e.g., 100 milliseconds)
    const resetSearchButton = setTimeout(() => {
      setSearchButtonClicked(false);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(resetSearchButton);
  }, [searchTerm]);


  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
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
      <div id="map" style={{ width: '100%', height: '400px', marginBottom: '20px' }}></div>
      {searchButtonClicked && searchTerm.trim() !== '' && (
        <div>
          <Amenities searchTerm={searchTerm} searchOption={searchOption} />
          <Schools searchTerm={searchTerm} searchOption={searchTerm}/>
          <Crime searchTerm={searchTerm} />
          <House searchTerm={searchTerm} />
          <Transport searchTerm={searchTerm} searchOption={searchTerm}/>
        </div>
      )}
    </div>
  );
}

export default AreaSearch;