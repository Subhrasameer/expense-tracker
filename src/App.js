//App.js//

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Track from './pages/Track';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/track" element={<Track />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
