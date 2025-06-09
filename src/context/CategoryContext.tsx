import React, { createContext, useState, useContext } from 'react';

interface CategoryContextValue {
  selected: string;
  setSelected: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextValue | null>(null);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<string>('All');

  return (
    <CategoryContext.Provider value={{ selected, setSelected }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const ctx = useContext(CategoryContext);
  if (!ctx) throw new Error('useCategoryContext must be inside CategoryProvider');
  return ctx;
};
