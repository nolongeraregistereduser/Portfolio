
import React from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const isComingSoon = project.title.includes('Coming Soon');

  return (
    <div className={`group relative border border-neutral-900 bg-neutral-950/50 hover:border-neutral-500 hover:-translate-y-2 transition-all duration-700 overflow-hidden ${isComingSoon ? 'opacity-60' : ''}`}>
      {/* Project number */}
      <div className="absolute top-4 left-4 z-20 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
        0{index + 1}
      </div>

      <div className="aspect-[16/10] overflow-hidden bg-neutral-900 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ${isComingSoon ? 'blur-sm' : ''}`}
        />
        
        {/* Glass reflection overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </div>

        {/* Coming Soon overlay */}
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="text-2xl font-black tracking-widest text-white/80 uppercase">Coming Soon</span>
          </div>
        )}

        {/* Hover overlay with links */}
        {!isComingSoon && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-emerald-500/20 hover:border-emerald-500"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:bg-emerald-500/20 hover:border-emerald-500"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-8 relative z-10">
        {/* Tags */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-[1px] flex-1 bg-neutral-800 group-hover:bg-neutral-600 transition-colors"></div>
          <div className="flex gap-3">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 group-hover:text-emerald-400 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-light group-hover:text-neutral-400 transition-colors line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-[10px] font-mono bg-neutral-900 border border-neutral-800 rounded text-neutral-500 group-hover:border-emerald-500/30 group-hover:text-emerald-400/80 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
