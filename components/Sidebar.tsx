import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { ResumeData, ThemeClasses } from '../types';

interface SidebarProps {
  data: ResumeData;
  theme: ThemeClasses;
}

export const Sidebar: React.FC<SidebarProps> = ({ data, theme }) => {
  return (
    <aside className={`w-full md:w-80 ${theme.sidebarBg} ${theme.sidebarText} p-8 flex-shrink-0 transition-colors duration-300 print:bg-white print:text-black print:w-full print:p-0 print:border-b-2`}>
      <div className="mb-12">
        <h2 className={`text-xl font-bold uppercase tracking-wider mb-6 border-b ${theme.sidebarBorder} pb-2 print:border-black`}>Contact</h2>
        <ul className="space-y-4 text-sm font-light">
          <li className="flex items-start gap-3">
            <Mail className={`w-5 h-5 flex-shrink-0 ${theme.sidebarMuted} print:text-black`} />
            <a href={`mailto:${data.contact.email}`} className={`hover:${theme.sidebarMuted} transition-colors underline-offset-4 hover:underline break-all`}>
              {data.contact.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Linkedin className={`w-5 h-5 flex-shrink-0 ${theme.sidebarMuted} print:text-black`} />
            <a 
              href={`https://${data.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:${theme.sidebarMuted} transition-colors underline-offset-4 hover:underline break-all`}
            >
              {data.contact.linkedin}
            </a>
          </li>
          {data.contact.location && (
            <li className="flex items-start gap-3">
              <MapPin className={`w-5 h-5 flex-shrink-0 ${theme.sidebarMuted} print:text-black`} />
              <span>{data.contact.location}</span>
            </li>
          )}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className={`text-xl font-bold uppercase tracking-wider mb-6 border-b ${theme.sidebarBorder} pb-2 print:border-black`}>Top Skills</h2>
        <ul className="space-y-2 text-sm font-light">
          {data.skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 ${theme.sidebarMuted} rounded-full print:bg-black`}></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className={`text-xl font-bold uppercase tracking-wider mb-6 border-b ${theme.sidebarBorder} pb-2 print:border-black`}>Languages</h2>
        <ul className="space-y-3 text-sm font-light">
          {data.languages.map((lang, index) => (
            <li key={index} className="flex flex-col">
              <span className="font-medium">{lang.split('(')[0]}</span>
              <span className={`${theme.sidebarMuted} text-xs print:text-gray-600`}>
                {lang.includes('(') ? `(${lang.split('(')[1]}` : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};