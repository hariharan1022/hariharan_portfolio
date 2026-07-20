import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Database, Shield, Zap, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      id: 'languages-ai',
      label: 'Languages & AI',
      icon: Zap,
      color: '#f472b6',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Generative AI', level: 85 },
        { name: 'Prompt Engineering', level: 90 }
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: Layout,
      color: '#818cf8',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 80 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Responsive UI', level: 90 }
      ]
    },
    {
      id: 'backend',
      label: 'Backend & Database',
      icon: Database,
      color: '#a78bfa',
      skills: [
        { name: 'Node.js & Express.js', level: 90 },
        { name: 'FastAPI', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Supabase', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'REST APIs & JWT', level: 90 }
      ]
    },
    {
      id: 'tools',
      label: 'Tools & Design',
      icon: Shield,
      color: '#34d399',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vercel & Netlify', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Figma', level: 85 },
        { name: 'Canva', level: 80 },
        { name: 'UI/UX Principles', level: 85 }
      ]
    }
  ];

  return (
    <>
      <style>{`
        .skills-section {
          padding: 100px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .skills-tabs-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .skill-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .skill-tab:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          transform: translateY(-2px);
        }

        .skill-tab.active {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .skill-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: white;
          letter-spacing: 0.02em;
        }

        .progress-bar-bg {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 10px;
          position: relative;
        }
        
        .progress-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 80px 20px;
          }
          .skills-tabs-container {
            gap: 12px;
          }
          .skill-tab {
            padding: 10px 20px;
            font-size: 0.95rem;
          }
        }
      `}</style>
      
      <section id="skills" className="skills-section">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label"><Zap size={12} /> Expertise</span>
          <h2 className="section-title">My Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated list of technologies I use to build robust and scalable applications.
          </p>
        </div>

        <div className="skills-tabs-container">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeTab === idx;
            return (
              <button 
                key={cat.id} 
                className={`skill-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
                style={{ borderColor: isActive ? cat.color : undefined }}
              >
                <Icon size={18} style={{ color: isActive ? cat.color : '#94a3b8' }} />
                {cat.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="skills-grid"
          >
            {skillCategories[activeTab].skills.map((skill, idx) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="skill-card"
              >
                <div className="skill-header">
                  <CheckCircle2 size={18} style={{ color: skillCategories[activeTab].color }} />
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="progress-bar-bg">
                  <motion.div 
                    className="progress-bar-fill"
                    style={{ backgroundColor: skillCategories[activeTab].color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Skills;
