import React, { useEffect, useState } from 'react';
import ProductCard from '../ecommerce/ProductCard';
import { Product } from '../../data/products';

interface Props {
  /**
   * Unique identifier for the current user or session.
   */
  userId?: string;
}

const RecommendedProducts: React.FC<Props> = ({ userId }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `https://api.example.com/recommendations?userId=${userId}`
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId]);

  if (loading) {
    return <div className="text-center py-8">Loading recommendations...</div>;
  }

  if (!products.length) {
    return <div className="text-center py-8">No recommendations available.</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Recommended For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
