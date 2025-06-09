import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroCarousel from '../components/sections/HeroCarousel';
import CategoryFilter from '../components/sections/CategoryFilter';
import ProductGrid from '../components/sections/ProductGrid';
import Newsletter from '../components/sections/Newsletter';
import ChatAssistant from '../components/ai/ChatAssistant';

const Home: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <HeroCarousel />
    <CategoryFilter />
    <ProductGrid />
    <Newsletter />
    <Footer />
    <ChatAssistant />
  </div>
);

export default Home;
