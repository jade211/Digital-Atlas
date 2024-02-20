
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
//       <div className="contact-info">
//         <p>Contact us: info@digitalatlas.com</p>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li><Link to="/about" style={{ color: '#fff' }}>About</Link></li>
//           <li><Link to="/privacy" style={{ color: '#fff' }}>Privacy Policy</Link></li>
//           <li><Link to="/terms" style={{ color: '#fff' }}>Terms of Service</Link></li>
//         </ul>
//       </div>
//       <div className="copyright">&copy; {new Date().getFullYear()} Digital Atlas. All rights reserved.</div>
//     </footer>
//   );
// }

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import Home from './home';
import AreaSearch from './areasearch';
import ContactPage from './contact';

function Footer() {
  return (
    <footer style={{ width: '100%', backgroundColor: '#333', color: '#fff', padding: '21px' }}>
      <div className="contact-info">
        <p>Contact us: info@digitalatlas.com</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/" style={{ color: '#fff' }}>About</Link></li>
          <li><Link to="/searcharea" style={{ color: '#fff' }}>Search</Link></li>
          <li><Link to="/contact" style={{ color: '#fff' }}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="copyright">&copy; {new Date().getFullYear()} Digital Atlas. All rights reserved.</div>
    </footer>
  );
}


export default Footer;