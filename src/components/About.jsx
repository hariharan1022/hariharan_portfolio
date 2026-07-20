import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Code, Users } from 'lucide-react';

const coreValues = [
  { name: 'Innovation', icon: Lightbulb },
  { name: 'Problem Solving', icon: Target },
  { name: 'Clean Code', icon: Code },
  { name: 'User-Centered Design', icon: Users }
];

const About = () => {
  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: center;
        }

        /* Services Timeline on the Left */
        .about-services-timeline {
          position: relative;
          padding-left: 40px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .about-services-timeline::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 15px;
          bottom: 15px;
          width: 2px;
          background-color: rgba(255, 94, 67, 0.15);
        }

        .about-service-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .about-service-node {
          position: absolute;
          left: -40px;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          background-color: #ff5e43;
          border-radius: 2px; /* Square bullet matching mockup */
          box-shadow: 0 0 10px rgba(255, 94, 67, 0.4);
        }

        .about-service-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 94, 67, 0.05);
          border: 1px solid rgba(255, 94, 67, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff5e43;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .about-service-item:hover .about-service-icon-box {
          background: #ff5e43;
          color: white;
          border-color: #ff5e43;
          box-shadow: 0 6px 20px rgba(255, 94, 67, 0.3);
          transform: scale(1.05);
        }

        .about-service-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: white;
          letter-spacing: -0.01em;
        }

        /* About Text and Stats on the Right */
        .about-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .about-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .about-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .about-stats-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          width: 100%;
        }

        .about-stat-item {
          display: flex;
          flex-direction: column;
        }

        .about-stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #ff5e43;
          margin-bottom: 6px;
          line-height: 1;
        }

        .about-stat-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.4;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-section {
            padding: 80px 24px;
          }
        }

        @media (max-width: 600px) {
          .about-section {
            padding: 60px 16px;
          }
          .about-stats-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-services-timeline {
            gap: 36px;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-grid">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-services-timeline">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div className="about-service-item" key={value.name}>
                    <div className="about-service-node" />
                    <div className="about-service-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <span className="about-service-name">{value.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="about-title">About me</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <p className="about-desc" style={{ marginBottom: 0 }}>
                Hello! I'm Hariharan S, a passionate Full Stack Developer and the Founder of Skyrovix. I specialize in designing and developing modern web applications using today's most powerful technologies, with a strong focus on performance, scalability, and user experience.
              </p>
              <p className="about-desc" style={{ marginBottom: 0 }}>
                As the founder of Skyrovix, I lead the design and development of innovative software solutions, AI-powered applications, and internship management platforms. I enjoy turning ideas into fully functional products that are efficient, secure, and maintainable.
              </p>
              <div style={{ padding: '16px 20px', background: 'rgba(255, 94, 67, 0.05)', borderLeft: '3px solid #ff5e43', borderRadius: '0 8px 8px 0', margin: '8px 0' }}>
                <p className="about-desc" style={{ marginBottom: 0, fontStyle: 'italic', color: '#cbd5e1' }}>
                  "My mission is to create impactful digital products that simplify complex problems and provide exceptional user experiences."
                </p>
              </div>
            </div>
            
            <div className="about-stats-container">
              <div className="about-stat-item">
                <span className="about-stat-number">7+</span>
                <span className="about-stat-label">Projects Built</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">2026</span>
                <span className="about-stat-label">Founded Skyrovix</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">5+</span>
                <span className="about-stat-label">Technologies Used</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
