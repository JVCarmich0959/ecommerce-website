import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

const CartIcon: React.FC = () => {
  const { items } = useCart();
  return (
    <div className="relative">
      <ShoppingCart className="h-6 w-6" />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {items.reduce((s, i) => s + i.quantity, 0)}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
