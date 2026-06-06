
import React from 'react';
import { SKILLS } from '../constants';

// Accent palette keyed by Skill.accent
const ACCENTS: Record<string, { border: string; glow: string; text: string; chip: string; bg: string }> = {
  emerald: {
    border: 'hover:border-emerald-500/50',
    glow: 'group-hover:shadow-emerald-500/20',
    text: 'text-emerald-400',
    chip: 'group-hover:border-emerald-500/30 group-hover:text-emerald-400/80',
    bg: 'bg-emerald-500/10',
  },
  blue: {
    border: 'hover:border-blue-500/50',
    glow: 'group-hover:shadow-blue-500/20',
    text: 'text-blue-400',
    chip: 'group-hover:border-blue-500/30 group-hover:text-blue-400/80',
    bg: 'bg-blue-500/10',
  },
  purple: {
    border: 'hover:border-purple-500/50',
    glow: 'group-hover:shadow-purple-500/20',
    text: 'text-purple-400',
    chip: 'group-hover:border-purple-500/30 group-hover:text-purple-400/80',
    bg: 'bg-purple-500/10',
  },
};

const ICONS: Record<string, React.ReactNode> = {
  code: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  ),
  cloud: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  ),
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase mb-4">
              / TECHNICAL EXPERTISE
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Three <br />
              <span className="text-neutral-600">Pillars</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            A hybrid skill set spanning software engineering, cloud infrastructure, and IT operations —
            built to ship products and keep them running in production.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((pillar, index) => {
            const accent = ACCENTS[pillar.accent || 'emerald'];
            return (
              <div
                key={pillar.category}
                className={`group relative flex flex-col p-8 rounded-2xl border border-neutral-800 bg-neutral-950/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${accent.border} ${accent.glow} overflow-hidden`}
              >
                {/* Big number watermark */}
                <div className="absolute -top-6 -right-2 text-[140px] font-black leading-none select-none text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${accent.bg} flex items-center justify-center mb-6 relative z-10`}>
                  <svg className={`w-7 h-7 ${accent.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {ICONS[pillar.icon || 'code']}
                  </svg>
                </div>

                {/* Title + subtitle */}
                <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 text-white transition-colors duration-300 group-hover:${accent.text} relative z-10`}>
                  {pillar.category}
                </h3>
                {pillar.subtitle && (
                  <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6 relative z-10">
                    {pillar.subtitle}
                  </p>
                )}

                {/* Skills list */}
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {pillar.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 text-[11px] font-mono bg-black/40 border border-neutral-800 rounded-lg text-neutral-400 transition-all duration-300 ${accent.chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
