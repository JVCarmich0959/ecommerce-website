// src/components/ScrollToTopButton.jsx
import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton({ show, onClick }) {
  if (!show) return null;
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}