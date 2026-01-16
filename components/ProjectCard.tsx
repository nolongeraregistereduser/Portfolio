
import React, { useState } from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const [showModal, setShowModal] = useState(false);
  const isComingSoon = project.title.includes('Coming Soon');
  const hasLogo = project.logo || project.image.includes('salamancare');
  const hasTextLogo = project.textLogo;

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isComingSoon) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div 
        onClick={openModal}
        className={`group relative border border-neutral-900 bg-neutral-950/50 hover:border-neutral-500 hover:-translate-y-2 transition-all duration-700 overflow-hidden cursor-pointer ${isComingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        {/* Project number */}
        <div className="absolute top-4 left-4 z-20 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
          0{index + 1}
        </div>

        <div className={`aspect-[16/10] overflow-hidden relative ${(hasLogo || hasTextLogo) ? 'bg-neutral-900 flex items-center justify-center p-8' : 'bg-neutral-900'}`}>
          {hasTextLogo ? (
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-500">
                {project.textLogo}
              </span>
              <div className="mt-2 h-1 w-16 bg-emerald-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          ) : hasLogo ? (
            <img 
              src={project.logo || project.image} 
              alt={project.title} 
              className="max-w-[200px] max-h-[150px] object-contain group-hover:scale-110 transition-all duration-700"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ${isComingSoon ? 'blur-sm' : ''}`}
            />
          )}
          
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

          {/* View Details overlay */}
          {!isComingSoon && (
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-white">View Details</span>
              </div>
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

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Header with logo/image */}
              <div className="relative bg-neutral-900 p-8 flex items-center gap-6 border-b border-neutral-800">
                {project.textLogo ? (
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500/20 to-neutral-800 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                    <span className="text-lg font-black text-emerald-400">{project.textLogo.split('.')[0]}</span>
                  </div>
                ) : project.logo && (
                  <div className="w-20 h-20 rounded-xl bg-neutral-800 p-3 flex-shrink-0">
                    <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                  </div>
                )}
                <div>
                  <div className="flex gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] uppercase font-mono tracking-widest bg-emerald-500/10 text-emerald-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Multiple Demo Videos Section */}
              {project.demoVideos && project.demoVideos.length > 0 && (
                <div className="p-8 border-b border-neutral-800">
                  <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    DEMO VIDEOS ({project.demoVideos.length})
                  </h3>
                  <div className="space-y-6">
                    {project.demoVideos.map((video, idx) => (
                      <div key={idx} className="group/video">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-sm font-bold">
                            {idx + 1}
                          </span>
                          <h4 className="text-white font-bold uppercase tracking-wide text-sm">{video.title}</h4>
                        </div>
                        <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 group-hover/video:border-emerald-500/30 transition-colors">
                          <iframe
                            src={video.url}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title={`${project.title} - ${video.title}`}
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Single Demo Video Section */}
              {project.demoVideo && !project.demoVideos && (
                <div className="p-8 border-b border-neutral-800">
                  <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    DEMO VIDEO
                  </h3>
                  <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">
                    <iframe
                      src={project.demoVideo}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={`${project.title} Demo Video`}
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Screenshots Section */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="p-8 border-b border-neutral-800">
                  <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    SCREENSHOTS ({project.screenshots.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.screenshots.map((screenshot, idx) => (
                      <div key={idx} className="group/screenshot">
                        <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 group-hover/screenshot:border-emerald-500/30 transition-all">
                          <img
                            src={screenshot}
                            alt={`${project.title} Screenshot ${idx + 1}`}
                            className="w-full h-full object-cover group-hover/screenshot:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="p-8 border-b border-neutral-800">
                <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4">About the Project</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="p-8 border-b border-neutral-800">
                  <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
                        <span className="text-emerald-400 mt-0.5">▹</span>
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="p-8 border-b border-neutral-800">
                <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 text-sm font-mono bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="p-8 flex flex-wrap gap-4">
                {project.github && project.github !== '#' && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="font-bold uppercase tracking-wider text-sm">View on GitHub</span>
                  </a>
                )}
                {project.link && project.link !== '#' && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="font-bold uppercase tracking-wider text-sm">Visit Live Site</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #171717;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #525252;
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
