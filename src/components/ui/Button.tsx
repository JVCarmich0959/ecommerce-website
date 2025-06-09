import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base =
    variant === 'primary'
      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
      : 'bg-white text-gray-700 hover:bg-gray-100';
  return (
    <button
      className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${base} ${className}`}
      {...props}
    />
  );
};
