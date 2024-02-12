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








import React, { useState, useEffect } from 'react';

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
            font-family: sans-serif;
          }
          body {
            position; fixed;
            // display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #345; /* Body background color */
            margin: 0;
            padding: 3px 2px;
            color: #000;
          }
          nav {
            position: fixed;
            top: 0;
            left: 0%;
            width: 100%;
            background-color: #000; /* Fixed navbar background color */
            padding: 10px 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1000;
          }
          nav a {
            position: relative;
            font-size: 1cm;
            font-weight: 100;
            color: #fff; /* Text color */
            text-decoration: none;
            padding: 6px 19px;
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
            border-bottom: 2px solid #8ef; /* Border color on hover */
            border-radius: 15px;
            transform: scale(0) translateY(50px);
            opacity: 0;
            transition: 0.5s;
          }
          nav a:hover span {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        `}
      </style>
      <nav className="navbar">
        {/* Your navbar content goes here */}
        <a href="/">Home<span></span></a>
        <a href="searcharea">Search<span></span></a>
        <a href="/amenitiesnav">Amenities<span></span></a>
        <a href="/crimenav">Crime<span></span></a>
        <a href="/transportnav">Transport<span></span></a>
        <a href="/schoolsnav">Schools<span></span></a>
        <a href="/housenav">Housing<span></span></a>
        <a href="/comment">Comments<span></span></a>
        <a href="#">Contact<span></span></a>
      </nav>
    </>
  );
}

export default Navbar;