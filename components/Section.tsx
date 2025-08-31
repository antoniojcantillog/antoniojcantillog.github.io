
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="min-h-screen py-20 px-4 sm:px-8 md:px-16 bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <span className="text-teal-400 font-semibold tracking-widest uppercase">{subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};
