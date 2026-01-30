import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ExperienceItem } from './components/ExperienceItem';
import { resumeData } from './data';
import { Printer, Palette } from 'lucide-react';
import { ThemeClasses } from './types';

const themes: Record<'classic' | 'skims', ThemeClasses> = {
  classic: {
    appBg: 'bg-white',
    sidebarBg: 'bg-sidebar-bg',
    sidebarText: 'text-white',
    sidebarMuted: 'text-gray-300',
    sidebarBorder: 'border-gray-500',
    mainText: 'text-gray-900',
    mainMuted: 'text-gray-500',
    mainBorder: 'border-gray-200',
    accent: 'bg-green-500'
  },
  skims: {
    appBg: 'bg-skims-bg',
    sidebarBg: 'bg-skims-sidebar',
    sidebarText: 'text-white',
    sidebarMuted: 'text-skims-accent',
    sidebarBorder: 'border-skims-muted',
    mainText: 'text-skims-text',
    mainMuted: 'text-skims-muted',
    mainBorder: 'border-skims-border',
    accent: 'bg-skims-accent'
  }
};

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'classic' | 'skims'>('skims');
  const theme = themes[currentTheme];

  const handlePrint = () => {
    window.print();
  };

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'classic' ? 'skims' : 'classic');
  };

  return (
    <div className={`min-h-screen flex flex-col md:flex-row font-sans transition-colors duration-300 ${theme.appBg} ${theme.mainText} shadow-2xl max-w-[1400px] mx-auto print:shadow-none print:max-w-none print:bg-white print:text-black`}>
      {/* Sidebar Navigation / Info */}
      <Sidebar data={resumeData} theme={theme} />

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-16 overflow-y-auto print:overflow-visible print:p-0">
        
        {/* Header / Name */}
        <header className={`mb-16 border-b pb-8 ${theme.mainBorder} print:mb-8 print:pb-4`}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className={`text-5xl md:text-6xl font-serif font-bold ${theme.mainText} mb-4 tracking-tight leading-none`}>
                {resumeData.name}
              </h1>
              <p className={`text-xl md:text-2xl ${theme.mainMuted} font-light max-w-2xl leading-snug`}>
                {resumeData.tagline}
              </p>
              <p className={`${theme.mainMuted} mt-2 flex items-center gap-2 print:hidden`}>
                <span className={`w-2 h-2 rounded-full animate-pulse ${theme.accent}`}></span>
                Available for new opportunities
              </p>
            </div>
            <div className="flex gap-2 print:hidden">
              <button 
                onClick={toggleTheme}
                className={`p-3 rounded-full hover:bg-black/5 transition-colors ${theme.mainMuted}`}
                aria-label={`Switch to ${currentTheme === 'classic' ? 'Skims' : 'Classic'} theme`}
                title={`Switch to ${currentTheme === 'classic' ? 'Skims' : 'Classic'} theme`}
              >
                <Palette className="w-6 h-6" />
              </button>
              <button 
                onClick={handlePrint}
                className={`p-3 rounded-full hover:bg-black/5 transition-colors ${theme.mainMuted}`}
                aria-label="Print Resume"
                title="Print Resume"
              >
                <Printer className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-16 print:mb-8" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className={`text-2xl font-bold uppercase tracking-widest ${theme.mainMuted} mb-8 border-l-4 ${currentTheme === 'classic' ? 'border-gray-900' : 'border-skims-sidebar'} pl-4 print:text-black print:border-black`}>
            Summary
          </h2>
          <div className={`grid grid-cols-1 gap-8 text-lg leading-relaxed ${theme.mainText} opacity-90 max-w-prose`}>
            <p>{resumeData.summary.en}</p>
            <p className={`font-serif ${theme.mainMuted} border-l-2 ${theme.mainBorder} pl-4 italic`}>
              {resumeData.summary.cn}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 print:mb-8" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className={`text-2xl font-bold uppercase tracking-widest ${theme.mainMuted} mb-10 border-l-4 ${currentTheme === 'classic' ? 'border-gray-900' : 'border-skims-sidebar'} pl-4 print:text-black print:border-black`}>
            Experience
          </h2>
          <div className="space-y-4">
            {resumeData.experience.map((item) => (
              <ExperienceItem key={item.id} item={item} theme={theme} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16 print:mb-8" aria-labelledby="education-heading">
          <h2 id="education-heading" className={`text-2xl font-bold uppercase tracking-widest ${theme.mainMuted} mb-8 border-l-4 ${currentTheme === 'classic' ? 'border-gray-900' : 'border-skims-sidebar'} pl-4 print:text-black print:border-black`}>
            Education
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="break-inside-avoid">
                <h3 className={`text-xl font-bold ${theme.mainText}`}>{edu.institution}</h3>
                <div className={`flex justify-between items-center mt-1 ${theme.mainMuted} max-w-md`}>
                  <span>{edu.degree}</span>
                  {edu.years && <span className="font-mono text-sm">{edu.years}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Footer for Digital Version */}
        <footer className={`mt-20 pt-8 border-t ${theme.mainBorder} text-center ${theme.mainMuted} text-sm print:hidden`}>
          <p>Designed with Usability Heuristics in mind. Clean, fast, and accessible.</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Melanie Chen</p>
        </footer>
      </main>
    </div>
  );
};

export default App;