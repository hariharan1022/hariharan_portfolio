import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Sparkles } from 'lucide-react';
import tamilrockesPng from '../assets/tamilrockes.png';
import spotifyPng from '../assets/spotify.png';
import skyrovixInternshipPng from '../assets/skyrovix internship.png';
import skyrovixWebTechPng from '../assets/skyrovix web tech.png';
import chessPng from '../assets/chess.png';
import nursingPng from '../assets/nursing.png';

const TiltCard = ({ children, style }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
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

const ProjectCard = ({ title, description, tags, image, github, live, isAgency, index }) => {
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
      <div className="project-img-wrapper">
        <motion.img
          src={image} alt={title}
          className="project-img"
          animate={{ scale: imgHover ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {isAgency && (
          <div className="project-badge">
            <Globe size={12} /> COMPANY
          </div>
        )}
        <div className="project-img-overlay" />
      </div>
      
      <div className="project-content">
        <div>
          <h3 className="project-title">{title}</h3>
        </div>
        
        <div style={{ marginTop: 'auto' }}>
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
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Skyrovix Internship',
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
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-img-wrapper {
          height: 220px;
          overflow: hidden;
          position: relative;
          background: #09090e;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          z-index: 2;
        }

        .project-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10, 15, 25, 0.95));
          pointer-events: none;
          z-index: 1;
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
              <ProjectCard {...project} index={index} />
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
