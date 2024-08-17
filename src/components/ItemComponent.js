import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemComponent.css';

const ItemComponent = ({ imageUrl, title, size, material, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-view');
  };

  return (
    <div className="item-component" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="item-image" />
      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{size} - {material}</p>
        <p className="item-price">From <strong>${price}</strong></p>
      </div>
    </div>
  );
};

export default ItemComponent;
