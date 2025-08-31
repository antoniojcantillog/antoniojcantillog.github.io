
import React from 'react';
import { Section } from '../Section';
import { ProgressBar } from '../ProgressBar';
import { SKILLS } from '../../constants';

export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="My Skills" subtitle="My Specialty">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {SKILLS.map((skill, index) => (
          <ProgressBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </Section>
  );
};
