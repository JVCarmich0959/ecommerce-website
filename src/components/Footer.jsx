// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-8 bg-white text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} ModernShop. All rights reserved.
    </footer>
  );
}
