
import React, { useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getColors = (index: number) => {
    const colors = [
      { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', accent: 'text-emerald-400', glow: 'shadow-emerald-500/30' },
      { bg: 'bg-blue-500/10', border: 'border-blue-500/30', accent: 'text-blue-400', glow: 'shadow-blue-500/30' },
      { bg: 'bg-purple-500/10', border: 'border-purple-500/30', accent: 'text-purple-400', glow: 'shadow-purple-500/30' },
      { bg: 'bg-orange-500/10', border: 'border-orange-500/30', accent: 'text-orange-400', glow: 'shadow-orange-500/30' },
      { bg: 'bg-pink-500/10', border: 'border-pink-500/30', accent: 'text-pink-400', glow: 'shadow-pink-500/30' },
    ];
    return colors[index % colors.length];
  };


  // Duplicate skills for infinite scroll
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section id="skills" className={`py-24 relative ${hoveredIndex !== null ? '' : 'overflow-hidden'}`}>
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Blur overlay when card is hovered */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-30 transition-opacity duration-500 pointer-events-none
          ${hoveredIndex !== null ? 'opacity-100' : 'opacity-0'}`}
      ></div>

      <div className={`max-w-7xl mx-auto px-6 mb-16 transition-all duration-500 relative z-10 ${hoveredIndex !== null ? 'blur-sm' : ''}`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
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
      </div>

      {/* Marquee - Big Square Cards */}
      <div className="relative group/marquee" style={{ zIndex: hoveredIndex !== null ? 50 : 'auto' }}>
        {/* Gradient masks */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none
          transition-opacity duration-500 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none
          transition-opacity duration-500 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}></div>
        
        <div 
          className={`flex gap-6 ${hoveredIndex !== null ? '' : 'animate-marquee-left'}`}
          style={{ 
            width: 'max-content',
            animationPlayState: hoveredIndex !== null ? 'paused' : 'running',
            willChange: hoveredIndex !== null ? 'auto' : 'transform',
            transform: hoveredIndex !== null ? 'translateZ(0)' : undefined,
          }}
        >
          {duplicatedSkills.map((skill, index) => {
            const colors = getColors(index % SKILLS.length);
            const isHovered = hoveredIndex === index;
            const hasHover = hoveredIndex !== null;
            
            return (
              <div
                key={`${skill.category}-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex-shrink-0 w-80 h-80 p-6 rounded-2xl ${colors.bg} ${colors.border} border 
                  backdrop-blur-sm relative overflow-hidden cursor-pointer
                  ${isHovered 
                    ? `shadow-2xl ${colors.glow} border-white/30` 
                    : hasHover 
                      ? 'blur-sm opacity-30' 
                      : 'hover:shadow-xl'
                  }`}
                style={{
                  transform: isHovered ? 'translate3d(0, -20px, 0) scale(1.25)' : hasHover ? 'translate3d(0, 0, 0) scale(0.95)' : 'translate3d(0, 0, 0) scale(1)',
                  transformOrigin: 'center center',
                  transition: isHovered || hasHover 
                    ? 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out, filter 0.3s ease-out'
                    : 'transform 0.2s ease-out, opacity 0.2s ease-out, filter 0.2s ease-out',
                  filter: isHovered ? 'blur(0px)' : hasHover ? 'blur(4px)' : 'blur(0px)',
                  willChange: isHovered || hasHover ? 'transform' : 'auto',
                  zIndex: isHovered ? 60 : hasHover ? 10 : 20,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                }}
              >
                {/* Big number background */}
                <div className={`absolute -top-8 -right-4 text-[180px] font-black leading-none select-none 
                  transition-all duration-500 ${isHovered ? 'text-white/10' : 'text-white/[0.03]'}`}>
                  0{(index % SKILLS.length) + 1}
                </div>

                {/* Category name */}
                <h3 className={`text-xl font-black uppercase tracking-tight mb-2 transition-colors duration-300
                  ${isHovered ? colors.accent : 'text-white'}`}>
                  {skill.category}
                </h3>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 text-[11px] font-mono bg-black/30 border border-white/10 
                        rounded-lg text-neutral-300 transition-all duration-300
                        ${isHovered ? 'hover:bg-white/20 hover:text-white hover:border-white/30 hover:scale-105' : ''}`}
                      style={{
                        transitionDelay: isHovered ? `${itemIndex * 30}ms` : '0ms',
                        opacity: isHovered ? 1 : 0.8,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Hover corner glow */}
                <div className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl transition-opacity duration-500
                  ${colors.accent.replace('text-', 'bg-')} ${isHovered ? 'opacity-40' : 'opacity-0'}`}></div>
                
                {/* Top glow */}
                <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500
                  ${colors.accent.replace('text-', 'bg-')} ${isHovered ? 'opacity-20' : 'opacity-0'}`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Skills;
