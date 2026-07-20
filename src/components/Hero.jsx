import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageSquare, Instagram } from 'lucide-react';
import studentImg from '../assets/student.png';

const skills = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React.js',
  'Node.js',
  'PostgreSQL',
  'AI Integration'
];

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section {
          padding-top: 140px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        
        .hero-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          flex-grow: 1;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-hello {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .hero-hello span {
          color: #ff5e43;
        }

        .hero-name-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 8px;
        }

        .hero-dash {
          width: 50px;
          height: 2px;
          background-color: #ff5e43;
        }

        .hero-name {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 500;
          color: white;
        }

        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          font-weight: 500;
          color: #ff5e43;
          margin-bottom: 24px;
          letter-spacing: 0.05em;
        }

        .hero-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 95%;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* Avatar styling matching mockup 2 (with 3D popout cutout) */
        .avatar-container {
          position: relative;
          width: 380px;
          height: 420px;
          display: flex;
          align-items: flex-end; /* Align the bottom of cutout portrait to container bottom */
          justify-content: center;
        }

        .avatar-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 58, 85, 0.12) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          bottom: 40px;
        }

        /* Offset solid crimson circle */
        .avatar-bg-circle-red {
          position: absolute;
          width: 250px;
          height: 250px;
          background-color: #e12c43; /* Crimson red */
          border-radius: 50%;
          left: 20px;
          bottom: 70px;
          z-index: 1;
        }

        /* Offset dark purple circle */
        .avatar-bg-circle-purple {
          position: absolute;
          width: 290px;
          height: 290px;
          background-color: #1b0e1b;
          border: 1px solid rgba(255, 58, 85, 0.08);
          border-radius: 50%;
          right: 20px;
          top: 30px;
          z-index: 0;
        }

        /* Dashed circle border */
        .avatar-bg-circle-dashed {
          position: absolute;
          width: 330px;
          height: 330px;
          border: 1px dashed rgba(255, 58, 85, 0.25);
          border-radius: 50%;
          z-index: 0;
          top: 40px;
          left: 30px;
        }

        /* Floating geometric shapes */
        .floating-shape-dot {
          position: absolute;
          border-radius: 50%;
          z-index: 3;
        }

        .floating-shape-triangle {
          position: absolute;
          width: 0;
          height: 0;
          z-index: 3;
        }

        .triangle-up {
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 9px solid white;
        }

        .triangle-down {
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 9px solid #e12c43;
        }

        /* Transparent Developer image container overlaying circles */
        .avatar-img-box {
          position: absolute;
          width: 320px;
          height: 380px;
          bottom: 0;
          z-index: 4; /* Sits on top of background circles and floaters */
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: visible; /* Let the scaled head stand out upward */
        }

        .avatar-img {
          width: auto;
          height: 100%;
          object-fit: contain;
          z-index: 5;
          transform: scale(1.0); /* Reduced scale to fit the image properly */
          transform-origin: bottom center; /* Anchor scaling to the bottom */
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.65)); /* Premium 3D drop-shadow */
          /* Smooth fade-out at the bottom to seamlessly hide straight crops */
          mask-image: linear-gradient(to top, transparent 0%, black 15%, black 100%);
          -webkit-mask-image: linear-gradient(to top, transparent 0%, black 15%, black 100%);
        }

        /* Vertical social sidebar */
        .hero-social-sidebar {
          position: absolute;
          right: -80px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          z-index: 10;
        }

        .sidebar-text {
          writing-mode: vertical-lr;
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          color: #e12c43;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transform: rotate(180deg);
          margin-bottom: 4px;
        }

        .sidebar-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, #e12c43, transparent);
          margin-bottom: 4px;
        }

        .sidebar-icon {
          color: #e12c43;
          transition: transform 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-icon:hover {
          color: white;
          transform: scale(1.15);
        }

        /* Bottom Skills Bar */
        .skills-bar {
          width: 100%;
          background: #111723;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding: 26px 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 56px;
          margin-top: 60px;
        }

        .skill-item {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(148, 163, 184, 0.5);
          transition: color 0.2s;
          cursor: default;
          letter-spacing: 0.02em;
        }

        .skill-item:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .hero-social-sidebar {
            right: -40px;
          }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            padding-top: 20px;
          }
          .hero-left {
            align-items: center;
            order: 2;
          }
          .hero-right {
            order: 1;
            margin-bottom: 20px;
          }
          .hero-name-row {
            justify-content: center;
          }
          .skills-bar {
            margin-top: 40px;
            gap: 32px;
            flex-wrap: wrap;
            padding: 20px;
          }
          .hero-social-sidebar {
            position: relative;
            right: 0;
            top: 0;
            transform: none;
            flex-direction: row;
            justify-content: center;
            margin-top: 28px;
            gap: 20px;
          }
          .sidebar-text {
            writing-mode: horizontal-tb;
            transform: none;
            margin-bottom: 0;
          }
          .sidebar-line {
            width: 30px;
            height: 1px;
            background: #e12c43;
            margin-bottom: 0;
          }
        }

        @media (max-width: 600px) {
          .hero-section {
            padding-top: 100px;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          .hero-buttons .btn {
            width: 100%;
            justify-content: center;
          }
          .skills-bar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            justify-content: center;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .skills-bar {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-container">
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-hello">Hello<span>.</span></h1>
            
            <div className="hero-name-row">
              <div className="hero-dash" />
              <span className="hero-name">I'm Hariharan</span>
            </div>
            
            <h2 className="hero-title">Founder & Lead Dev<span style={{ fontSize: '0.5em', color: '#94a3b8', fontWeight: 500, verticalAlign: 'middle', marginLeft: '10px' }}>at Skyrovix</span></h2>
            
            <div className="hero-subtitle">FULL STACK DEVELOPER | AI DEVELOPER | SOFTWARE ENGINEER</div>
            
            <p className="hero-desc">
              I build modern, scalable, and user-centric digital products that combine clean design, powerful backend architecture, and intelligent AI capabilities.
            </p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get a project!</a>
              <a href={`${import.meta.env.BASE_URL}Hariharan-CV.html`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View / Download CV</a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="avatar-container">
              <motion.div 
                className="avatar-glow" 
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              
              {/* Concentric mockup rings */}
              <div className="avatar-bg-circle-purple" />
              <motion.div 
                className="avatar-bg-circle-dashed" 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              />
              <div className="avatar-bg-circle-red" />
              
              {/* Transparent background image sitting on top of circles, not cropped */}
              <div className="avatar-img-box">
                <img src={studentImg} alt="Hariharan S." className="avatar-img" />
              </div>

              {/* Floating shapes matching mockup */}
              <motion.div 
                className="floating-shape-dot" 
                style={{ width: '12px', height: '12px', backgroundColor: '#e12c43', top: '12%', right: '25%' }}
                animate={{ y: [0, -15, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              />
              <motion.div 
                className="floating-shape-dot" 
                style={{ width: '6px', height: '6px', backgroundColor: 'white', bottom: '45%', left: '10%' }}
                animate={{ y: [0, 12, 0], x: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div 
                className="floating-shape-triangle triangle-up" 
                style={{ top: '28%', right: '15%' }}
                animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              />
              <motion.div 
                className="floating-shape-triangle triangle-down" 
                style={{ bottom: '25%', right: '28%' }}
                animate={{ y: [0, 12, 0], rotate: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.div 
                className="floating-shape-triangle triangle-up" 
                style={{ top: '15%', left: '22%' }}
                animate={{ y: [0, -8, 0], rotate: [-30, -5, -30] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
              />

              {/* Vertical social sidebar */}
              <div className="hero-social-sidebar">
                <span className="sidebar-text">FOLLOW ME ON:</span>
                <div className="sidebar-line" />
                <a href="https://github.com/hariharan1022" target="_blank" rel="noopener noreferrer" className="sidebar-icon" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/hariharan-s-92b566381" target="_blank" rel="noopener noreferrer" className="sidebar-icon" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://wa.me/919940773204" target="_blank" rel="noopener noreferrer" className="sidebar-icon" aria-label="WhatsApp">
                  <MessageSquare size={18} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="sidebar-icon" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Inline skills bar matching mockup */}
        <motion.div 
          className="skills-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {skills.map((skill, index) => (
            <span key={skill} className="skill-item">{skill}</span>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
