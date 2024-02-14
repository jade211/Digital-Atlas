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



import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="banner-image">
          <img src="hero-image.jpg" alt="Explore Your Area with Digital Atlas" />
        </div>
        <div className="hero-content">
          <div className="logo">
            <img src="logo.png" alt="Digital Atlas" />
          </div>
          <h1>Explore Your Area with Digital Atlas</h1>
          <p>A user-focused website leveraging dependable data sources to provide valuable area-specific insights.</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview">
        <h2>Overview of Features</h2>
        <div className="feature">
          <img src="crime-icon.png" alt="Crime Statistics" />
          <p>Discover detailed statistics on local crime rates in your area.</p>
        </div>
        {/* Repeat similar structure for other features */}
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Get Started?</h2>
        <p>Enter your area of interest in the search bar below to begin exploring!</p>
        <input type="text" placeholder="Enter your area of interest" />
        <button><Link to="/searcharea">Search</Link></button>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="contact-info">
          <p>Contact us: info@digitalatlas.com</p>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="copyright">&copy; 2024 Digital Atlas. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
