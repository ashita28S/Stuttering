import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/People" element={<People />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
