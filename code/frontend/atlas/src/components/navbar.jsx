import React, { useState, useEffect } from 'react';
import logo from '../logo.png';

function Navbar() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsScrollingUp(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
        <a href="searcharea">Search<span></span></a>
        <a href="/amenitiesnav">Amenities<span></span></a>
        <a href="/crimenav">Crime<span></span></a>
        <a href="/transportnav">Transport<span></span></a>
        <a href="/schoolsnav">Education<span></span></a>
        <a href="/housenav">Housing<span></span></a>
        <a href="/contact">Contact<span></span></a>
      </nav>
    </>
  );
}

export default Navbar;