import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { useSearchSuggestions } from '../../hooks/useSearchSuggestions';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const { items } = useCart();
  const { wishlist } = useWishlist();
  const [open, setOpen] = useState(false);
  const { query, setQuery, suggestions } = useSearchSuggestions();
  const [focused, setFocused] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ModernShop
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Products</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              {focused && suggestions.length > 0 && (
                <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {suggestions.map((s, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="p-2 text-gray-700 hover:text-purple-600">
              <User className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-700 relative">
              <span className="sr-only">Wishlist</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6c-1.1-1-2.6-1.6-4.1-1.6-2.2 0-4.1 1.2-5.2 3-1.1-1.8-3-3-5.2-3C4.6 3 3.1 3.6 2 4.6 0.7 5.9 0 7.7 0 9.6c0 2 0.8 3.8 2.2 5.2l9.8 9.2 9.8-9.2c1.4-1.4 2.2-3.2 2.2-5.2 0-1.9-0.7-3.7-2-5z" /></svg>
              {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{wishlist.length}</span>}
            </button>
            <button className="p-2 text-gray-700 relative">
              <span className="sr-only">Cart</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
              {items.length > 0 && <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{items.reduce((s, i) => s + i.quantity, 0)}</span>}
            </button>
            <button className="md:hidden p-2 text-gray-700" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && <MobileMenu />}
    </header>
  );
};

export default Header;
