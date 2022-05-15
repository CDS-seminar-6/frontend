import Profile from 'pages/Profile';
import SurfitProfile from 'pages/SurfitProfile';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<SurfitProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
