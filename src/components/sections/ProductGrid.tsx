import React from 'react';
import { products } from '../../data/products';
import { useCategoryContext } from '../../context/CategoryContext';
import ProductCard from '../ecommerce/ProductCard';

const ProductGrid: React.FC = () => {
  const { selected } = useCategoryContext();
  const filtered = selected === 'All' ? products : products.filter(p => p.category === selected);
  if (!filtered.length) return <div className="text-center py-8">No products.</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
