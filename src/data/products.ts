export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  badge: string;
  quantity?: number;
};

// TODO: Connect real API
export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 124,
    category: 'Electronics',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Designer Sneakers',
    price: 189,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 89,
    category: 'Fashion',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 449,
    originalPrice: 549,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 203,
    category: 'Electronics',
    badge: 'Hot',
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: 129,
    originalPrice: 159,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 67,
    category: 'Accessories',
    badge: '',
  },
  {
    id: 5,
    name: 'Minimalist Desk Lamp',
    price: 89,
    originalPrice: 119,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 45,
    category: 'Home',
    badge: '',
  },
  {
    id: 6,
    name: 'Organic Coffee Beans',
    price: 24,
    originalPrice: 29,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 156,
    category: 'Food',
    badge: 'Organic',
  },
];

