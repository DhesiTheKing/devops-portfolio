import React from 'react';

interface TechBadgeProps {
  name: string;
  color?: string;
  icon?: React.ReactNode;
}

export default function TechBadge({ name, color = 'blue', icon }: TechBadgeProps) {
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    green: 'bg-green-600 hover:bg-green-500',
    orange: 'bg-orange-600 hover:bg-orange-500',
    purple: 'bg-purple-600 hover:bg-purple-500',
    red: 'bg-red-600 hover:bg-red-500',
    yellow: 'bg-yellow-600 hover:bg-yellow-500',
    gray: 'bg-gray-600 hover:bg-gray-500',
  };

  return (
    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium text-white transition-colors duration-200 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{name}</span>
    </div>
  );
}