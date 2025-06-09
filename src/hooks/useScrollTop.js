// src/hooks/useScrollTop.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to track if the user has scrolled past a certain threshold.
 * @param {number} threshold - Scroll Y value at which to show the scroll-to-top button.
 * @returns {boolean} show - Whether the scroll-to-top button should be visible.
 */
export default function useScrollTop(threshold = 400) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case user is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return show;
}