// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/home';
// import Amenities from './components/amenities';
// // import Transport from './components/transportation';
// import Crime from './components/crime';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar/>
//         {/* <Transport /> */}
//         <Amenities />
//         <Crime />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


































// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Amenities from './components/amenities';
import Navbar from './components/home';
import Transport from './components/transportation';
// import Crime from './components/crime';
import Schools from './components/school';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route path='/amenities' element={<Amenities />} />
          {/* <Route path='/crime' element={<Crime />} /> */}
          <Route path='/transport' element={<Transport />} />
          <Route path='/school' element={<Schools />} />
        </Routes>
      </div>
    </Router>


    // <div className="App">
    //   <header className="App-header">
    //     <Navbar />
    //     <Amenities />
    //     {/* <Transport /> */}
    //     <Crime />
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
