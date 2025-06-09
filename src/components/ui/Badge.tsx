import React from 'react';

interface Props {
  label: string;
  color: 'yellow' | 'green' | 'red' | 'blue';
}

const colorMap = {
  yellow: 'bg-yellow-400 text-yellow-900',
  green: 'bg-green-400 text-green-900',
  red: 'bg-red-400 text-red-900',
  blue: 'bg-blue-400 text-blue-900',
};

export const Badge: React.FC<Props> = ({ label, color }) => (
  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${colorMap[color]}`}>{label}</span>
);
