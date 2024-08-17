import React from 'react';
import Banner from './Banner';
import CategorySection from './CategorySection';
import RecommendationsSection from './RecommendationSection';
import TrendingSection from './TrendingSection';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <CategorySection />
      <RecommendationsSection />
      <TrendingSection />
    </div>
  );
};

export default Home;
