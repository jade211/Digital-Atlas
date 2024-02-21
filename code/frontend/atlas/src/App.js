import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AmenitiesNav from './components/amenities-navbar';
import Home from './components/home';
import AreaSearch from './components/areasearch';
import TransportNav from './components/transportation-navbar';
import CrimeNav from './components/crime-navbar';
import Navbar from './components/navbar';
import SchoolsNav from './components/school-navbar';
import HouseNav from './components/house-navbar';
import Comment from './components/comment';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/searcharea' element={<AreaSearch />} />
          <Route path='/amenitiesnav' element={<AmenitiesNav />} />
          <Route path='/crimenav' element={<CrimeNav />} />
          <Route path='/schoolsnav' element={<SchoolsNav />} />
          <Route path='/transportnav' element={<TransportNav />} />
          <Route path='/housenav' element={<HouseNav />} />
          <Route path='/comment' element={<Comment />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
