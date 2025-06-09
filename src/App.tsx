import React from 'react';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CategoryProvider } from './context/CategoryContext';
import './index.css';

const App: React.FC = () => (
  <CartProvider>
    <WishlistProvider>
      <CategoryProvider>
        <Home />
      </CategoryProvider>
    </WishlistProvider>
  </CartProvider>
);

export default App;
