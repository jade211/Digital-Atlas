
import React, { useState } from 'react';
import Amenities from './amenities';
import Crime from './crime';
import Navbar from './navbar';

function AreaSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (area) => {
    setSearchTerm(area);
  };
  <Navbar />
  return (
      <div>
        <div>
          <label htmlFor="searchTerm" className="form-label">
            Search by Area:
          </label>
          <input
            type="text"
            id="searchTerm"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => handleSearch(searchTerm)}>Search</button>
        </div>
        <Amenities searchTerm={searchTerm} />
        <Crime searchTerm={searchTerm} />
      </div>
    
  );
}

export default AreaSearch;