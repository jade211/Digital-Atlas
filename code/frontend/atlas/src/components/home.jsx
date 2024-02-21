import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('town');

  const handleSearch = () => {
    navigate(`/searcharea?query=${encodeURIComponent(searchTerm)}&option=${encodeURIComponent(searchOption)}`);
  };

  return (
    <div className="container">
      <section className="content">
        <div className="left-content">
          <section className="hero">
            <div className="hero-content">
              <h1 className='title'>Explore Your Area With Digital Atlas</h1>
              <p><i>A user-focused website leveraging dependable data sources to provide valuable area-specific insights.</i></p>
            </div>
          </section>

          <section className="overview">
            <h2>Overview of Features</h2>
            <div className="feature">
              <p>Digital Atlas provides information on various features useful for understanding your community, including crime statistics and demographic data.</p>
              <p>Discover detailed statistics on:</p>
              <ul className="list-unstyled feature-list">
                <li><Link to="/amenitiesnav" className="text-decoration-none">Amenities</Link></li>
                <li><Link to="/crimenav" className="text-decoration-none">Crime</Link></li>
                <li><Link to="/schoolsnav" className="text-decoration-none">Education</Link></li>
                <li><Link to="/transportnav" className="text-decoration-none">Transport</Link></li>
                <li><Link to="/housenav" className="text-decoration-none">House Prices</Link></li>
              </ul>
            </div>
          </section>
  

          <section className="call-to-action">
            <h2>Ready to Get Started?</h2>
            <p>Enter your area of interest in the search bar below to begin exploring!</p>
            <div className="search-bar">
              <input 
              type="text" 
              placeholder="Enter your area of interest" 
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
              >
                <option value="city">Town</option>
                <option value="state">County</option>
              </select>
              <button onClick={handleSearch}>Search</button>
            </div>
          </section>
        </div>

        <div className="right-content">
          <img src="https://www.ireland-information.com/images/map-of-ireland-big.jpg" alt="Explore Your Area with Digital Atlas" className="hero-image" />
        </div>
      </section>

      <footer>
        <div className="contact-info">
          <p>Contact us: digitalatlas211@gmail.com</p>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/searcharea">Search</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="copyright">&copy; 2024 Digital Atlas. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
