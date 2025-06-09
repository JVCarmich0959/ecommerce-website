import React from 'react';
import { Star } from 'lucide-react';

interface Props {
  rating: number;
}

export const StarRating: React.FC<Props> = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-current' : ''}`} />
    ))}
  </div>
);
