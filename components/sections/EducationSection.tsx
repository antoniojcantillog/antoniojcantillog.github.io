
import React from 'react';
import { Section } from '../Section';
import { Accordion } from '../Accordion';
import { EDUCATION } from '../../constants';

export const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="Training">
      <div className="max-w-4xl mx-auto">
        <Accordion items={EDUCATION} />
      </div>
    </Section>
  );
};
