import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contacts', href: '#contact', id: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sectionIds = ['home', 'about', 'projects', 'contact'];
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

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0 40px;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 80px; gap: 16px;
        }
        .nav-brand {
          text-decoration: none; color: white; flex-shrink: 0;
        }
        .nav-brandname {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem; font-weight: 700;
          letter-spacing: -0.01em;
          color: white; white-space: nowrap;
        }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-link {
          text-decoration: none; color: rgba(148,163,184,0.75);
          font-size: 0.88rem; font-weight: 500;
          transition: color 0.2s; white-space: nowrap;
          font-family: 'Outfit', sans-serif;
        }
        .nav-link:hover,
        .nav-link.active { color: white; }
        
        .nav-hamburger {
          display: none; align-items: center; justify-content: center;
          background: transparent; border: none; color: white;
          cursor: pointer; flex-shrink: 0;
          transition: all 0.2s;
        }

        .nav-overlay {
          position: fixed; inset: 0;
          background: rgba(11,15,23,0.9);
          backdrop-filter: blur(8px); z-index: 1001;
        }
        .nav-drawer {
          position: fixed; top: 0; right: 0; height: 100%;
          width: min(320px, 85vw);
          background: #0d121a;
          border-left: 1px solid rgba(255,255,255,0.06);
          z-index: 1002; display: flex; flex-direction: column; overflow: hidden;
        }
        .nav-drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .nav-drawer-close {
          background: transparent; border: none; color: white;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
        }
        .nav-drawer-links { display: flex; flex-direction: column; padding: 32px; gap: 24px; }
        .nav-drawer-link {
          text-decoration: none; color: rgba(148,163,184,0.75);
          font-size: 1.1rem; font-weight: 500;
          transition: color 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .nav-drawer-link:hover,
        .nav-drawer-link.active { color: white; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-root { padding: 0 24px; }
          .nav-inner { height: 70px; }
        }
      `}</style>

      <nav
        className="nav-root"
        style={{
          background: scrolled ? '#0b0f17' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="nav-inner">
          <a href="#home" className="nav-brand">
            <span className="nav-brandname">Hariharan S.</span>
          </a>

          <div className="nav-links">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link${activeSection === item.id ? ' active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            >
              <div className="nav-drawer-header">
                <span className="nav-brandname">Hariharan S.</span>
                <button className="nav-drawer-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>

              <div className="nav-drawer-links">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`nav-drawer-link${activeSection === item.id ? ' active' : ''}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
