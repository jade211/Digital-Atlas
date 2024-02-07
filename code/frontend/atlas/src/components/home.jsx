import React from 'react';

const Navbar = () => {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: sans-serif;
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #000; /* Fixed background color*/
          }
          nav {
            position: fixed;
            top: 0;
            left: 5%;
            width: 100%;
            // background-color: #345; /* Set background color for the navbar */
            padding: 10px 20px; /* Add padding for better readability */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add box shadow for a subtle effect */
            z-index: 1000; /* Set a higher z-index to appear above other elements */
          }
          nav a {
            position: relative;
            font-size: 1.1cm;
            font-weight: 500;
            color: #333;
            text-decoration: none;
            padding: 6px 20px;
            transition: 0.5s;
          }
          nav a:hover {
            color: #8ef;
          }
          nav a span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            border-bottom: 2px solid #bef;
            border-radius: 15px;
            transform: scale(0) translateY(50px); /* Fixed typo in translateY*/
            opacity: 0;
            transition: 0.5s;
          }
          nav a:hover span {
            transform: scale(1) translateY(0); /* Fixed typo in translateY*/
            opacity: 1;
          }
        `}
      </style>
      <nav>
        <a href="/">Home<span></span></a>
        <a href="/amenities">Amenities<span></span></a>
        <a href="/crime">Crime<span></span></a>
        <a href="/transport">Transport<span></span></a>
        <a href="/school">School<span></span></a>
        <a href="crime.jsx">Housing<span></span></a>
        <a href="#">Contact<span></span></a>
        <a href="#">Comments<span></span></a>
      </nav>
    </>
  );
};

export default Navbar;
