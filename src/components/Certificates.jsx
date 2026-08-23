import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Award, Sparkles, Maximize2, X } from 'lucide-react';

import cert1 from '../assets/certificate/certificate 1.jpeg';
import cert2 from '../assets/certificate/certificate 2.jpeg';
import cert3 from '../assets/certificate/certificate 3.jpeg';
import cert4 from '../assets/certificate/certificate 4.jpeg';
import cert5 from '../assets/certificate/certificate 5.jpeg';
import cert6 from '../assets/certificate/certificate 6.jpeg';
import cert7 from '../assets/certificate/certificate 7.jpeg';
import cert8 from '../assets/certificate/certificate 8.jpeg';
import cert9 from '../assets/certificate/certificate 9.jpeg';
import certSkyrovix from '../assets/certificate/certificate 2.0.png';
import certThiranex from '../assets/certificate/certificate 2.1.png';

const CertificateCard = ({ title, issuer, image, index, onExpand }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="cert-card"
  >
    <div 
      className="cert-img-container"
      onClick={() => onExpand({ title, issuer, image })}
      title="Click to view full certificate"
    >
      <img
        src={image}
        alt={title}
        className="cert-img"
      />
      <div className="cert-img-hover-overlay">
        <span className="cert-expand-pill">
          <Maximize2 size={13} /> View Full
        </span>
      </div>
    </div>

    <div className="cert-info">
      <div className="cert-badge">
        <CheckCircle2 size={12} /> VERIFIED
      </div>
      <h3 className="cert-title">{title}</h3>
      <p className="cert-issuer">{issuer.toUpperCase()}</p>
    </div>
  </motion.div>
);

const Certificates = () => {
  const scrollRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  const certificates = [
    { title: 'Skyrovix Internship', issuer: 'Skyrovix', image: certSkyrovix },
    { title: 'Thiranex Internship', issuer: 'Thiranex', image: certThiranex },
    { title: 'Three-Day Industry-Driven Cloud Computing Technologies', issuer: 'Mount Zion College', image: cert8 },
    { title: "CIH'26 - Coimbatore Innovation Hackathon 2026", issuer: 'AIC RAISE & Rathinam University', image: cert9 },
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
      const scrollAmount = current.offsetWidth * 0.75;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certificates" className="cert-section">
      <style>{`
        .cert-section {
          padding: 90px 20px;
          overflow: hidden;
        }

        .cert-card {
          width: min(85vw, 680px);
          flex: 0 0 auto;
          margin: 0 14px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          scroll-snap-align: center;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .cert-card:hover {
          border-color: rgba(255, 94, 67, 0.3);
          transform: translateY(-4px);
        }

        .cert-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          max-height: 420px;
          background: #060810;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cert-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 6px;
          filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.6));
          transition: transform 0.3s ease;
        }

        .cert-img-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(6, 8, 16, 0.55);
          backdrop-filter: blur(3px);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .cert-img-container:hover .cert-img-hover-overlay {
          opacity: 1;
        }

        .cert-expand-pill {
          background: linear-gradient(135deg, #ff5e43, #fb923c);
          color: white;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 6px 16px rgba(255, 94, 67, 0.4);
        }

        .cert-info {
          padding: 20px 24px;
          text-align: center;
          background: linear-gradient(180deg, rgba(10, 15, 25, 0.95) 0%, rgba(17, 23, 35, 1) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .cert-badge {
          background: linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(34, 211, 238, 0.1));
          color: #34d399;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border: 1px solid rgba(52, 211, 153, 0.2);
        }

        .cert-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: white;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          line-height: 1.35;
        }

        .cert-issuer {
          color: #ff5e43;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .cert-scroll {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 20px 0 30px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .cert-scroll::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .cert-section {
            padding: 60px 12px;
          }
          .cert-card {
            width: 86vw;
            margin: 0 6px;
          }
          .cert-img-container {
            aspect-ratio: 16 / 11;
            padding: 10px;
          }
          .cert-info {
            padding: 16px 16px;
            gap: 6px;
          }
          .cert-title {
            font-size: 1.05rem;
          }
          .cert-nav-btn {
            display: none !important;
          }
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
          className="cert-nav-btn"
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
          className="cert-nav-btn"
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

        <div ref={scrollRef} className="cert-scroll">
          <div style={{ minWidth: 'calc((100vw - min(85vw, 680px)) / 2)' }} />
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} index={index} onExpand={setActiveModal} />
          ))}
          <div style={{ minWidth: 'calc((100vw - min(85vw, 680px)) / 2)' }} />
        </div>
      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '10px' }}>
        <p>Swipe or use arrows to browse all {certificates.length} certifications</p>
      </div>

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
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '1100px',
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
                padding: '16px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div>
                  <h3 style={{ margin: 0, color: 'white', fontFamily: 'Outfit', fontSize: '1.2rem' }}>
                    {activeModal.title}
                  </h3>
                  <p style={{ margin: '2px 0 0', color: '#ff5e43', fontSize: '0.82rem', fontWeight: 600 }}>
                    {activeModal.issuer.toUpperCase()}
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
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{
                flex: 1,
                overflow: 'auto',
                background: '#060810',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}>
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
