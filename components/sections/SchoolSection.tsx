
import React from 'react';
import { Section } from '../Section';
import { Accordion } from '../Accordion';
import { SCHOOL } from '../../constants';

export const SchoolSection: React.FC = () => {
  return (
    <Section id="school" title="School" subtitle="Academic Background">
       <div className="max-w-4xl mx-auto">
        <Accordion items={SCHOOL} />
      </div>
    </Section>
  );
};
