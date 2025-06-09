// src/components/CategoryFilter.jsx
import React from 'react';                     // React core
import { Filter } from 'lucide-react';         // any icons or 3rd-party

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
            selected === cat
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
