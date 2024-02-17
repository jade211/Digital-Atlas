// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


// function AmenitiesNav() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedAttraction, setSelectedAttraction] = useState(null);

//   useEffect(() => {
//     fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
//       .then((response) => response.json())
//       .then((json) => setData(json.results))
//       .catch((error) => console.error(error));
//   }, []);

//   const filteredData =
//     data &&
//     data.filter(
//       (item) =>
//         item.address.addressLocality.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.address.addressRegion.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   const handleCardClick = (attraction) => {
//     setSelectedAttraction(attraction);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-3">
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Locality or Country:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {selectedAttraction ? (
//         <div>
//           <h2>Attraction Details:</h2>
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">{selectedAttraction.name}</h5>
//               <p className="card-text">Locality: {selectedAttraction.address.addressLocality}</p>
//               <p className="card-text">Region: {selectedAttraction.address.addressRegion}</p>
//               <p className="card-text">Coordinates: {selectedAttraction.geo.latitude}, {selectedAttraction.geo.longitude}</p>
//               {selectedAttraction.images && selectedAttraction.images.length > 0 && (
//                 <div>
//                   <p className="card-text">Images:</p>
//                   <div className="row">
//                     {selectedAttraction.images.map((image, index) => (
//                       <div key={index} className="col-md-4 mb-2">
//                         <img src={image.url} alt={`Attraction ${index + 1}`} className="img-fluid" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {/* Add more fields as needed */}
//               <button className="btn btn-primary" onClick={() => setSelectedAttraction(null)}>
//                 Back to Results
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : filteredData && filteredData.length > 0 ? (
//         <div>
//           <h2>Filtered Amenities Data:</h2>
//           {/* <Link to={`/`}>HOME</Link> */}
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {filteredData.map((item) => (
//               <div key={item.id} className="col">
//                 <div className="card h-100" onClick={() => handleCardClick(item)}>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">Locality: {item.address.addressLocality}</p>
//                     <p className="card-text">Region: {item.address.addressRegion}</p>
//                     {/* Add more fields as needed */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : data && data.length > 0 ? (
//         <p>No matching results found.</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default AmenitiesNav;





// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // 

// function AmenitiesNav() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial,catering,accommodation,childcare,education.school,religion,entertainment,healthcare,leisure,service,building,public_transport,sport,activity,beach&filter=place:${encodeURIComponent(
//             placeId
//           )}&limit=50&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const amenitiesResponse = await fetch(amenitiesApiUrl);
//           const amenitiesData = await amenitiesResponse.json();

//           setData(amenitiesData);
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


//       {/* Display search results */}
//       <div>
//         {data.features && data.features.map((result) => (
//           <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">{result.properties.name}</h5>                     <p className="card-text">Address: {result.properties.formatted}</p>
//             <p className="card-text">Eircode: {result.properties.postcode}</p>
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AmenitiesNav;







// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function AmenitiesNav() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial,catering,accommodation,childcare,education.school,religion,entertainment,healthcare,leisure,service,building,public_transport,sport,activity,beach&filter=place:${encodeURIComponent(
//             placeId
//           )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const amenitiesResponse = await fetch(amenitiesApiUrl);
//           const amenitiesData = await amenitiesResponse.json();

//           setData(amenitiesData);
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


//       {/* Display search results */}
//       <div>
//         {data.features && data.features.map((result) => (
//           <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">{result.properties.name}</h5>                     <p className="card-text">Address: {result.properties.formatted}</p>
//             <p className="card-text">Eircode: {result.properties.postcode}</p>
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AmenitiesNav;






// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function AmenitiesNav() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial,catering,accommodation.hotel,healthcare,education.library,entertainment,leisure,service,sport,activity,religion&filter=place:${encodeURIComponent(
//             placeId
//           )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;




//           const amenitiesResponse = await fetch(amenitiesApiUrl);
//           const amenitiesData = await amenitiesResponse.json();

//           setData(amenitiesData);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

 
//   // Helper function to group data by categories
//   const groupDataByCategory = () => {
//   const groupedData = {};

//   if (data.features && data.features.length > 0) {
//     data.features.forEach((result) => {
//       const category = result.properties.categories && result.properties.categories.length > 0
//         ? result.properties.categories[0]
//         : 'Uncategorized';

//       if (!groupedData[category]) {
//         groupedData[category] = [];
//       }
//       groupedData[category].push(result);
//     });
//   }

//   return groupedData;
// };

//   const groupedData = groupDataByCategory();

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

//       {/* Display search results */}
//       {Object.entries(groupedData).map(([category, categoryResults]) => (
//         <div key={category}>
//           <h2>{category}</h2>
//           {categoryResults.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AmenitiesNav;












// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function AmenitiesNav() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial,catering,accommodation.hotel,healthcare,education.library,entertainment,leisure,service,sport,activity,religion&filter=place:${encodeURIComponent(
//             placeId
//           )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const amenitiesResponse = await fetch(amenitiesApiUrl);
//           const amenitiesData = await amenitiesResponse.json();

//           setData(amenitiesData);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Helper function to group data by categories
//   const groupDataByCategory = () => {
//     const groupedData = {};

//     if (data.features && data.features.length > 0) {
//       data.features.forEach((result) => {
//         const categories = result.properties.categories || [];
        
//         categories.forEach((category) => {
//           if (!groupedData[category]) {
//             groupedData[category] = [];
//           }
//           groupedData[category].push(result);
//         });
//       });
//     }

//     return groupedData;
//   };

//   const groupedData = groupDataByCategory();

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

//       {/* Display search results */}
//       {Object.entries(groupedData).map(([category, categoryResults]) => (
//         <div key={category}>
//           <h2>{category}</h2>
//           {categoryResults.map((result) => (
//             <div className="card" key={result.properties.place_id}>
//               <div className="card-body">
//                 <h5 className="card-title">{result.properties.name}</h5>
//                 <p className="card-text">Address: {result.properties.formatted}</p>
//                 <p className="card-text">Eircode: {result.properties.postcode}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AmenitiesNav;















// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function AmenitiesNav() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = async () => {
//     try {
//       if (searchTerm.trim() !== '') {
//         const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&type=state&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//         const geocodeResponse = await fetch(geocodeApiUrl);
//         const geocodeData = await geocodeResponse.json();
//         const placeId = geocodeData.results[0]?.place_id;

//         if (placeId) {
//           const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial,catering,accommodation.hotel,healthcare,education.library,entertainment,leisure,service,sport,activity,religion&filter=place:${encodeURIComponent(
//             placeId
//           )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

//           const amenitiesResponse = await fetch(amenitiesApiUrl);
//           const amenitiesData = await amenitiesResponse.json();

//           setData(amenitiesData);
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


//       {/* Display search results */}
//       <div>
//         {data.features && data.features.map((result) => (
//           <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">{result.properties.name}</h5>                     <p className="card-text">Address: {result.properties.formatted}</p>
//             <p className="card-text">Eircode: {result.properties.postcode}</p>
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AmenitiesNav;






import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Footer from './footer';

function AmenitiesNav() {
  const [servicesData, setServicesData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);
  const [healthcareData, setHealthcareData] = useState([]);
  const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
  const [shopsBusinessesData, setShopsBusinessesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

        const geocodeResponse = await fetch(geocodeApiUrl);
        const geocodeData = await geocodeResponse.json();
        const placeId = geocodeData.results[0]?.place_id;

        if (placeId) {
          const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=service,religion&filter=place:${encodeURIComponent(
            placeId
          )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;


          const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,leisure, sport,activity&filter=place:${encodeURIComponent(
            placeId
          )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:${encodeURIComponent(
            placeId
          )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare&filter=place:${encodeURIComponent(
            placeId
          )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
            placeId
          )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
            placeId
          )}&limit=5&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse] =
            await Promise.all([
              fetch(servicesApiUrl),
              fetch(amenitiesApiUrl),
              fetch(hotelsApiUrl),
              fetch(healthcareApiUrl),
              fetch(restaurantsCafesApiUrl),
              fetch(shopsBusinessesApiUrl),
            ]);

          const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData] = await Promise.all([
            servicesResponse.json(),
            amenitiesResponse.json(),
            hotelsResponse.json(),
            healthcareResponse.json(),
            restaurantsCafesResponse.json(),
            shopsBusinessesResponse.json(),
          ]);

          setServicesData(servicesData);
          setAmenitiesData(amenitiesData);
          setHotelsData(hotelsData);
          setHealthcareData(healthcareData);
          setRestaurantsCafesData(restaurantsCafesData);
          setShopsBusinessesData(shopsBusinessesData);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="searchTerm" className="form-label">
          Search by Locality or Country:
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

      {/* Display search results */}
      <div>
        <h2>Entertainment and Leisure</h2>
        {amenitiesData.features && amenitiesData.features.map((result) => (
          <div className="card" key={result.properties.place_id}>
            <div className="card-body">
              <h5 className="card-title">{result.properties.name}</h5>
              <p className="card-text">Address: {result.properties.formatted}</p>
              <p className="card-text">Eircode: {result.properties.postcode}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Services and Religious Establishments</h2>
        {servicesData.features && servicesData.features.map((result) => (
          <div className="card" key={result.properties.place_id}>
            <div className="card-body">
              <h5 className="card-title">{result.properties.name}</h5>
              <p className="card-text">Address: {result.properties.formatted}</p>
              <p className="card-text">Eircode: {result.properties.postcode}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Hotels</h2>
        {hotelsData.features && hotelsData.features.map((result) => (
          <div className="card" key={result.properties.place_id}>
            <div className="card-body">
              <h5 className="card-title">{result.properties.name}</h5>
              <p className="card-text">Address: {result.properties.formatted}</p>
              <p className="card-text">Eircode: {result.properties.postcode}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Healthcare, Pharmacies and Hospitals</h2>
        {healthcareData.features && healthcareData.features.map((result) => (
          <div className="card" key={result.properties.place_id}>
            <div className="card-body">
              <h5 className="card-title">{result.properties.name}</h5>
              <p className="card-text">Address: {result.properties.formatted}</p>
              <p className="card-text">Eircode: {result.properties.postcode}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Restaurants and Cafes</h2>
        {restaurantsCafesData.features && restaurantsCafesData.features.map((result) => (
          <div className="card" key={result.properties.place_id}>
            <div className="card-body">
              <h5 className="card-title">{result.properties.name}</h5>
              <p className="card-text">Address: {result.properties.formatted}</p>
              <p className="card-text">Eircode: {result.properties.postcode}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Shopping Centres and Businesses</h2>
        {shopsBusinessesData.features && shopsBusinessesData.features.map((result) => (
          <div className="card" key={result.properties.place_id}>
            <div className="card-body">
              <h5 className="card-title">{result.properties.name}</h5>
              <p className="card-text">Address: {result.properties.formatted}</p>
              <p className="card-text">Eircode: {result.properties.postcode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AmenitiesNav;