import React from 'react';
import { Button } from '../ui/Button';

const Newsletter: React.FC = () => (
  <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Deals</h2>
      <p className="text-xl text-purple-100 mb-8">Subscribe to our newsletter and never miss out on exclusive offers</p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-purple-300" />
        <Button className="bg-white text-purple-600">Subscribe</Button>
      </div>
    </div>
  </section>
);

export default Newsletter;
