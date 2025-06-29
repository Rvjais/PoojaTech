import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import ImageDetailPage from './components/ImageDetailePage/ImageDetailPage'; // Import your new ImageDetailPage component

const App = () => {
  return (
    <Router>
      {/* Navbar and Footer will appear on all pages */}
      <Navbar />

      <Routes>
        {/* Route for your main home page, which is currently handled by the Hero component */}
        {/* When the path is "/", it will render the Hero component */}
        <Route path="/PoojaTech" element={<Hero />} />

        {/* Route for your image detail pages */}
        {/* This path will match URLs like /products/storage/storage-unit-1 or /products/trolly/medical-trolly-2 */}
        {/* The :category and :id are dynamic parameters that ImageDetailPage will use */}
        <Route path="/products/:category/:id" element={<ImageDetailPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
