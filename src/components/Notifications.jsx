// src/components/Notifications.jsx
import React from 'react';

export default function Notifications({ notifications }) {
  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm animate-slide-in-right ${
            notification.type === 'success'
              ? 'bg-green-500/90 text-white'
              : notification.type === 'error'
              ? 'bg-red-500/90 text-white'
              : 'bg-blue-500/90 text-white'
          }`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
}
