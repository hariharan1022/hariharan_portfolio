import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

import cert1 from '../assets/certificate 1.jpeg';
import cert2 from '../assets/certificate 2.jpeg';
import cert3 from '../assets/certificate 3.jpeg';
import cert4 from '../assets/certificate 4.jpeg';
import cert5 from '../assets/certificate 5.jpeg';
import cert6 from '../assets/certificate 6.jpeg';
import cert7 from '../assets/certificate 7.jpeg';
import certSkyrovix from '../assets/certificate 2.0.png';
import certThiranex from '../assets/certificate 2.1.png';

const CertificateCard = ({ title, issuer, image, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -4, scale: 1.005 }}
    className="glass-card"
    style={{
      minWidth: 'min(85vw, 750px)',
      flex: '0 0 auto',
      margin: '0 16px',
      overflow: 'hidden',
      position: 'relative',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      scrollSnapAlign: 'center',
      cursor: 'default',
    }}
  >
    <div style={{
      position: 'relative',
      height: 'clamp(220px, 45vh, 450px)',
      overflow: 'hidden',
      background: '#0a0a0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10,
        background: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(34,211,238,0.1))',
        color: '#34d399',
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(52,211,153,0.2)',
      }}>
        <CheckCircle2 size={13} /> VERIFIED
      </div>

      <img
        src={image}
        alt={title}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          zIndex: 1,
          filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))',
          borderRadius: '4px',
        }}
      />
    </div>

    <div style={{ padding: '28px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <h3 style={{
        fontSize: '1.3rem', color: 'white', marginBottom: '6px',
        fontFamily: 'Outfit',
      }}>{title}</h3>
      <p style={{
        color: '#ff5e43', fontSize: '0.9rem', fontWeight: '600',
        letterSpacing: '0.05em',
      }}>{issuer.toUpperCase()}</p>
    </div>
  </motion.div>
);

const Certificates = () => {
  const scrollRef = useRef(null);

  const certificates = [
    { title: 'Skyrovix Internship', issuer: 'Skyrovix', image: certSkyrovix },
    { title: 'Thiranex Internship', issuer: 'Thiranex', image: certThiranex },
    { title: 'JavaScript', issuer: 'Infosys Springboard', image: cert1 },
    { title: 'HTML & CSS', issuer: 'Guvi', image: cert2 },
    { title: 'Python', issuer: 'Nativeva', image: cert3 },
    { title: 'Ethical Hacking', issuer: 'Guvi', image: cert4 },
    { title: 'MongoDB', issuer: 'MongoDB', image: cert5 },
    { title: 'Git & GitHub', issuer: 'Guvi', image: cert6 },
    { title: 'Generative AI', issuer: 'Guvi', image: cert7 },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth * 0.7;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certificates" style={{ overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="section-label"><Award size={12} /> Credentials</span>
        <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Professional certifications and training credentials across development, security, and AI.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        <motion.button
          onClick={() => scroll('left')}
          whileHover={{ scale: 1.05, background: 'rgba(255,94,67,0.15)' }}
          style={{
            position: 'absolute', left: '12px', top: '50%',
            transform: 'translateY(-50%)', zIndex: 100,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,94,67,0.15)',
            color: 'white', width: '48px', height: '48px',
            borderRadius: '50%', cursor: 'pointer',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <ChevronLeft size={26} />
        </motion.button>

        <motion.button
          onClick={() => scroll('right')}
          whileHover={{ scale: 1.05, background: 'rgba(255,94,67,0.15)' }}
          style={{
            position: 'absolute', right: '12px', top: '50%',
            transform: 'translateY(-50%)', zIndex: 100,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,94,67,0.15)',
            color: 'white', width: '48px', height: '48px',
            borderRadius: '50%', cursor: 'pointer',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <ChevronRight size={26} />
        </motion.button>

        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            padding: '20px 0 40px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          className="cert-scroll"
        >
          <style>{`.cert-scroll::-webkit-scrollbar { display: none; }`}</style>
          <div style={{ minWidth: 'calc((100vw - min(85vw, 750px)) / 2)' }} />
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} index={index} />
          ))}
          <div style={{ minWidth: 'calc((100vw - min(85vw, 750px)) / 2)' }} />
        </div>
      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px' }}>
        <p>Scroll or use arrows to browse all {certificates.length} certifications</p>
      </div>
    </section>
  );
};

export default Certificates;
