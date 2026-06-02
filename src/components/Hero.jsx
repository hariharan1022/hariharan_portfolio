import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink, Code2, ShoppingBag, Globe, Sparkles } from 'lucide-react';
import bgImage from '../assets/bg.png';

const TYPED_STRINGS = [
  'Full Stack Developer',
  'Skyrovix Founder',
  'E-Commerce Builder',
  'UI/UX Craftsman',
];

function useTypewriter(strings, speed = 65, pause = 1800) {
  const [text, setText] = useState('');
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setStrIdx(s => (s + 1) % strings.length);
    }
    setText(current.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx, strings, speed, pause]);

  return text;
}

const StatCard = ({ value, label, icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -4 }}
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '16px',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      flex: '1 1 180px',
      backdropFilter: 'blur(10px)',
      cursor: 'default',
    }}
  >
    <div style={{
      width: '44px', height: '44px', borderRadius: '12px',
      background: `${color}15`,
      border: `1px solid ${color}25`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color, flexShrink: 0,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', fontFamily: 'Outfit', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.78rem', color: 'rgba(156,163,175,0.75)', marginTop: '5px' }}>{label}</div>
    </div>
  </motion.div>
);

const Hero = () => {
  const typed = useTypewriter(TYPED_STRINGS);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.35 + 0.08,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const codeLines = [
    <><span style={{color:'#c084fc'}}>const </span><span style={{color:'#818cf8'}}>developer</span><span style={{color:'#e2e8f0'}}> = {'{'}</span></>,
    <><span style={{color:'#f472b6'}}>  name</span><span style={{color:'#e2e8f0'}}>: </span><span style={{color:'#34d399'}}>"S Hariharan"</span><span style={{color:'#e2e8f0'}}>,</span></>,
    <><span style={{color:'#f472b6'}}>  role</span><span style={{color:'#e2e8f0'}}>: </span><span style={{color:'#34d399'}}>"Full Stack Dev"</span><span style={{color:'#e2e8f0'}}>,</span></>,
    <><span style={{color:'#f472b6'}}>  agency</span><span style={{color:'#e2e8f0'}}>: </span><span style={{color:'#34d399'}}>"Skyrovix"</span><span style={{color:'#e2e8f0'}}>,</span></>,
    <><span style={{color:'#f472b6'}}>  stack</span><span style={{color:'#e2e8f0'}}>: [</span><span style={{color:'#34d399'}}>"React"</span><span style={{color:'#e2e8f0'}}>, </span><span style={{color:'#34d399'}}>"Node"</span><span style={{color:'#e2e8f0'}}>, </span><span style={{color:'#34d399'}}>"MongoDB"</span><span style={{color:'#e2e8f0'}}>],</span></>,
    <><span style={{color:'#f472b6'}}>  ecom</span><span style={{color:'#e2e8f0'}}>: [</span><span style={{color:'#34d399'}}>"Etsy"</span><span style={{color:'#e2e8f0'}}>, </span><span style={{color:'#34d399'}}>"eBay"</span><span style={{color:'#e2e8f0'}}>, </span><span style={{color:'#34d399'}}>"POD"</span><span style={{color:'#e2e8f0'}}>],</span></>,
    <><span style={{color:'#f472b6'}}>  openToWork</span><span style={{color:'#e2e8f0'}}>: </span><span style={{color:'#fb923c'}}>true</span><span style={{color:'#e2e8f0'}}>,</span></>,
    <><span style={{color:'#e2e8f0'}}>{'}'}</span><span style={{color:'#c084fc'}}>;</span></>,
  ];

  return (
    <>
      <style>{`
        #home.hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(3,0,20,0.93), rgba(3,0,20,0.97)), url(${bgImage});
          background-size: cover; background-position: center; background-attachment: fixed;
          z-index: 0;
        }
        .hero-canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .hero-glow-l {
          position: absolute; width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%);
          top: -200px; left: -200px; z-index: 1; pointer-events: none;
        }
        .hero-glow-r {
          position: absolute; width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(217,70,239,0.14) 0%, transparent 65%);
          bottom: -150px; right: -150px; z-index: 1; pointer-events: none;
        }

        /* Main wrapper — full width */
        .hero-wrap {
          position: relative; z-index: 2;
          width: 100%; max-width: 1300px;
          margin: 0 auto;
          padding: 130px 60px 60px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Two-column grid */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          width: 100%;
        }

        /* LEFT */
        .hero-left {}
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 100px;
          padding: 7px 18px;
          font-size: 0.78rem; font-weight: 700;
          color: #818cf8; letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 30px;
        }
        .hero-name {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 5.5vw, 5rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.04em;
          color: white; margin: 0 0 14px;
        }
        .hero-typed-row {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 30px; min-height: 48px;
        }
        .hero-typed-text {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          font-weight: 600; color: #818cf8;
        }
        .hero-cursor {
          display: inline-block; width: 3px; height: 1.3em;
          background: #818cf8; border-radius: 2px;
          animation: cursorBlink 1s step-end infinite;
          flex-shrink: 0; vertical-align: text-bottom;
        }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        .hero-desc {
          font-size: 1.05rem; color: rgba(156,163,175,0.88);
          line-height: 1.8; margin-bottom: 36px; max-width: 540px;
        }
        .hero-btns {
          display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .h-btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white; font-weight: 600; font-size: 0.95rem;
          text-decoration: none; font-family: 'Outfit', sans-serif;
          box-shadow: 0 4px 24px rgba(99,102,241,0.4);
          transition: filter .2s, transform .2s;
        }
        .h-btn-p:hover { filter: brightness(1.1); transform: translateY(-2px); }
        .h-btn-s {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: white; font-weight: 600; font-size: 0.95rem;
          text-decoration: none; font-family: 'Outfit', sans-serif;
          transition: background .2s, border-color .2s, transform .2s;
        }
        .h-btn-s:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }

        .hero-socials { display: flex; align-items: center; gap: 12px; }
        .h-social {
          display: flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: rgba(156,163,175,0.8); text-decoration: none;
          transition: color .2s, background .2s, border-color .2s, transform .2s;
        }
        .h-social:hover { color: white; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.15); transform: translateY(-2px); }
        .h-divider { width: 1px; height: 22px; background: rgba(255,255,255,0.1); }
        .h-social-txt { font-size: 0.8rem; color: rgba(156,163,175,0.55); }

        /* RIGHT — code card */
        .hero-right {
          display: flex; justify-content: center; align-items: center;
        }
        .hero-code-card {
          width: 100%; max-width: 480px;
          background: rgba(8,6,28,0.85);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1);
        }
        .hero-code-head {
          background: rgba(99,102,241,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 14px 18px; display: flex; align-items: center; gap: 8px;
        }
        .c-dot { width: 12px; height: 12px; border-radius: 50%; }
        .hero-code-body { padding: 22px 22px 22px; }
        .code-ln {
          display: flex; align-items: center; gap: 12px;
          font-family: 'Courier New', 'Fira Code', monospace;
          font-size: 0.82rem; margin-bottom: 9px; line-height: 1.4;
        }
        .ln-num { color: rgba(156,163,175,0.25); min-width: 14px; font-size: 0.72rem; user-select: none; }
        .code-status {
          margin-top: 16px; padding: 12px 14px;
          background: rgba(52,211,153,0.06);
          border: 1px solid rgba(52,211,153,0.15);
          border-radius: 10px;
          display: flex; align-items: center; gap: 8px;
        }

        /* Stats row */
        .hero-stats {
          display: flex; flex-wrap: wrap; gap: 16px;
          margin-top: 56px; width: 100%;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-wrap { padding: 120px 40px 60px; }
          .hero-grid { gap: 48px; }
        }
        @media (max-width: 860px) {
          .hero-wrap { padding: 110px 28px 50px; }
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-right { order: -1; }
          .hero-code-card { max-width: 420px; margin: 0 auto; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-btns { justify-content: center; }
          .hero-socials { justify-content: center; }
          .hero-badge { margin-left: auto; margin-right: auto; }
          .hero-typed-row { justify-content: center; }
          .hero-stats { justify-content: center; }
        }
        @media (max-width: 540px) {
          .hero-wrap { padding: 95px 16px 40px; }
          .hero-name { font-size: 2.6rem; }
          .hero-code-card { display: none; }
          .hero-btns { flex-direction: column; align-items: center; }
          .h-btn-p, .h-btn-s { width: 100%; justify-content: center; }
          .hero-stats { gap: 12px; }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-bg" />
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-glow-l" />
        <div className="hero-glow-r" />

        <div className="hero-wrap">
          {/* TOP: two-column grid */}
          <div className="hero-grid">

            {/* LEFT */}
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="hero-badge">
                <Sparkles size={13} />
                Available for freelance projects
              </div>

              <h1 className="hero-name">
                S <span className="gradient-text">Hariharan</span>
              </h1>

              <div className="hero-typed-row">
                <span className="hero-typed-text">{typed}</span>
                <span className="hero-cursor" />
              </div>

              <p className="hero-desc">
                Building premium digital experiences. Founder of{' '}
                <span style={{ color: '#818cf8', fontWeight: 600 }}>Skyrovix Webtech</span>{' '}
                and scaling high-growth{' '}
                <span style={{ color: 'white', fontWeight: 600 }}>E-Commerce businesses</span>{' '}
                across Etsy, eBay & custom print-on-demand platforms globally.
              </p>

              <div className="hero-btns">
                <a href="#projects" className="h-btn-p">
                  Explore My Work <ArrowRight size={16} />
                </a>
                <a href="https://hariharan1022.github.io/sk_web_tech/" target="_blank" rel="noopener noreferrer" className="h-btn-s">
                  Skyrovix Agency <ExternalLink size={14} />
                </a>
              </div>

              <div className="hero-socials">
                <a href="https://github.com/hariharan1022" target="_blank" rel="noopener noreferrer" className="h-social" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="#contact" className="h-social" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <div className="h-divider" />
                <span className="h-social-txt">Open to work & collaboration</span>
              </div>
            </motion.div>

            {/* RIGHT — Code Card */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <motion.div
                className="hero-code-card"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
              >
                {/* Window chrome */}
                <div className="hero-code-head">
                  <div className="c-dot" style={{ background: '#ff5f57' }} />
                  <div className="c-dot" style={{ background: '#ffbd2e' }} />
                  <div className="c-dot" style={{ background: '#28c840' }} />
                  <span style={{ color: 'rgba(156,163,175,0.45)', fontSize: '0.78rem', marginLeft: '8px', fontFamily: 'monospace' }}>
                    hariharan.js
                  </span>
                </div>

                {/* Code lines */}
                <div className="hero-code-body">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className="code-ln"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.07 }}
                    >
                      <span className="ln-num">{i + 1}</span>
                      <span>{line}</span>
                    </motion.div>
                  ))}

                  {/* Status indicator */}
                  <div className="code-status">
                    <motion.div
                      style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', flexShrink: 0 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <span style={{ fontSize: '0.78rem', color: '#34d399', fontFamily: 'monospace' }}>
                      Ready to build your next project
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* STATS ROW — full width below grid */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <StatCard value="10+" label="Projects Completed" icon={<Code2 size={20} />} color="#818cf8" delay={0.9} />
            <StatCard value="3+" label="Skyrovix Clients" icon={<Globe size={20} />} color="#a78bfa" delay={1.0} />
            <StatCard value="3" label="E-Commerce Stores" icon={<ShoppingBag size={20} />} color="#f472b6" delay={1.1} />
            <StatCard value="7+" label="Certifications Earned" icon={<Sparkles size={20} />} color="#34d399" delay={1.2} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
