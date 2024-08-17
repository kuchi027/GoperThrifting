
import React from 'react';
import ItemComponent from './ItemComponent'; 
import './TrendingSection.css'; 

const TrendingSection = () => {
  return (
    <section className="trending-section">
      <h2>Trending</h2>
      <div className="trending-list">
        <ItemComponent
          imageUrl="/path/to/image1.jpg"
          title="Trending Item 1"
          size=""
          material=""
          price=""
        />
        <ItemComponent
          imageUrl="/path/to/image2.jpg"
          title="Trending Item 2"
          size=""
          material=""
          price=""
        />
        <ItemComponent
          imageUrl="/path/to/image3.jpg"
          title="Trending Item 3"
          size=""
          material=""
          price=""
        />
        <ItemComponent
          imageUrl="/path/to/image4.jpg"
          title="Trending Item 4"
          size=""
          material=""
          price=""
        />
      </div>
    </section>
  );
};

export default TrendingSection;

