import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'; 
import SellItemPopup from './SellItemPopup';
import './Header.css';

const Header = () => {
  const [showSellItemPopup, setShowSellItemPopup] = useState(false);
  const navigate = useNavigate(); 

  const handleSellItemClick = () => {
    setShowSellItemPopup(true);
  };

  const handleClosePopup = () => {
    setShowSellItemPopup(false);
  };

  const handleFavoriteClick = () => {
    navigate('/favorites');
  };

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  return (
    <>
      <header className="header">
        <div className="logo">LOGO</div>
        <nav>
          <a href="/">Home</a>
          <a href="/buyer-listing">Buyer listing</a>
          <Button variant="contained" color="primary" onClick={handleSellItemClick}>
            Sell Item
          </Button>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <Button variant="outlined">Search</Button>
        </div>
        <div className="icons">
          <IconButton color="primary" onClick={handleFavoriteClick}>
            <FavoriteIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleCartClick}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="primary">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </header>
      {showSellItemPopup && <SellItemPopup onClose={handleClosePopup} />}
    </>
  );
};

export default Header;


