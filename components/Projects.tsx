
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';

const FILTERS: { value: ProjectCategory; label: string }[] = [
  { value: 'php', label: 'PHP / Laravel' },
  { value: 'java', label: 'Java / Spring' },
  { value: 'it', label: 'IT & SysAdmin' },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('php');

  const filteredProjects = PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase mb-4">
              / FEATURED WORK
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Selected <br />
              <span className="text-neutral-600">Projects</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            From distributed systems and enterprise APIs to zero-touch IT automation —
            building solutions that ship and scale.
            <span className="block mt-2 text-neutral-600 italic">Filter by discipline below.</span>
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.value;
            const count = PROJECTS.filter((p) => p.category === filter.value).length;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`group relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-500 text-black border-emerald-500 shadow-lg shadow-emerald-500/20'
                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-emerald-500/50 hover:text-emerald-400'
                }`}
              >
                {filter.label}
                <span
                  className={`ml-2 text-[10px] font-mono ${
                    isActive ? 'text-black/60' : 'text-neutral-600 group-hover:text-emerald-400/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-600 font-mono text-sm">
            // No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
