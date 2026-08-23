import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Bot, PenTool, Cloud } from 'lucide-react';

const servicesData = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: '#818cf8',
    description: 'I develop responsive, interactive, and visually appealing user interfaces using modern frontend technologies. My focus is on creating fast-loading, accessible, and user-friendly experiences that work seamlessly across all devices.',
    points: ['React.js & Next.js', 'Tailwind CSS', 'Responsive UI']
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: '#a78bfa',
    description: 'I build secure and scalable backend systems with efficient APIs, authentication, database integration, and server-side logic to support enterprise-grade web applications.',
    points: ['Node.js & Express', 'FastAPI', 'REST APIs & JWT']
  },
  {
    title: 'Database Design',
    icon: Database,
    color: '#f472b6',
    description: 'I design optimized relational database structures with proper normalization, indexing, and security to ensure high performance and reliability.',
    points: ['PostgreSQL', 'Supabase', 'Data Modeling']
  },
  {
    title: 'Artificial Intelligence',
    icon: Bot,
    color: '#34d399',
    description: 'I integrate AI capabilities into applications, including intelligent automation, chat systems, content generation, workflow optimization, and productivity tools.',
    points: ['Generative AI', 'Prompt Engineering', 'Automation']
  },
  {
    title: 'UI/UX Design',
    icon: PenTool,
    color: '#fb923c',
    description: 'I enjoy designing interfaces that are both beautiful and functional, ensuring users have an intuitive and engaging experience.',
    points: ['Figma', 'Wireframing', 'User-Centered Design']
  },
  {
    title: 'Cloud Deployment',
    icon: Cloud,
    color: '#22d3ee',
    description: 'I deploy and maintain applications on modern cloud platforms while ensuring scalability, security, and high availability.',
    points: ['Vercel & Netlify', 'CI/CD Pipelines', 'Server Management']
  }
];

const Services = () => {
  return (
    <>
      <style>{`
        .services-section {
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .service-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 28px;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon-wrapper {
          transform: scale(1.1);
        }

        .service-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin-bottom: 16px;
        }

        .service-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .service-points {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .service-point {
          font-size: 0.8rem;
          padding: 6px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,0.03);
          color: #cbd5e1;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .service-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.1;
          z-index: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-glow {
          opacity: 0.2;
        }

        .service-content {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .services-section {
            display: none !important;
          }
        }
      `}</style>

      <section id="services" className="services-section">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label"><Monitor size={12} /> Services</span>
          <h2 className="section-title">Core <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive solutions for modern digital products, from design to deployment.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-glow" style={{ background: service.color }} />
                <div className="service-content">
                  <div className="service-icon-wrapper" style={{ background: `${service.color}15`, color: service.color, border: `1px solid ${service.color}30` }}>
                    <Icon size={26} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  
                  <div className="service-points">
                    {service.points.map(point => (
                      <span key={point} className="service-point">{point}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
