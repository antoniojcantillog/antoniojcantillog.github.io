
import React from 'react';
import { Section } from '../Section';
import { TimelineItem } from '../TimelineItem';
import { EXPERIENCES } from '../../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" subtitle="Career Path">
      <div className="relative">
        {EXPERIENCES.map((exp, index) => (
          <TimelineItem 
            key={index} 
            experience={exp} 
            isLast={index === EXPERIENCES.length - 1} 
          />
        ))}
      </div>
    </Section>
  );
};
