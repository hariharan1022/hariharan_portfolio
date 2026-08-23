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

const TypewriterSubtitle = () => {
  const titles = [
    'FULL STACK DEVELOPER',
    'AI DEVELOPER',
    'SOFTWARE ENGINEER'
  ];
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 75);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="hero-subtitle">
      <span className="typewriter-text">{titles[index].substring(0, subIndex)}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

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
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .hero-top-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          width: 100%;
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

        .hero-title-at {
          font-size: 0.5em;
          color: #94a3b8;
          font-weight: 500;
          vertical-align: middle;
          margin-left: 10px;
        }

        .hero-subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.85rem, 1.5vw, 1.1rem);
          font-weight: 700;
          color: #ff5e43;
          margin-bottom: 24px;
          letter-spacing: 0.06em;
          min-height: 28px;
          display: flex;
          align-items: center;
        }

        .typewriter-text {
          background: linear-gradient(90deg, #ff5e43, #ff8c7a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .typewriter-cursor {
          display: inline-block;
          margin-left: 3px;
          color: #ff5e43;
          font-weight: 700;
          font-size: 1.1em;
          animation: cursorBlink 0.8s infinite;
        }

        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
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

        .hero-section-2-mobile {
          display: none;
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* Avatar styling matching mockup */
        .avatar-container {
          --avatar-w: 380px;
          --avatar-h: 420px;
          --avatar-glow-size: 400px;
          --circle-red-size: 250px;
          --circle-red-left: 20px;
          --circle-red-bottom: 70px;
          --circle-purple-size: 290px;
          --circle-purple-right: 20px;
          --circle-purple-top: 30px;
          --circle-dashed-size: 330px;
          --circle-dashed-top: 40px;
          --circle-dashed-left: 30px;
          --img-box-w: 320px;
          --img-box-h: 380px;

          position: relative;
          width: var(--avatar-w);
          height: var(--avatar-h);
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .avatar-glow {
          position: absolute;
          width: var(--avatar-glow-size);
          height: var(--avatar-glow-size);
          background: radial-gradient(circle, rgba(255, 58, 85, 0.12) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          bottom: 40px;
        }

        .avatar-bg-circle-red {
          position: absolute;
          width: var(--circle-red-size);
          height: var(--circle-red-size);
          background-color: #e12c43;
          border-radius: 50%;
          left: var(--circle-red-left);
          bottom: var(--circle-red-bottom);
          z-index: 1;
        }

        .avatar-bg-circle-purple {
          position: absolute;
          width: var(--circle-purple-size);
          height: var(--circle-purple-size);
          background-color: #1b0e1b;
          border: 1px solid rgba(255, 58, 85, 0.08);
          border-radius: 50%;
          right: var(--circle-purple-right);
          top: var(--circle-purple-top);
          z-index: 0;
        }

        .avatar-bg-circle-dashed {
          position: absolute;
          width: var(--circle-dashed-size);
          height: var(--circle-dashed-size);
          border: 1px dashed rgba(255, 58, 85, 0.25);
          border-radius: 50%;
          z-index: 0;
          top: var(--circle-dashed-top);
          left: var(--circle-dashed-left);
        }

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

        .avatar-img-box {
          position: absolute;
          width: var(--img-box-w);
          height: var(--img-box-h);
          bottom: 0;
          z-index: 4;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: visible;
        }

        .avatar-img {
          width: auto;
          height: 100%;
          object-fit: contain;
          z-index: 5;
          transform: scale(1.0);
          transform-origin: bottom center;
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.65));
          mask-image: linear-gradient(to top, transparent 0%, black 15%, black 100%);
          -webkit-mask-image: linear-gradient(to top, transparent 0%, black 15%, black 100%);
        }

        /* Vertical social sidebar (Desktop) */
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

        /* SECTION 3: Independent Full-Width Skills Section */
        .skills-bar-wrapper {
          width: 100%;
          background: #111723;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 50px;
          padding: 24px 0;
        }

        .skills-bar-content {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px 32px;
        }

        .skill-item {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #94a3b8;
          transition: color 0.3s ease, transform 0.3s ease;
          cursor: default;
          letter-spacing: 0.02em;
        }

        .skill-item:hover {
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .hero-social-sidebar {
            right: -40px;
          }
        }

        /* MOBILE OVERRIDES: EXACT 3-SECTION LAYOUT */
        @media (max-width: 900px) {
          .hero-section {
            padding-top: 100px;
          }
          .hero-container {
            padding: 0 16px;
          }
          .desktop-only-content {
            display: none !important;
          }
          .hero-top-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 12px;
            align-items: center;
          }
          .hero-hello {
            font-size: clamp(1.5rem, 4.5vw, 2.2rem);
            margin-bottom: 4px;
          }
          .hero-dash {
            width: 24px;
          }
          .hero-name {
            font-size: clamp(0.82rem, 2.5vw, 1.05rem);
          }
          .hero-name-row {
            gap: 8px;
            margin-bottom: 4px;
          }
          .hero-title {
            font-size: clamp(1.1rem, 3.4vw, 1.6rem);
            line-height: 1.2;
            margin-bottom: 4px;
          }
          .hero-title-at {
            display: block;
            margin-left: 0;
            font-size: 0.55em;
            margin-top: 1px;
            color: #94a3b8;
          }
          .hero-subtitle {
            font-size: clamp(0.55rem, 1.8vw, 0.75rem);
            letter-spacing: 0.02em;
            margin: 0 0 8px 0;
            line-height: 1.35;
          }
          .hero-social-sidebar {
            display: none !important;
          }

          /* SECTION 2: FULL WIDTH BELOW HERO TOP GRID */
          .hero-section-2-mobile {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            margin-top: 24px;
          }
          .hero-section-2-mobile .hero-desc {
            max-width: 100%;
            margin-bottom: 24px;
            text-align: left;
            font-size: 0.9rem;
            line-height: 1.6;
            color: #94a3b8;
          }
          .hero-section-2-mobile .hero-buttons {
            display: flex;
            gap: 12px;
            justify-content: flex-start;
            width: 100%;
            margin-bottom: 24px;
            flex-wrap: wrap;
          }
          .hero-section-2-mobile .hero-social-mobile {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .hero-social-label {
            font-family: 'Outfit', sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            color: #ff5e43;
            letter-spacing: 0.15em;
          }
          .hero-social-icons {
            display: flex;
            align-items: center;
            gap: 14px;
          }
          .hero-social-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          .hero-social-btn:hover, .hero-social-btn:active {
            background: #ff5e43;
            border-color: #ff5e43;
            color: white;
            transform: translateY(-2px);
          }

          /* SECTION 3: FULL WIDTH SKILLS */
          .skills-bar-wrapper {
            margin-top: 32px;
            padding: 20px 0;
          }
          .skills-bar-content {
            padding: 0 20px;
            justify-content: center;
            gap: 12px 20px;
          }
          .skill-item {
            font-size: 0.88rem;
          }

          /* SECTION 1 RIGHT PHOTO CONTAINER SIZING */
          .avatar-container {
            --avatar-w: 200px;
            --avatar-h: 230px;
            --avatar-glow-size: 200px;
            --circle-red-size: 135px;
            --circle-red-left: 12px;
            --circle-red-bottom: 35px;
            --circle-purple-size: 155px;
            --circle-purple-right: 10px;
            --circle-purple-top: 12px;
            --circle-dashed-size: 175px;
            --circle-dashed-top: 15px;
            --circle-dashed-left: 10px;
            --img-box-w: 170px;
            --img-box-h: 210px;
          }
        }

        @media (max-width: 540px) {
          .hero-top-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 8px;
          }
          .avatar-container {
            --avatar-w: 145px;
            --avatar-h: 175px;
            --avatar-glow-size: 145px;
            --circle-red-size: 95px;
            --circle-red-left: 8px;
            --circle-red-bottom: 22px;
            --circle-purple-size: 115px;
            --circle-purple-right: 6px;
            --circle-purple-top: 10px;
            --circle-dashed-size: 130px;
            --circle-dashed-top: 12px;
            --circle-dashed-left: 6px;
            --img-box-w: 125px;
            --img-box-h: 160px;
          }
          .hero-hello {
            font-size: 1.4rem;
            margin-bottom: 2px;
          }
          .hero-dash {
            width: 14px;
          }
          .hero-name {
            font-size: 0.78rem;
          }
          .hero-name-row {
            gap: 6px;
            margin-bottom: 2px;
          }
          .hero-title {
            font-size: 1.02rem;
            line-height: 1.2;
            margin-bottom: 2px;
          }
          .hero-subtitle {
            font-size: 0.5rem;
            line-height: 1.3;
          }
          .hero-section-2-mobile {
            margin-top: 18px;
          }
          .hero-section-2-mobile .hero-desc {
            font-size: 0.78rem;
            line-height: 1.5;
            margin-bottom: 16px;
          }
          .hero-section-2-mobile .hero-buttons {
            flex-direction: column;
            gap: 8px;
            width: 100%;
          }
          .hero-section-2-mobile .hero-buttons .btn {
            width: 100%;
            justify-content: center;
            padding: 8px 10px;
            font-size: 0.75rem;
          }
          .hero-social-btn {
            width: 32px;
            height: 32px;
          }
          .skills-bar-wrapper {
            padding: 16px 0;
            margin-top: 20px;
          }
          .skills-bar-content {
            padding: 0 12px;
            gap: 8px 14px;
          }
          .skill-item {
            font-size: 0.78rem;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-container">
          {/* SECTION 1 — MAIN HERO (TOP ROW) */}
          <div className="hero-top-grid">
            {/* LEFT */}
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
              
              <h2 className="hero-title">Founder & Lead Dev<span className="hero-title-at">at Skyrovix</span></h2>
              
              <TypewriterSubtitle />

              {/* Desktop-only content rendered inside left column */}
              <div className="desktop-only-content">
                <p className="hero-desc">
                  I build modern, scalable, and user-centric digital products that combine clean design, powerful backend architecture, and intelligent AI capabilities.
                </p>
                
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">Get a project!</a>
                  <a href={`${import.meta.env.BASE_URL}Hariharan-CV.pdf`} download className="btn btn-secondary">Download CV</a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
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
                
                <div className="avatar-bg-circle-purple" />
                <motion.div 
                  className="avatar-bg-circle-dashed" 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                />
                <div className="avatar-bg-circle-red" />
                
                <div className="avatar-img-box">
                  <img src={studentImg} alt="Hariharan S." className="avatar-img" />
                </div>

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

          {/* SECTION 2 — FULL WIDTH (MOBILE) */}
          <motion.div 
            className="hero-section-2-mobile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="hero-desc">
              I build modern, scalable, and user-centric digital products that combine clean design, powerful backend architecture, and intelligent AI capabilities.
            </p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get a project!</a>
              <a href={`${import.meta.env.BASE_URL}Hariharan-CV.pdf`} download className="btn btn-secondary">Download CV</a>
            </div>

            <div className="hero-social-mobile">
              <span className="hero-social-label">CONNECT WITH ME</span>
              <div className="hero-social-icons">
                <a href="https://github.com/hariharan1022" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/hariharan-s-92b566381" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://wa.me/919940773204" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="WhatsApp">
                  <MessageSquare size={18} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 3 — TECHNOLOGIES / SKILLS (FULL WIDTH) */}
        <motion.div 
          className="skills-bar-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="skills-bar-content">
            {skills.map((skill) => (
              <span key={skill} className="skill-item">{skill}</span>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;

