
import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { EducationSection } from './components/sections/EducationSection';
import { SchoolSection } from './components/sections/SchoolSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);
    const scrollPosition = mainContentRef.current ? mainContentRef.current.scrollTop + window.innerHeight / 3 : 0;

    for (const section of sections) {
        if(section) {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                setActiveSection(section.id);
                break;
            }
        }
    }
  };

  useEffect(() => {
    const contentDiv = mainContentRef.current;
    if (contentDiv) {
      contentDiv.addEventListener('scroll', handleScroll);
      return () => contentDiv.removeEventListener('scroll', handleScroll);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex flex-col md:flex-row">
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
        <main ref={mainContentRef} className="w-full md:w-3/4 lg:w-4/5 h-screen overflow-y-auto scroll-smooth">
          <HeroSection onNavigate={scrollToSection}/>
          <AboutSection />
          <SkillsSection />
          <CertificationsSection />
          <EducationSection />
          <SchoolSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default App;
