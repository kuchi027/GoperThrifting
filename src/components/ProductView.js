import React from 'react';
import Header from './Header';
import './ProductView.css'; 

const ProductView = () => {
  return (
    <div>
      <div className="product-view-container">
        <div className="product-main">
          <div className="product-image">
            <div className="image-placeholder"></div>
          </div>
          <div className="product-info">
            <h1>Nike 6890</h1>
            <div className="price">$600</div>
            <div className="actions-placeholder"></div>
          </div>
        </div>
        <div className="product-details">
          <div className="details-header">
            Details and Description
          </div>
          <div className="details-content">
            <p>Description of the product goes here.</p>
          </div>
        </div>
        <div className="seller-info">
          <div className="seller-header">
            Seller Information
          </div>
          <div className="seller-content">
            <p>Seller Name: John Doe</p>
            <p>Location: Minneapolis, MN</p>
          </div>
        </div>
        <button className="chat-button">Chat with Seller</button>
      </div>
    </div>
  );
};

export default ProductView;
