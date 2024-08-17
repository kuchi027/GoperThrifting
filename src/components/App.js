import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ProductView from './ProductView';
import Favorites from './Favorites';
import Cart from './Cart';


const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-view" element={<ProductView />} />
          <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
