import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "Founder & Lead Developer",
    company: "Skyrovix",
    date: "23 June 2026 – Present",
    icon: Briefcase,
    color: "#ff5e43",
    description: "Founded Skyrovix with a vision to build modern, scalable, and AI-powered software solutions. Leading the design, development, and deployment of web applications while focusing on innovation, performance, and user-centric experiences. Responsible for product architecture, full-stack development, UI/UX design, cloud deployment, and technical strategy.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Personal Projects & Independent Dev",
    date: "2024 – June 2026",
    icon: Briefcase,
    color: "#818cf8",
    description: "Focused on mastering modern web development by building real-world projects using React, Next.js, TypeScript, Node.js, Python, FastAPI, Supabase, and PostgreSQL. Developed portfolio websites, management systems, AI-integrated applications, and responsive user interfaces while strengthening software architecture and problem-solving skills.",
  },
  {
    id: 3,
    title: "Learning & Skill Development",
    company: "Self-Learning Journey",
    date: "2024 - continue",
    icon: GraduationCap,
    color: "#34d399",
    description: "Started exploring programming and software development through self-learning. Built a strong foundation in HTML, CSS, JavaScript, databases, version control, and modern development workflows. Consistently worked on personal projects, experimented with new technologies, and developed practical problem-solving abilities that paved the way for becoming a full-stack developer.",
  }
];

const Experience = () => {
  return (
    <>
      <style>{`
        .experience-section {
          padding: 100px 40px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-container {
          position: relative;
          margin-top: 60px;
        }

        /* Center line */
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.05);
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          width: 45%;
          padding: 30px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.1);
        }

        /* Arrow pointing to center line */
        .timeline-content::before {
          content: '';
          position: absolute;
          top: 30px;
          width: 0;
          height: 0;
          border-style: solid;
        }

        .timeline-item:nth-child(odd) .timeline-content::before {
          right: -15px;
          border-width: 15px 0 15px 15px;
          border-color: transparent transparent transparent rgba(255, 255, 255, 0.02);
        }

        .timeline-item:nth-child(even) .timeline-content::before {
          left: -15px;
          border-width: 15px 15px 15px 0;
          border-color: transparent rgba(255, 255, 255, 0.02) transparent transparent;
        }

        .timeline-icon-container {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #111723;
          border: 2px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        .timeline-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .timeline-company {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .timeline-date {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 20px;
        }

        .timeline-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #94a3b8;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .timeline-container::before {
            left: 30px;
          }
          .timeline-icon-container {
            left: 30px;
          }
          .timeline-item, .timeline-item:nth-child(even) {
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline-content {
            width: calc(100% - 80px);
            margin-left: 80px;
          }
          .timeline-item:nth-child(odd) .timeline-content::before,
          .timeline-item:nth-child(even) .timeline-content::before {
            left: -15px;
            right: auto;
            border-width: 15px 15px 15px 0;
            border-color: transparent rgba(255, 255, 255, 0.02) transparent transparent;
          }
        }
      `}</style>

      <section id="experience" className="experience-section">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label"><Award size={12} /> My Journey</span>
          <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A timeline of my professional career and educational background.
          </p>
        </div>

        <div className="timeline-container">
          {experienceData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-company" style={{ color: item.color }}>{item.company}</div>
                  <div className="timeline-date">{item.date}</div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
                
                <div className="timeline-icon-container" style={{ borderColor: item.color, color: item.color }}>
                  <Icon size={24} />
                </div>
                
                <div style={{ width: '45%' }} className="timeline-spacer" />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Experience;
