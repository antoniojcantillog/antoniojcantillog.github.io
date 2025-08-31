
import React from 'react';
import { Section } from '../Section';
import { Accordion } from '../Accordion';
import { CERTIFICATIONS } from '../../constants';

export const CertificationsSection: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications" subtitle="Credentials">
      <div className="max-w-4xl mx-auto">
        <Accordion items={CERTIFICATIONS} />
      </div>
    </Section>
  );
};
