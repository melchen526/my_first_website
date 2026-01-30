import React from 'react';
import { Experience, ThemeClasses } from '../types';

interface ExperienceItemProps {
  item: Experience;
  theme: ThemeClasses;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, theme }) => {
  return (
    <div className="mb-10 break-inside-avoid">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
        <h3 className={`text-xl font-bold ${theme.mainText} leading-tight`}>{item.company}</h3>
        <span className={`text-sm font-medium ${theme.mainMuted} font-mono mt-1 md:mt-0`}>{item.startDate} – {item.endDate}</span>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
        <h4 className={`text-lg ${theme.mainText} opacity-90 font-medium`}>{item.role}</h4>
        {item.duration && (
          <span className={`text-xs ${theme.mainMuted} bg-opacity-10 bg-black px-2 py-0.5 rounded-full self-start sm:self-auto`}>
            {item.duration}
          </span>
        )}
      </div>

      {item.location && (
        <p className={`text-sm ${theme.mainMuted} mb-2 italic flex items-center gap-1`}>
          {item.location}
        </p>
      )}

      {item.description && (
        <p className={`${theme.mainText} opacity-80 leading-relaxed text-base max-w-prose`}>
          {item.description}
        </p>
      )}
    </div>
  );
};
