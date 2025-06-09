import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroCarousel from '../components/sections/HeroCarousel';
import CategoryFilter from '../components/sections/CategoryFilter';
import ProductGrid from '../components/sections/ProductGrid';
import RecommendedProducts from '../components/sections/RecommendedProducts';
import Newsletter from '../components/sections/Newsletter';

const Home: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <HeroCarousel />
    <CategoryFilter />
    <ProductGrid />
    <RecommendedProducts userId="demo-user" />
    <Newsletter />
    <Footer />
  </div>
);

export default Home;
