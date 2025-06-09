// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, viewMode, onAddToCart, onToggleWishlist, wishlist }) {
  return (
    <div className={viewMode === 'grid' ? 'grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col space-y-6'}>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          inWishlist={wishlist.includes(p.id)}
        />
      ))}
    </div>
  );
}