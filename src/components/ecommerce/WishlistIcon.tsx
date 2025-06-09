import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../hooks/useWishlist';

const WishlistIcon: React.FC = () => {
  const { wishlist } = useWishlist();
  return (
    <div className="relative">
      <Heart className="h-6 w-6" />
      {wishlist.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {wishlist.length}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon;
