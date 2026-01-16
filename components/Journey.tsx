
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';

interface TimelineItem {
  type: 'experience' | 'education';
  period: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  technologies?: string[];
  color: 'blue' | 'purple';
}

const Journey: React.FC = () => {
  // Combine and sort all items by period (most recent first)
  const timelineItems: TimelineItem[] = [
    ...EXPERIENCES.map(exp => ({
      type: 'experience' as const,
      period: exp.period,
      title: exp.company,
      subtitle: exp.title,
      location: exp.location,
      description: exp.description,
      technologies: exp.technologies,
      color: 'blue' as const,
    })),
    ...EDUCATION.map(edu => ({
      type: 'education' as const,
      period: edu.period,
      title: edu.degree,
      subtitle: edu.school,
      location: edu.location,
      description: edu.description,
      color: 'purple' as const,
    })),
  ].sort((a, b) => {
    // Sort by period (most recent first)
    // Extract year from period string (e.g., "May 2025 - July 2025" -> 2025)
    const getYear = (period: string) => {
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section id="journey" className="py-32 px-6 bg-neutral-950/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase mb-4 flex items-center gap-3">
              <span>/ MY JOURNEY</span>
              <span className="text-neutral-700">•</span>
              <span className="text-blue-400">Work</span>
              <span className="text-neutral-700">+</span>
              <span className="text-purple-400">Education</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
              Experience <br />
              <span className="text-neutral-600">& Education</span>
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              From academic foundations to professional achievements — a continuous journey of growth and learning.
            </p>
          </div>
        </div>

        {/* Unified Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 via-purple-500 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => {
              const isExperience = item.type === 'experience';
              const colorClass = isExperience ? 'blue' : 'purple';
              const bgColor = isExperience ? 'bg-blue-500/10' : 'bg-purple-500/10';
              const borderColor = isExperience ? 'border-blue-500/30' : 'border-purple-500/30';
              const textColor = isExperience ? 'text-blue-400' : 'text-purple-400';
              const accentColor = isExperience ? 'bg-blue-500' : 'bg-purple-500';
              
              return (
                <div
                  key={`${item.type}-${index}`}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Timeline dot with type indicator */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-black border-2 rounded-full md:-translate-x-1/2 -translate-x-1/2 top-0 z-10 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${accentColor}`}></div>
                    <div className={`absolute inset-0 ${accentColor} rounded-full animate-ping opacity-20`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                    <div className={`group relative p-6 rounded-lg border ${borderColor} ${bgColor} hover:border-opacity-100 transition-all duration-500 hover:-translate-y-1`}>
                      {/* Type badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 ${bgColor} ${borderColor} border rounded-full text-[10px] font-mono ${textColor} mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        {isExperience ? (
                          <>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            WORK
                          </>
                        ) : (
                          <>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            EDUCATION
                          </>
                        )}
                      </div>

                      {/* Period */}
                      <div className={`text-[10px] font-mono ${textColor} mb-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.period}
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 transition-colors ${
                        isExperience ? 'group-hover:text-blue-400' : 'group-hover:text-purple-400'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Subtitle */}
                      <p className={`text-neutral-400 font-medium text-sm mb-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.subtitle}
                        {item.location && <span className="text-neutral-600"> • {item.location}</span>}
                      </p>

                      {/* Description */}
                      <p className={`text-neutral-500 text-sm leading-relaxed mb-4 font-light ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.description}
                      </p>

                      {/* Technologies (only for experience) */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-[10px] font-mono bg-neutral-900 border border-neutral-800 rounded text-neutral-400 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${isExperience ? 'from-blue-500/10' : 'from-purple-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

