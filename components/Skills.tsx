
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const getGradient = (index: number) => {
    const gradients = [
      'from-emerald-500/20 to-emerald-900/5',
      'from-blue-500/20 to-blue-900/5',
      'from-purple-500/20 to-purple-900/5',
      'from-orange-500/20 to-orange-900/5',
      'from-pink-500/20 to-pink-900/5',
    ];
    return gradients[index % gradients.length];
  };

  const getAccent = (index: number) => {
    const accents = [
      'border-emerald-500/30 hover:border-emerald-500',
      'border-blue-500/30 hover:border-blue-500',
      'border-purple-500/30 hover:border-purple-500',
      'border-orange-500/30 hover:border-orange-500',
      'border-pink-500/30 hover:border-pink-500',
    ];
    return accents[index % accents.length];
  };

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase mb-4">
              / TECHNICAL EXPERTISE
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Skills & <br />
              <span className="text-neutral-600">Technologies</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            A comprehensive toolkit built through hands-on experience with enterprise applications, 
            freelance projects, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.category}
              className={`group relative p-8 rounded-lg border ${getAccent(index)} bg-gradient-to-br ${getGradient(index)} backdrop-blur-sm transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Category Icon/Number */}
              <div className="absolute top-6 right-6 text-[60px] font-black text-white/[0.03] leading-none select-none">
                0{index + 1}
              </div>

              <h3 className="text-lg font-bold mb-6 tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-[11px] font-mono bg-white/5 border border-white/10 rounded-full text-neutral-300 hover:bg-white/10 hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Languages & Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Languages</h3>
            <div className="space-y-4">
              {[
                { name: 'Arabic', level: 'Native', width: '100%' },
                { name: 'French', level: 'Proficient', width: '90%' },
                { name: 'English', level: 'Intermediate', width: '70%' },
              ].map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-300">{lang.name}</span>
                    <span className="text-neutral-500 font-mono text-xs">{lang.level}</span>
                  </div>
                  <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000"
                      style={{ width: lang.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Development Approach</h3>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Clean, maintainable code with <span className="text-white">MVC architecture</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Secure authentication with <span className="text-white">JWT & Spring Security</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>RESTful API design following <span className="text-white">best practices</span></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Agile methodology with <span className="text-white">Scrum framework</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

