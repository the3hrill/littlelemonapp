import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage.js';
import LogIn from './LogIn';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
