import React from 'react';

const MobileMenu: React.FC = () => (
  <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
    <div className="px-4 py-2 space-y-2">
      <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Home</a>
      <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Products</a>
    </div>
  </div>
);

export default MobileMenu;
