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
  const [religionData, setReligionData] = useState([]);
  const [tourismData, setTourismData] = useState([]);
  const [townsData, setTownsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const geocodeApiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchTerm)}&limit=1&filter=countrycode:ie&format=json&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

        const geocodeResponse = await fetch(geocodeApiUrl);
        const geocodeData = await geocodeResponse.json();
        const placeId = geocodeData.results[0]?.place_id;

        if (placeId) {
          const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=service&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;


          const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,leisure,sport,activity&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const religionApiUrl = `https://api.geoapify.com/v2/places?categories=religion&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const tourismApiUrl = `https://api.geoapify.com/v2/places?categories=heritage,tourism.attraction.artwork,tourism.attraction.viewpoint,tourism.attraction.fountain,tourism.attraction.clock,tourism.sights.place_of_worship,tourism.sights.place_of_worship.church,tourism.sights.place_of_worship.chapel,tourism.sights.place_of_worship.cathedral,tourism.sights.place_of_worship.mosque,tourism.sights.place_of_worship.synagogue,tourism.sights.place_of_worship.temple,tourism.sights.place_of_worship.shrine,tourism.sights.monastery,tourism.sights.city_hall,tourism.sights.conference_centre,tourism.sights.lighthouse,tourism.sights.windmill,tourism.sights.tower,tourism.sights.battlefield,tourism.sights.fort,tourism.sights.castle,tourism.sights.ruines,tourism.sights.archaeological_site,tourism.sights.city_gate,tourism.sights.bridge,tourism.sights.memorial,tourism.sights.memorial.aircraft,tourism.sights.memorial.locomotive,tourism.sights.memorial.railway_car,tourism.sights.memorial.ship,tourism.sights.memorial.tank,tourism.sights.memorial.tomb,tourism.sights.memorial.monument,tourism.sights.memorial.wayside_cross,tourism.sights.memorial.boundary_stone,tourism.sights.memorial.pillory,tourism.sights.memorial.milestone&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const townsApiUrl = `https://api.geoapify.com/v2/places?categories=populated_place.village,populated_place.hamlet,populated_place.neighbourhood,populated_place.city,populated_place.suburb,populated_place.town&filter=place:${encodeURIComponent(
            placeId
          )}&limit=20&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

          const [servicesResponse, amenitiesResponse, hotelsResponse, healthcareResponse, restaurantsCafesResponse, shopsBusinessesResponse, religionResponse, tourismResponse, townsResponse] =
            await Promise.all([
              fetch(servicesApiUrl),
              fetch(amenitiesApiUrl),
              fetch(hotelsApiUrl),
              fetch(healthcareApiUrl),
              fetch(restaurantsCafesApiUrl),
              fetch(shopsBusinessesApiUrl),
              fetch(religionApiUrl),
              fetch(tourismApiUrl),
              fetch(townsApiUrl),
            ]);

          const [servicesData, amenitiesData, hotelsData, healthcareData, restaurantsCafesData, shopsBusinessesData, religionData, tourismData, townsData] = 
            await Promise.all([
              servicesResponse.json(),
              amenitiesResponse.json(),
              hotelsResponse.json(),
              healthcareResponse.json(),
              restaurantsCafesResponse.json(),
              shopsBusinessesResponse.json(),
              religionResponse.json(),
              tourismResponse.json(),
              townsResponse.json(),
            ]);

          setServicesData(servicesData);
          setAmenitiesData(amenitiesData);
          setHotelsData(hotelsData);
          setHealthcareData(healthcareData);
          setRestaurantsCafesData(restaurantsCafesData);
          setShopsBusinessesData(shopsBusinessesData);
          setReligionData(religionData);
          setTourismData(tourismData);
          setTownsData(townsData);
          }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterDataWithNames = (data) => {
    return data.features ? data.features.filter(result => result.properties.name) : [];
  };

  const removeDuplicatesByTitle = (data) => {
    const uniqueData = [];
    const titlesSet = new Set();
  
    data.features &&
      data.features.forEach((result) => {
        const title = result.properties.name;
  
        if (!titlesSet.has(title)) {
          titlesSet.add(title);
          uniqueData.push(result);
        }
      });
  
    return { features: uniqueData };
  };

  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

  return (
    <>
    <div className="container mt-4">
      <div className="mb-3">
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
          <div className="section-container">
            <div className="amenities-section">
              <div>
                <h2>Entertainment and Leisure 🎳</h2>
                {filterDataWithNames(removeDuplicatesByTitle(amenitiesData)).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {amenitiesData.features && amenitiesData.features.length === 0 && (
                  <p>No Entertainment/Leisure Amenities Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>

            <div>
            <div className="amenities-section">
                <h2>Restaurants and Cafes 🍴</h2>
                {filterDataWithNames(removeDuplicatesByTitle(restaurantsCafesData)).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {restaurantsCafesData.features && restaurantsCafesData.features.length === 0 && (
                  <p>No Restaurant/Cafe Amenities Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>

            <div>
              <div className="amenities-section">
                <h2>Shopping Centres and Shops 🏪</h2>
                {filterDataWithNames(removeDuplicatesByTitle(shopsBusinessesData)).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {shopsBusinessesData.features && shopsBusinessesData.features.length === 0 && (
                  <p>No Shopping Centres/Shop Amenities Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>

            <div>
              <div className="amenities-section">
                <h2>Hotels 🏨</h2>
                {filterDataWithNames(removeDuplicatesByTitle(hotelsData)).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {hotelsData.features && hotelsData.features.length === 0 && (
                  <p>No Hotels/Accommodation Amenities Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>

            <div>
              <div className="amenities-section">
                <h2>Tourism Locations 🗽</h2>
                {filterDataWithNames(tourismData).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {tourismData.features && tourismData.features.length === 0 && (
                  <p>No Tourist Amenities Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>
          </div>
        </div>

          <div className="col-md-6">
            <div className="section-container">
              <div className="amenities-section">
                <div>
                  <h2>Services 📠</h2>
                  {filterDataWithNames(removeDuplicatesByTitle(servicesData)).map((result) => (
                    <div className="card" key={result.properties.place_id}>
                      <div className="card-body">
                        <h5 className="card-title">{result.properties.name}</h5>
                        <p className="card-text">Address: {result.properties.formatted}</p>
                        <p className="card-text">Eircode: {result.properties.postcode}</p>
                      </div>
                    </div>
                  ))}
                  {servicesData.features && servicesData.features.length === 0 && (
                    <p>No Service Amenities Found in {capitalSearchTerm}</p>
                  )}
                </div>
              </div>
    

            <div>
              <div className="amenities-section"> 
                <h2>Healthcare, Pharmacies and Hospitals 🏥</h2>
                {filterDataWithNames(removeDuplicatesByTitle(healthcareData)).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {healthcareData.features && healthcareData.features.length === 0 && (
                  <p>No Healthcare Amenities Found in {capitalSearchTerm}</p>
                )}
              </div>
            </div>

            <div>
              <div className="amenities-section">
                <h2>Religious Establishments ⛪</h2>
                {filterDataWithNames(removeDuplicatesByTitle(religionData)).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {religionData.features && religionData.features.length === 0 && (
                  <p>No Religious Amenities Found in {searchTerm}</p>
                )}
              </div>
            </div>


 
            <div>
              <div className="amenities-section">
                <h2>Nearby Towns/Cities 🧭</h2>
                {filterDataWithNames(removeDuplicatesByTitle(townsData)).map((result) => (
                  <div className="card" key={result.properties.place_id}>
                    <div className="card-body">
                      <h5 className="card-title">{result.properties.name}</h5>
                      <p className="card-text">Address: {result.properties.formatted}</p>
                      <p className="card-text">Eircode: {result.properties.postcode}</p>
                    </div>
                  </div>
                ))}
                {townsData.features && townsData.features.length === 0 && (
                  <p>No Nearby Towns/Cities Found near {capitalSearchTerm}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default AmenitiesNav;