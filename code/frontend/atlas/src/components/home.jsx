// // Home.jsx
// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <p>Welcome to the Home Page!</p>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router for navigation

// function Home() {
//   return (
//     <div className="container">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="banner-image">
//           <img src="hero-image.jpg" alt="Explore Your Area with Digital Atlas" />
//         </div>
//         <div className="hero-content">
//           <div className="logo">
//             <img src="logo.png" alt="Digital Atlas" />
//           </div>
//           <h1>Explore Your Area with Digital Atlas</h1>
//           <p>A user-focused website leveraging dependable data sources to provide valuable area-specific insights.</p>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="overview">
//         <h2>Overview of Features</h2>
//         <div className="feature">
//           <img src="crime-icon.png" alt="Crime Statistics" />
//           <p>Discover detailed statistics on local crime rates in your area.</p>
//         </div>
//         {/* Repeat similar structure for other features */}
//       </section>

//       {/* Call to Action Section */}
//       <section className="call-to-action">
//         <h2>Ready to Get Started?</h2>
//         <p>Enter your area of interest in the search bar below to begin exploring!</p>
//         <input type="text" placeholder="Enter your area of interest" />
//         <button><Link to="/searcharea">Search</Link></button>
//       </section>

//       {/* Footer Section */}
//       <footer>
//         <div className="contact-info">
//           <p>Contact us: info@digitalatlas.com</p>
//           <ul>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/privacy">Privacy Policy</Link></li>
//             <li><Link to="/terms">Terms of Service</Link></li>
//           </ul>
//         </div>
//         <div className="copyright">&copy; 2024 Digital Atlas. All rights reserved.</div>
//       </footer>
//     </div>
//   );
// }

// export default Home;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     navigate(`/searcharea?query=${encodeURIComponent(searchTerm)}`);
//   };

//   return (
//     <div className="container">
//       <section className="content">
//         <div className="left-content">
//           <section className="hero">
//             <div className="hero-content">
//               <h1>Explore Your Area with Digital Atlas</h1>
//               <p>A user-focused website leveraging dependable data sources to provide valuable area-specific insights.</p>
//             </div>
//           </section>

//           <section className="overview">
//             <h2>Overview of Features</h2>
//             <div className="feature">
//               <p>Digital Atlas provides information on various features useful for understanding your community, including crime statistics and demographic data.</p>
//               <p>Discover detailed statistics on:</p>
//               <ul>
//                 <li><Link to="/amenitiesnav">Amenities</Link></li>
//                 <li><Link to="/crimenav">Crime</Link></li>
//                 <li><Link to="/schoolsnav">Schools</Link></li>
//                 <li><Link to="/transportnav">Transport</Link></li>
//                 <li><Link to="/housenav">House Prices</Link></li>
//               </ul>
//             </div>
//           </section>

//           <section className="call-to-action">
//             <h2>Ready to Get Started?</h2>
//             <p>Enter your area of interest in the search bar below to begin exploring!</p>
//             <div className="search-bar">
//               <input type="text" placeholder="Enter your area of interest" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//               <button onClick={handleSearch}>Search</button>
//             </div>
//           </section>
//         </div>

//         <div className="right-content">
//           <img src="https://www.ireland-information.com/images/map-of-ireland-big.jpg" alt="Explore Your Area with Digital Atlas" style={{ width: '10%', height: '10%' }} />
//         </div>
//       </section>

//       <footer>
//         <div className="contact-info">
//           <p>Contact us: info@digitalatlas.com</p>
//           <ul>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/privacy">Privacy Policy</Link></li>
//             <li><Link to="/terms">Terms of Service</Link></li>
//           </ul>
//         </div>
//         <div className="copyright">&copy; 2024 Digital Atlas. All rights reserved.</div>
//       </footer>
//     </div>
//   );
// }

// export default Home;



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
              <h1 className='title'>Explore Your Area with Digital Atlas</h1>
              <p>A user-focused website leveraging dependable data sources to provide valuable area-specific insights.</p>
            </div>
          </section>

          <section className="overview">
            <h2>Overview of Features</h2>
            <div className="feature">
              <p>Digital Atlas provides information on various features useful for understanding your community, including crime statistics and demographic data.</p>
              <p>Discover detailed statistics on:</p>
              <ul>
                <li><Link to="/amenitiesnav">Amenities</Link></li>
                <li><Link to="/crimenav">Crime</Link></li>
                <li><Link to="/schoolsnav">Education</Link></li>
                <li><Link to="/transportnav">Transport</Link></li>
                <li><Link to="/housenav">House Prices</Link></li>
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
          <p>Contact us: info@digitalatlas.com</p>
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
