import React from 'react';
import ItemComponent from './ItemComponent'; 
import './RecommendationSection.css';

const RecommendationsSection = () => {
  return (
    <section className="recommendations-section">
      <h2>Recommendations</h2>
      <div className="recommendations-list">
        <ItemComponent
          imageUrl="/path/to/image1.jpg"
          title="Nike Sports 96 Hoodie"
          size="L"
          material="Green Cotton"
          price="9.99"
        />
        <ItemComponent
          imageUrl="/path/to/image2.jpg"
          title="Adidas Track Jacket"
          size="M"
          material="Blue Polyester"
          price="15.00"
        />
        <ItemComponent
          imageUrl="/path/to/image3.jpg"
          title="Vintage Levi's Jeans"
          size="32"
          material="Denim"
          price="20.00"
        />
        <ItemComponent
          imageUrl="/path/to/image4.jpg"
          title="Champion Sweatshirt"
          size="XL"
          material="Gray Cotton"
          price="12.50"
        />
      </div>
    </section>
  );
};

export default RecommendationsSection;
