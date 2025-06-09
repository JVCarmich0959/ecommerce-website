import React from 'react';
import { Product } from '../../data/products';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { Heart } from 'lucide-react';
import { StarRating } from '../ui/StarRating';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const badgeColor =
    product.badge === 'Best Seller'
      ? 'yellow'
      : product.badge === 'New'
      ? 'green'
      : product.badge === 'Hot'
      ? 'red'
      : 'blue';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        {product.badge && <Badge label={product.badge} color={badgeColor as any} />}
        <button onClick={() => toggleWishlist(product.id)} className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'}`}> <Heart className="h-5 w-5" /></button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">{product.name}</h3>
        <div className="flex items-center mb-2">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice > product.price && <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>}
          </div>
          {product.originalPrice > product.price && (
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">Save ${product.originalPrice - product.price}</span>
          )}
        </div>
        <Button onClick={() => addToCart(product)} className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
