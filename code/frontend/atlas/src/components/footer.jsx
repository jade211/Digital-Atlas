
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <div className="contact-info">
        <p>Contact us: info@digitalatlas.com</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/about" style={{ color: '#fff' }}>About</Link></li>
          <li><Link to="/privacy" style={{ color: '#fff' }}>Privacy Policy</Link></li>
          <li><Link to="/terms" style={{ color: '#fff' }}>Terms of Service</Link></li>
        </ul>
      </div>
      <div className="copyright">&copy; {new Date().getFullYear()} Digital Atlas. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
