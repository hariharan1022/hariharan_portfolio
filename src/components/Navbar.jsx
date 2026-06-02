import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll for navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sectionIds = menuItems.map(i => i.toLowerCase());
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0 20px;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
          gap: 16px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: white;
          flex-shrink: 0;
        }
        .nav-logo {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: 800;
          font-size: 1.1rem;
          font-family: 'Outfit', sans-serif;
          box-shadow: 0 4px 14px rgba(99,102,241,0.4);
        }
        .nav-brandname {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          font-family: 'Outfit', sans-serif;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          text-decoration: none;
          color: rgba(156, 163, 175, 0.9);
          font-size: 0.88rem;
          font-weight: 500;
          padding: 7px 12px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: white;
          background: rgba(255,255,255,0.06);
        }
        .nav-link.active {
          color: white;
          background: rgba(99,102,241,0.12);
        }
        .nav-cta {
          flex-shrink: 0;
        }
        .nav-hire {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 9px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(99,102,241,0.15);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          white-space: nowrap;
          font-family: 'Outfit', sans-serif;
        }
        .nav-hire:hover {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-color: transparent;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(99,102,241,0.35);
        }
        .nav-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: white;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .nav-hamburger:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.15);
        }

        /* Drawer overlay */
        .nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(3, 0, 20, 0.7);
          backdrop-filter: blur(4px);
          z-index: 998;
        }

        /* Drawer panel */
        .nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: min(320px, 85vw);
          background: rgba(7, 5, 25, 0.98);
          backdrop-filter: blur(30px);
          border-left: 1px solid rgba(255,255,255,0.08);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
        }
        .nav-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-drawer-close {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .nav-drawer-close:hover { background: rgba(255,255,255,0.1); }
        .nav-drawer-links {
          display: flex;
          flex-direction: column;
          padding: 16px 16px;
          gap: 4px;
          flex: 1;
        }
        .nav-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          color: rgba(209, 213, 219, 0.9);
          font-size: 1rem;
          font-weight: 500;
          padding: 14px 16px;
          border-radius: 12px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-drawer-link:hover {
          color: white;
          background: rgba(255,255,255,0.06);
        }
        .nav-drawer-link.active {
          color: #818cf8;
          background: rgba(99,102,241,0.1);
          font-weight: 600;
        }
        .nav-drawer-footer {
          padding: 16px 24px 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .nav-drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 14px 24px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 4px 20px rgba(99,102,241,0.3);
          transition: filter 0.2s, transform 0.2s;
          font-family: 'Outfit', sans-serif;
          width: 100%;
        }
        .nav-drawer-cta:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        /* Responsive breakpoints */
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }

        @media (max-width: 480px) {
          .nav-root { padding: 0 12px; }
          .nav-inner { height: 60px; }
          .nav-brandname { font-size: 1rem; }
        }
      `}</style>

      {/* Main Navbar */}
      <nav
        className="nav-root"
        style={{
          background: scrolled
            ? 'rgba(5, 3, 18, 0.92)'
            : 'rgba(5, 3, 18, 0.5)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.4)'
            : 'none',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="nav-inner">
          {/* Brand */}
          <a href="#home" className="nav-brand">
            <div className="nav-logo">H</div>
            <span className="nav-brandname">
              Hariharan<span className="gradient-text">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link${activeSection === item.toLowerCase() ? ' active' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <a href="#contact" className="nav-hire">
              Hire Me <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              className="nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Drawer Header */}
              <div className="nav-drawer-header">
                <a href="#home" className="nav-brand" onClick={() => setIsOpen(false)}>
                  <div className="nav-logo" style={{ width: '32px', height: '32px', fontSize: '1rem', borderRadius: '8px' }}>H</div>
                  <span className="nav-brandname" style={{ fontSize: '1rem' }}>
                    Hariharan<span className="gradient-text">.dev</span>
                  </span>
                </a>
                <button className="nav-drawer-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="nav-drawer-links">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`nav-drawer-link${activeSection === item.toLowerCase() ? ' active' : ''}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                  >
                    {item}
                    <ChevronRight size={16} style={{ opacity: 0.4 }} />
                  </motion.a>
                ))}
              </div>

              {/* Drawer Footer CTA */}
              <div className="nav-drawer-footer">
                <a
                  href="#contact"
                  className="nav-drawer-cta"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
