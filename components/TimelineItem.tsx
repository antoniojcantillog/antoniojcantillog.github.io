
import React from 'react';
import { Experience } from '../types';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast = false }) => {
  return (
    <div className="relative pl-12 pb-12">
      {/* Vertical line */}
      {!isLast && <div className="absolute left-5 top-5 -bottom-4 w-0.5 bg-gray-700"></div>}
      
      {/* Icon */}
      <div className="absolute left-0 top-2 flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white">
        <BriefcaseIcon />
      </div>

      {/* Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-teal-300 mb-1">{experience.duration}</p>
        <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
        <h4 className="text-lg font-semibold text-gray-400 mb-4">{experience.company}</h4>

        <div className="space-y-4">
            <div>
                <h5 className="font-bold text-white mb-2">Functions:</h5>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                {experience.functions.map((func, index) => (
                    <li key={index}>{func}</li>
                ))}
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-white mb-2">Achievements:</h5>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                {experience.achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
