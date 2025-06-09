export type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
};

// TODO: Connect real API
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Summer Collection 2025',
    subtitle: 'Discover the latest trends',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    cta: 'Shop Now',
  },
  {
    id: 2,
    title: 'Tech Essentials',
    subtitle: 'Power up your lifestyle',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    cta: 'Explore',
  },
  {
    id: 3,
    title: 'Premium Quality',
    subtitle: 'Crafted for perfection',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    cta: 'View Collection',
  },
];
