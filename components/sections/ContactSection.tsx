
import React from 'react';
import { Section } from '../Section';
import { PERSONAL_INFO } from '../../constants';
import { MailIcon, MapIcon, PhoneIcon } from '../icons/ContactIcons';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Contact" subtitle="Get in Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full text-teal-400">
                <MailIcon />
              </div>
              <div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-300 hover:text-teal-400">{PERSONAL_INFO.email}</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full text-teal-400">
                <MapIcon />
              </div>
              <div>
                <p className="text-gray-300">{PERSONAL_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full text-teal-400">
                <PhoneIcon />
              </div>
              <div>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-teal-400">{PERSONAL_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
           <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
          <form action="#" className="space-y-4">
            <div>
              <input type="text" placeholder="Name" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" />
            </div>
            <div>
              <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" />
            </div>
            <div>
              <textarea placeholder="Message" rows={5} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"></textarea>
            </div>
            <div>
              <button type="submit" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
