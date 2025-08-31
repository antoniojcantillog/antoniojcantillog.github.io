
import React from 'react';
import { Section } from '../Section';
import { ABOUT_ME } from '../../constants';
import { DatabaseIcon, GlobeIcon, ChipIcon, CodeIcon, CloudIcon } from '../icons/TechIcons';

const iconMap = [DatabaseIcon, GlobeIcon, ChipIcon, CodeIcon, CloudIcon];

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="Who Am I?" subtitle="About Me">
      <div className="text-lg text-gray-300 leading-relaxed space-y-4 max-w-4xl">
        <p>{ABOUT_ME.bio1}</p>
        <p>{ABOUT_ME.bio2}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        {ABOUT_ME.services.map((service, index) => {
          const IconComponent = iconMap[index % iconMap.length];
          return (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center justify-center hover:bg-teal-900/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="text-teal-400 mb-4">
                <IconComponent />
              </div>
              <h3 className="text-white font-semibold text-lg">{service.title}</h3>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
