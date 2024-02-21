import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Amenities({ searchTerm, searchOption }) {
  const [servicesData, setServicesData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);
  const [healthcareData, setHealthcareData] = useState([]);
  const [restaurantsCafesData, setRestaurantsCafesData] = useState([]);
  const [shopsBusinessesData, setShopsBusinessesData] = useState([]);
  const [religionData, setReligionData] = useState([]);
  const [tourismData, setTourismData] = useState([]);
  const [townsData, setTownsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
            const servicesApiUrl = `https://api.geoapify.com/v2/places?categories=service,education.driving_school,education.music_school,education.language_school,childcare,parking,pet.veterinary,pet.service,rental,amenity,building.service,office&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const amenitiesApiUrl = `https://api.geoapify.com/v2/places?categories=education.library,entertainment,leisure,pet.dog_park,adult,beach,building.entertainment,sport&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const hotelsApiUrl = `https://api.geoapify.com/v2/places?categories=accommodation&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const healthcareApiUrl = `https://api.geoapify.com/v2/places?categories=healthcare,building.healthcare&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const restaurantsCafesApiUrl = `https://api.geoapify.com/v2/places?categories=catering&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const shopsBusinessesApiUrl = `https://api.geoapify.com/v2/places?categories=commercial&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const religionApiUrl = `https://api.geoapify.com/v2/places?categories=religion&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const tourismApiUrl = `https://api.geoapify.com/v2/places?categories=heritage,tourism.attraction.artwork,tourism.attraction.viewpoint,tourism.attraction.fountain,tourism.attraction.clock,tourism.sights.place_of_worship,tourism.sights.place_of_worship.church,tourism.sights.place_of_worship.chapel,tourism.sights.place_of_worship.cathedral,tourism.sights.place_of_worship.mosque,tourism.sights.place_of_worship.synagogue,tourism.sights.place_of_worship.temple,tourism.sights.place_of_worship.shrine,tourism.sights.monastery,tourism.sights.city_hall,tourism.sights.conference_centre,tourism.sights.lighthouse,tourism.sights.windmill,tourism.sights.tower,tourism.sights.battlefield,tourism.sights.fort,tourism.sights.castle,tourism.sights.ruines,tourism.sights.archaeological_site,tourism.sights.city_gate,tourism.sights.bridge,tourism.sights.memorial,tourism.sights.memorial.aircraft,tourism.sights.memorial.locomotive,tourism.sights.memorial.railway_car,tourism.sights.memorial.ship,tourism.sights.memorial.tank,tourism.sights.memorial.tomb,tourism.sights.memorial.monument,tourism.sights.memorial.wayside_cross,tourism.sights.memorial.boundary_stone,tourism.sights.memorial.pillory,tourism.sights.memorial.milestone&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;

            const townsApiUrl = `https://api.geoapify.com/v2/places?categories=populated_place.village,populated_place.hamlet,populated_place.neighbourhood,populated_place.city,populated_place.suburb,populated_place.town&filter=place:${encodeURIComponent(
              placeId
            )}&limit=10&apiKey=a777d7b98c864c52ac9a1081e45d8e51`;
            


            const [
              servicesResponse,
              amenitiesResponse,
              hotelsResponse,
              healthcareResponse,
              restaurantsCafesResponse,
              shopsBusinessesResponse,
              religionResponse,
              tourismResponse,
              townsResponse,
            ] = await Promise.all([
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
    
            const [
              servicesData,
              amenitiesData,
              hotelsData,
              healthcareData,
              restaurantsCafesData,
              shopsBusinessesData,
              religionData,
              tourismData,
              townsData,
            ] = await Promise.all([
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

            setServicesData(removeDuplicates(servicesData));
            setAmenitiesData(removeDuplicates(amenitiesData));
            setHotelsData(removeDuplicates(hotelsData));
            setHealthcareData(removeDuplicates(healthcareData));
            setRestaurantsCafesData(removeDuplicates(restaurantsCafesData));
            setShopsBusinessesData(removeDuplicates(shopsBusinessesData));
            setReligionData(removeDuplicates(religionData));
            setTourismData(removeDuplicates(tourismData));
            setTownsData(removeDuplicates(townsData));
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm, searchOption]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReturnToMenu = () => {
    setSelectedCategory(null);
  };

  const renderAmenitiesByCategory = () => {
    const dataForCategory = getCategoryData(selectedCategory);

    return (
      <div>
        <button className="btn btn-primary" onClick={handleReturnToMenu}>
          Return to Amenities Menu
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
          <p>No {selectedCategory} Amenities Found in {capitalSearchTerm}</p>
        )}
      </div>
    );
  };

  const capitalSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

  const getCategoryData = (category) => {
    switch (category) {
      case 'Entertainment and Leisure':
        return amenitiesData;
      case 'Services':
        return servicesData;
      case 'Hotels and Accommodation':
        return hotelsData;
      case 'Hospitals, Pharmacies and Healthcare':
        return healthcareData;
      case 'Restaurants and Cafes':
        return restaurantsCafesData;
      case 'Shopping Centres and Shops':
        return shopsBusinessesData;
      case 'Religious Establishments':
        return religionData;
      case 'Tourist Locations':
        return tourismData;
      case 'Nearby Towns and Cities':
        return townsData;
        
      default:
        return [];
    }
  };

  return (
    <div className="amenities-container">
      <h1>Amenities in {capitalSearchTerm	}</h1>
      {!selectedCategory ? (
        <div>
          <div className="result-section">

            <h2 className="category" onClick={() => handleCategoryClick('Entertainment and Leisure')}>
              Entertainment and Leisure
            </h2>

            <h2 className="category" onClick={() => handleCategoryClick('Hotels and Accommodation')}>Hotels and Accommodation</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Hospitals, Pharmacies and Healthcare')}>Hospitals, Pharmacies and Healthcare</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Restaurants and Cafes')}>Restaurants and Cafes</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Shopping Centres and Shops')}>Shopping Centres and Shops</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Services')}>Services</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Religious Establishments')}>Religious Establishments</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Tourist Locations')}>Tourist Locations</h2>

            <h2 className="category" onClick={() => handleCategoryClick('Nearby Towns and Cities')}>Nearby Towns and Cities</h2>


          </div>
        </div>
      ) : (
        renderAmenitiesByCategory()
      )}
    </div>
  );
}

export default Amenities;