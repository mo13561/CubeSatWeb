import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import Bookings from './Pages/Bookings';
import Landing from './components/Landing';

function App() {
//  const Header11 = styled.h1`
//    text-align: center;
//    color: blue;
//  `;

//  const Centdiv = styled.div`
//    display: flex;
//    justify-content:center; // centers in the flex direction and the default flex-direction is row
//    align-items:center; // centers perpendicular to the flex direction
//    height: 100vh; // 100% view height
//    width: 100vw; // 100% view width
//   position: absolute; // so it goes behind the current content
//  `;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

export default App;
