
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { Certification, Education, School } from '../types';

interface AccordionProps {
  items: (Certification | Education | School)[];
}

interface AccordionItemProps {
  item: Certification | Education | School;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700">
            <h2>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-300 hover:bg-gray-800 transition-colors"
                    onClick={onClick}
                    aria-expanded={isOpen}
                >
                    <span className="flex-1">{`${item.date} | ${item.title}`}</span>
                    <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
                </button>
            </h2>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
                <div className="p-5 border border-t-0 border-gray-700 bg-gray-800">
                    <img src={item.imageUrl} className="w-full h-auto rounded-lg" alt={item.title} />
                </div>
            </div>
        </div>
    );
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="accordion-flush">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </div>
  );
};
