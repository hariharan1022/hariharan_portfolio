import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-card"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: '800'
        }}>H</div>
        <span style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
          Hariharan<span className="gradient-text">.dev</span>
        </span>
      </div>
      <div style={{ display: 'flex', gap: '30px' }}>
        {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              textDecoration: 'none',
              color: 'var(--text-dim)',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--text)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
