// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Grid, List } from 'lucide-react';
import useScrollTop from './hooks/useScrollTop';
import { useCart } from './context/CartContext';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Notifications from './components/Notifications';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';

import { products } from './data/products';
import { heroSlides } from './data/slides';
import { stats } from './data/stats';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showScrollTop = useScrollTop();

  // Cart & Wishlist from context
  const { cartItems, wishlist, addToCart, toggleWishlist } = useCart();

  // Local notifications
  const [notifications, setNotifications] = useState([]);
  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  // Filter & sort products
  const filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'newest': return b.id - a.id;
        default: return b.reviews - a.reviews;
      }
    });

  // Autoplay carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Notifications notifications={notifications} />
      <ScrollToTopButton show={showScrollTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <Header
        cartItems={cartItems}
        wishlist={wishlist}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(v => !v)}
        searchQuery={searchQuery}
        onSearchChange={e => setSearchQuery(e.target.value)}
        onWishlistClick={id => { toggleWishlist(id); addNotification('Wishlist updated', 'info'); }}
        onCartClick={product => { addToCart(product); addNotification('Added to cart', 'success'); }}
      />

      <HeroCarousel
        slides={heroSlides}
        current={currentSlide}
        onPrev={() => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
        onNext={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
        onSelect={idx => setCurrentSlide(idx)}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our handpicked selection of premium items</p>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'text-purple-600' : 'text-gray-400'}><Grid /></button>
            <button onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'text-purple-600' : 'text-gray-400'}><List /></button>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 border rounded">
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <CategoryFilter
          categories={["All", "Electronics", "Fashion", "Accessories", "Home", "Food"]}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <ProductGrid
          products={filteredProducts}
          viewMode={viewMode}
          onAddToCart={product => { addToCart(product); addNotification('Added to cart', 'success'); }}
          onToggleWishlist={id => { toggleWishlist(id); addNotification('Wishlist updated', 'info'); }}
          wishlist={wishlist}
        />
      </section>

      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center space-x-3 text-center">
                <stat.icon className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
