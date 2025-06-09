// src/components/Header.jsx
import React from 'react';
import { ShoppingCart, Heart, Menu, X, Search, User, Truck } from 'lucide-react';

export default function Header({
  cartItems,
  wishlist,
  isMenuOpen,
  onToggleMenu,
  searchQuery,
  onSearchChange,
  onWishlistClick,
  onCartClick
}) {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ModernShop
            </div>
            <div className="hidden md:flex items-center text-sm text-gray-600">
              <Truck className="h-4 w-4 mr-1" />
              Free shipping on orders over $50
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Products</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Categories</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Deals</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={onSearchChange}
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <button
              onClick={onWishlistClick}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 relative group"
            >
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Wishlist
              </span>
            </button>

            <button
              onClick={onCartClick}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 relative group"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Cart ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </button>

            <button
              onClick={onToggleMenu}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

