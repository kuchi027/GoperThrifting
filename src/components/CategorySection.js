import React from 'react';
import ItemComponent from './ItemComponent'; 
import './CategorySection.css'; 

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Shop By Category</h2>
      <div className="category-list">
        <ItemComponent
          imageUrl="/path/to/category1.jpg"
          title="Men's Clothing"
          size=""
          material=""
          price=""
        />
        <ItemComponent
          imageUrl="/path/to/category2.jpg"
          title="Women's Clothing"
          size=""
          material=""
          price=""
        />
        <ItemComponent
          imageUrl="/path/to/category3.jpg"
          title="Accessories"
          size=""
          material=""
          price=""
        />
        <ItemComponent
          imageUrl="/path/to/category4.jpg"
          title="Footwear"
          size=""
          material=""
          price=""
        />
      </div>
    </section>
  );
};

export default CategorySection;
