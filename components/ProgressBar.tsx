
import React from 'react';

interface ProgressBarProps {
  skill: string;
  level: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ skill, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{skill}</span>
        <span className="text-sm font-medium text-teal-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-teal-500 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};
