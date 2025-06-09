import React from 'react';
import { categories } from '../../data/categories';
import { useCategoryContext } from '../../context/CategoryContext';
import { Button } from '../ui/Button';

const CategoryFilter: React.FC = () => {
  const { selected, setSelected } = useCategoryContext();
  if (!categories.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selected === category ? 'primary' : 'secondary'}
            onClick={() => setSelected(category)}
            className={selected === category ? 'shadow-lg transform scale-105' : ''}
          >
            {category}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;
