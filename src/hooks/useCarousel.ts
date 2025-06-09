import { useState, useEffect } from 'react';

export const useCarousel = (length: number) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);
  return { current, setCurrent };
};
