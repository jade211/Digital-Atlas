// import React, { useState, useEffect } from 'react';

// function Navbar() {
//   const [isScrollingUp, setIsScrollingUp] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setIsScrollingUp(prevScrollPos > currentScrollPos);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: sans-serif;
//           }
//           body {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             min-height: 100vh;
//             background: #345; /* Body background color */
//             margin: 0;
//             color: #000;
//           }
//           nav {
//             position: fixed;
//             top: 0;
//             left: 0%;
//             right: 0%;
//             width: 100%;
//             background-color: #000; /* Fixed navbar background color */
//             padding: 10px 20px;
//             box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//             z-index: 1000;
//           }
//           nav a {
//             position: relative;
//             font-size: 1cm;
//             font-weight: 100;
//             color: #fff; /* Text color */
//             text-decoration: none;
//             padding: 6px 20px;
//             transition: 0.5s;
//           }
//           nav a:hover {
//             color: #8ef;
//           }
//           nav a span {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             z-index: -1;
//             border-bottom: 2px solid #8ef; /* Border color on hover */
//             border-radius: 15px;
//             transform: scale(0) translateY(50px);
//             opacity: 0;
//             transition: 0.5s;
//           }
//           nav a:hover span {
//             transform: scale(1) translateY(0);
//             opacity: 1;
//           }
//         `}
//       </style>
//       <nav className="navbar">
//         {/* Your navbar content goes here */}
//         <a href="/">Home<span></span></a>
//         <a href="/amenities">Amenities<span></span></a>
//         <a href="/crime">Crime<span></span></a>
//         <a href="/transport">Transport<span></span></a>
//         <a href="/school">School<span></span></a>
//         <a href="/housing">Housing<span></span></a>
//         <a href="#">Contact<span></span></a>
//         <a href="#">Comments<span></span></a>
//       </nav>
//     </>
//   );
// }

// export default Navbar;








// import React, { useState, useEffect } from 'react';

// function Navbar() {
//   const [isScrollingUp, setIsScrollingUp] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setIsScrollingUp(prevScrollPos > currentScrollPos);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: sans-serif;
//           }
//           body {
//             position; fixed;
//             // display: flex;
//             justify-content: center;
//             align-items: center;
//             min-height: 100vh;
//             background: #345; /* Body background color */
//             margin: 0;
//             padding: 3px 2px;
//             color: #000;
//           }
//           nav {
//             position: fixed;
//             top: 0;
//             left: 0%;
//             width: 100%;
//             background-color: #000; /* Fixed navbar background color */
//             padding: 10px 20px;
//             box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//             z-index: 1000;
//           }
//           nav a {
//             position: relative;
//             font-size: 1cm;
//             font-weight: 100;
//             color: #fff; /* Text color */
//             text-decoration: none;
//             padding: 6px 15px;
//             transition: 0.5s;
//           }
//           nav a:hover {
//             color: #8ef;
//           }
//           nav a span {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             z-index: -1;
//             border-bottom: 2px solid #8ef; /* Border color on hover */
//             border-radius: 15px;
//             transform: scale(0) translateY(50px);
//             opacity: 0;
//             transition: 0.5s;
//           }
//           nav a:hover span {
//             transform: scale(1) translateY(0);
//             opacity: 1;
//           }
//         `}
//       </style>
//       <nav className="navbar">
//         {/* Your navbar content goes here */}
//         <a href="/">Home<span></span></a>
//         <a href="searcharea">Search<span></span></a>
//         <a href="/amenitiesnav">Amenities<span></span></a>
//         <a href="/crimenav">Crime<span></span></a>
//         <a href="/transportnav">Transport<span></span></a>
//         <a href="/schoolsnav">Schools<span></span></a>
//         <a href="/housenav">Housing<span></span></a>
//         <a href="/comment">Comments<span></span></a>
//         <a href="#">Contact<span></span></a>
//       </nav>
//     </>
//   );
// }

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import logo from '../logo.png';

// function Navbar() {
//   const [isScrollingUp, setIsScrollingUp] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setIsScrollingUp(prevScrollPos > currentScrollPos);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: sans-serif;
//           }
//           body {
//             position; fixed;
//             // display: flex;
//             justify-content: center;
//             align-items: center;
//             min-height: 100vh;
//             background: #345; /* Body background color */
//             margin: 0;
//             padding: 3px 2px;
//             color: #000;
//           }
//           nav {
//             position: fixed;
//             top: 0;
//             left: 0%;
//             width: 100%;
//             background-color: #000; /* Fixed navbar background color */
//             padding: 10px 20px;
//             box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//             z-index: 1000;
//           }
//           nav a {
//             position: relative;
//             font-size: 1cm;
//             font-weight: 100;
//             color: #fff; /* Text color */
//             text-decoration: none;
//             padding: 6px 15px;
//             transition: 0.5s;
//           }
//           nav a:hover {
//             color: #8ef;
//           }
//           nav a span {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             z-index: -1;
//             border-bottom: 2px solid #8ef; /* Border color on hover */
//             border-radius: 15px;
//             transform: scale(0) translateY(50px);
//             opacity: 0;
//             transition: 0.5s;
//           }
//           nav a:hover span {
//             transform: scale(1) translateY(0);
//             opacity: 1;
//           }
//           // .logo {
//           //   display: inline-block;
//           //   width: 40px; /* Adjust the width of your logo */
//           //   height: auto;
//           //   margin-right: 10px; /* Adjust the spacing between the logo and other links */
//           // }
//           // .logo {
//           //   width: 100px; /* Adjust the width of the logo */
//           //   height: 50px; /* Maintain aspect ratio */
//           //   margin-right: 10px; /* Adjust spacing if needed */
//           // }
//           .logo {
//             height: 50px; /* Set the height of the logo to match the navbar height */
//             margin-right: 10px; /* Adjust spacing if needed */
//           }
//         `}
//       </style>
//       <nav className="navbar">
//         {/* Your navbar content goes here */}
//         <a href="/"><img src= {logo} alt="Logo" className="logo" /></a>
//         <a href="searcharea">Search<span></span></a>
//         <a href="/amenitiesnav">Amenities<span></span></a>
//         <a href="/crimenav">Crime<span></span></a>
//         <a href="/transportnav">Transport<span></span></a>
//         <a href="/schoolsnav">Schools<span></span></a>
//         <a href="/housenav">Housing<span></span></a>
//         {/* <a href="/comment">Comments<span></span></a> */}
//         <a href="#">Contact<span></span></a>
//       </nav>
//     </>
//   );
// }

// export default Navbar;



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
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Lobster';
          }
          body {
            background-color: #E4E4E1;
            background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
 	          background-blend-mode: normal, multiply;
            margin: 0;
            padding: 0;
            color: #000;
          }
          nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #000;
            padding: 10px 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            border-radius: 0 0 20px 20px;
          }
          nav a {
            font-size: 2rem;
            font-weight: 400;
            color: #fff;
            text-decoration: none;
            // margin-right: 15px;
            padding: 4px 15px;
            transition: color 0.3s ease;
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
            border-bottom: 2px solid #8ef;
            border-radius: 15px;
            transform: scale(0) translateY(50px);
            opacity: 0;
            transition: transform 0.5s, opacity 0.5s;
          }
          nav a:hover span {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          .logo {
            width: 100%;
            height: 60px;
            margin-right: 10px;
          }
        `}
      </style>
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
