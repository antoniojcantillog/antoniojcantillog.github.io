
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../constants';
import { DownloadIcon } from '../icons/DownloadIcon';

interface HeroSectionProps {
    onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [PERSONAL_INFO.heroBg1, PERSONAL_INFO.heroBg2];
  const greetings = ["Hi! <br>I'm Antonio", "Hi! <br>I'm a DBA"];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bg})`, opacity: index === bgIndex ? 1 : 0 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}
      
      <div className="relative z-10 p-4">
        <h1 
            className="text-5xl md:text-7xl font-bold leading-tight" 
            dangerouslySetInnerHTML={{ __html: greetings[bgIndex] }}>
        </h1>
        <p className="mt-8">
          <a 
            href={PERSONAL_INFO.resumeUrl}
            download 
            className="inline-flex items-center gap-2 bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-colors duration-300 text-lg"
          >
            Download CV <DownloadIcon />
          </a>
        </p>
         <div 
          onClick={() => onNavigate('about')} 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </div>
    </section>
  );
};
