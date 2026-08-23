import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe, Sparkles, Maximize2, X } from 'lucide-react';
import tamilrockesPng from '../assets/project/tamilrockes.png';
import spotifyPng from '../assets/project/spotify.png';
import skyrovixInternshipPng from '../assets/project/skyrovix internship and learning platform.png';
import skyrovixWebTechPng from '../assets/project/skyrovix web tech.png';
import mzcetReportPng from '../assets/project/mzcet-weekly report automatio n.png';
import chessPng from '../assets/project/chess.png';
import nursingPng from '../assets/project/nursing.png';
import jarvishSosPng from '../assets/project/jarvish-sos.png';
import mzcetAiGdPng from '../assets/project/mzcet Ai group discusstion.png';

const TiltCard = ({ children, style }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px', ...style, height: '100%' }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, image, github, live, isAgency, index, onExpand }) => {
  const [imgHover, setImgHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
      onMouseEnter={() => setImgHover(true)}
      onMouseLeave={() => setImgHover(false)}
    >
      <div 
        className="project-img-wrapper" 
        onClick={() => onExpand({ title, description, tags, image, github, live })}
        title="Click to view full screenshot"
      >
        <motion.img
          src={image} alt={title}
          className="project-img"
          animate={{ scale: imgHover ? 1.04 : 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {isAgency && (
          <div className="project-badge">
            <Globe size={12} /> COMPANY
          </div>
        )}
        <div className="project-img-overlay">
          <span className="expand-pill">
            <Maximize2 size={14} /> Full View
          </span>
        </div>
      </div>
      
      <div className="project-content">
        <div>
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
          {tags && tags.length > 0 && (
            <div className="project-tags">
              {tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        
        <div style={{ marginTop: 'auto' }}>
          {(live || github) && (
            <div className="project-actions">
              {live && (
                <motion.a
                  href={live} target="_blank" rel="noopener noreferrer"
                  className="project-btn primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Launch App <ExternalLink size={14} />
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github} target="_blank" rel="noopener noreferrer"
                  className="project-btn secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={14} /> Source
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      title: 'Skyrovix Internship & Learning Platform',
      description: 'A comprehensive internship and training platform equipping students with industry-relevant skills in full-stack development, AI, and cloud technologies.',
      tags: ['Internship', 'Training', 'Mentorship', 'EdTech'],
      image: skyrovixInternshipPng,
      live: 'https://skyrovix.online',
      isAgency: true,
    },
    {
      title: 'Skyrovix Web Tech',
      description: 'Premium digital solutions provider delivering custom full-stack web applications, business software, and API services globally.',
      tags: ['Agency', 'React.js', 'Tailwind', 'Freelance'],
      image: skyrovixWebTechPng,
      live: 'https://hariharan1022.github.io/skyrovix_tech/',
      isAgency: true,
    },
    {
      title: 'Mount Zion Weekly & Monthly Report Automation',
      description: 'An automated reporting system built for Mount Zion College of Engineering and Technology (MZCET) to streamline weekly and monthly academic data processing, analytics, and report generation.',
      tags: ['React', 'Automation', 'Report Engine', 'Academic Portal'],
      image: mzcetReportPng,
      github: 'https://github.com/hariharan1022/MZCET-WEEKLY-REPORT-AUTOMATION',
      live: 'https://hariharan1022.github.io/MZCET-WEEKLY-REPORT-AUTOMATION/',
    },
    {
      title: 'SafeNova AI - Jarvish Emergency SOS',
      description: 'An AI-powered personal safety and emergency guardian system featuring voice-activated triggers ("Nova Help Me"), real-time location tracking, automated threat deterrence, and trusted guardian alerts.',
      tags: ['React', 'AI Guardian', 'Voice Trigger', 'Emergency SOS', 'Real-Time Tracking'],
      image: jarvishSosPng,
    },
    {
      title: 'MZ ThinkCircle - AI Group Discussion Portal',
      description: 'An intelligent communication analytics platform for students featuring AI-driven solo practice, real-time group discussion sessions, and automated speech analysis (Grammar, Fluency, Pronunciation & Confidence).',
      tags: ['React', 'AI Analytics', 'Speech Processing', 'Group Discussion', 'E-Learning'],
      image: mzcetAiGdPng,
    },
    {
      title: 'Masters Chess Academy',
      description: 'An elegant, interactive e-learning platform showcasing courses, academic roadmaps, puzzles, and trainer registries.',
      tags: ['React', 'CSS Grid', 'Dynamic UI', 'E-Learning'],
      image: chessPng,
      live: 'https://hariharan1022.github.io/chess_mca/',
    },
    {
      title: 'Mount Zion College of Nursing',
      description: 'A comprehensive academic portal for college curriculum details, student hubs, admissions systems, and portals.',
      tags: ['React', 'Academic Portal', 'Form System', 'UI Design'],
      image: nursingPng,
      live: 'https://hariharan1022.github.io/nursing/',
    },
    {
      title: 'TamilRockes Movie Hub',
      description: 'A comprehensive movie streaming and discovery platform built with high-performance search engine and beautiful responsive layout.',
      tags: ['React', 'Node.js', 'API Integration', 'UI/UX'],
      image: tamilrockesPng,
      github: 'https://github.com/hariharan1022/tamilrockes',
      live: 'https://hariharan1022.github.io/tamilrockes/tamilrocker.html',
    },
    {
      title: 'Spotify Cloud Clone',
      description: 'A full-featured music streaming clone with custom playlist management, audio streaming systems, and interactive player panels.',
      tags: ['React', 'Spotify API', 'Tailwind', 'State Management'],
      image: spotifyPng,
      github: 'https://github.com/hariharan1022/Spotify-Clone',
      live: 'https://hariharan1022.github.io/Spotify-Clone/',
    },
  ];

  return (
    <>
      <style>{`
        .projects-section {
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          align-items: stretch;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          border-color: rgba(255, 94, 67, 0.25);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .project-img-wrapper {
          height: 240px;
          overflow: hidden;
          position: relative;
          background: #080a12;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
        }

        .project-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.5));
          transition: transform 0.4s ease;
        }

        .project-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: linear-gradient(135deg, #ff5e43, #fb923c);
          color: white;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(255, 94, 67, 0.3);
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 3;
        }

        .project-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 10, 18, 0.6);
          backdrop-filter: blur(3px);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .project-img-wrapper:hover .project-img-overlay {
          opacity: 1;
        }

        .expand-pill {
          background: linear-gradient(135deg, #ff5e43, #fb923c);
          color: white;
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 8px 20px rgba(255, 94, 67, 0.4);
        }

        .project-content {
          padding: 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(10, 15, 25, 0.95) 0%, rgba(17, 23, 35, 1) 100%);
        }

        .project-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .project-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .project-tag {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #ff5e43;
          background: rgba(255, 94, 67, 0.08);
          border: 1px solid rgba(255, 94, 67, 0.15);
          padding: 4px 12px;
          border-radius: 100px;
        }

        .project-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .project-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .project-btn.primary {
          background: rgba(255, 94, 67, 0.1);
          color: #ff5e43;
          border: 1px solid rgba(255, 94, 67, 0.2);
        }

        .project-btn.primary:hover {
          background: #ff5e43;
          color: white;
        }

        .project-btn.secondary {
          background: rgba(255, 255, 255, 0.03);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-btn.secondary:hover {
          background: white;
          color: #111723;
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 20px;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label"><Sparkles size={12} /> Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A selection of my best work in web development, AI, and digital product design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <TiltCard key={index}>
              <ProjectCard {...project} index={index} onExpand={setActiveModal} />
            </TiltCard>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(5, 7, 12, 0.92)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '1200px',
                width: '100%',
                maxHeight: '92vh',
                background: '#0d131f',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 30px 60px rgba(0,0,0,0.7)',
                position: 'relative',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div>
                  <h3 style={{ margin: 0, color: 'white', fontFamily: 'Outfit', fontSize: '1.2rem' }}>
                    {activeModal.title}
                  </h3>
                  <p style={{ margin: '2px 0 0', color: '#94a3b8', fontSize: '0.82rem' }}>
                    Full Project Screenshot Preview
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#ff5e43'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{
                flex: 1,
                overflow: 'auto',
                background: '#06080e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
              }}>
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;

