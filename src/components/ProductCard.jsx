// src/components/ProductCard.jsx
import React from 'react';
import { Heart, Star } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onToggleWishlist, inWishlist }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <div className="flex items-center mt-1">
          {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-500" />
          ))}
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm line-through text-gray-400">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => onAddToCart(product)}
          className="flex-1 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="ml-2 p-2 rounded hover:bg-gray-100 transition"
        >
          <Heart className={inWishlist ? 'text-red-500' : 'text-gray-400'} />
        </button>
      </div>
    </div>
  );
}
