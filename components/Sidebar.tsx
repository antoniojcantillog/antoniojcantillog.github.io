
import React from 'react';
import { PERSONAL_INFO, NAV_ITEMS } from '../constants';
import { LinkedinIcon } from './icons/LinkedinIcon';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 bg-gray-800 text-center p-8 md:h-screen md:sticky top-0 flex flex-col items-center">
      <div className="flex-grow">
        <img
          src={PERSONAL_INFO.profileImageUrl}
          alt="Antonio Cantillo"
          className="rounded-full w-32 h-32 mx-auto border-4 border-teal-400 object-cover"
        />
        <h1 className="text-2xl mt-4 text-white">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>{PERSONAL_INFO.name}</a>
        </h1>
        <div className="mt-2 text-teal-300">
          <p>{PERSONAL_INFO.title}</p>
          <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 hover:text-white transition-colors">
            <LinkedinIcon />
          </a>
        </div>

        <nav className="mt-8">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="my-2">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
                  className={`block py-2 px-4 rounded transition-all duration-300 text-lg ${
                    activeSection === item.id 
                    ? 'bg-teal-500 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <footer className="mt-8 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Antonio Cantillo. All rights reserved.</p>
      </footer>
    </aside>
  );
};
