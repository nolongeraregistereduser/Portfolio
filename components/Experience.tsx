
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-neutral-950/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-blue-400 tracking-widest uppercase mb-4">
              / PROFESSIONAL JOURNEY
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Work <br />
              <span className="text-neutral-600">Experience</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Building scalable solutions from maritime management systems to e-commerce platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-neutral-800 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-2 border-blue-500 rounded-full md:-translate-x-1/2 -translate-x-1/2 top-0 z-10">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                  <div className="group">
                    {/* Period Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-[10px] font-mono text-blue-400 mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {exp.period}
                    </div>

                    {/* Company & Title */}
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-neutral-500 font-mono text-sm mb-4">
                      {exp.title}
                      <span className="text-neutral-700"> • {exp.location}</span>
                    </p>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    {exp.technologies && (
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-[10px] font-mono bg-neutral-900 border border-neutral-800 rounded text-neutral-400 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

