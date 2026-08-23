import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const socials = [
    { name: 'GitHub', icon: Github, link: 'https://github.com/hariharan1022' },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/hariharan-s-92b566381' },
    { name: 'WhatsApp', icon: MessageSquare, link: 'https://wa.me/919940773204' },
    { name: 'Email', icon: Mail, link: 'mailto:hariharanmahesh34@gmail.com' },
  ];

  return (
    <section id="contact" style={{ padding: '20px 40px', display: 'flex', justifyContent: 'center' }}>
      <style>{`
        .contact-glass-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 1200px;
          padding: 80px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .contact-glass-container:hover {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
        }

        .bg-orb-1 {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(255, 94, 67, 0.1) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(60px);
          animation: floatOrb 15s ease-in-out infinite alternate;
          z-index: 0;
          pointer-events: none;
        }

        .bg-orb-2 {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(60px);
          animation: floatOrb 12s ease-in-out infinite alternate-reverse;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 10%) scale(1.1); }
          100% { transform: translate(-5%, -5%) scale(0.9); }
        }

        .contact-content {
          position: relative;
          z-index: 2;
        }

        .contact-eyebrow {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ff5e43;
          margin-bottom: 12px;
          display: block;
        }

        .contact-heading {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin-bottom: 30px;
          letter-spacing: -0.02em;
        }

        .contact-heading-dim {
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.4s ease;
        }

        .contact-heading-dim:hover {
          color: white;
        }

        .huge-email-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 400;
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 50px;
        }

        .huge-email-link:hover {
          border-bottom-color: #ff5e43;
          color: #ff5e43;
          gap: 24px;
        }
        
        .huge-email-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.4s ease;
        }
        
        .huge-email-link:hover .huge-email-icon {
          background: #ff5e43;
          color: white;
          transform: rotate(45deg);
        }

        .social-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          position: relative;
        }

        .social-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 94, 67, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .social-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }

        .social-pill:hover::before {
          opacity: 1;
        }

        .social-pill-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 768px) {
          #contact {
            padding: 10px 12px;
          }
          .contact-glass-container {
            padding: 32px 18px;
            border-radius: 20px;
          }
          .contact-eyebrow {
            font-size: 0.85rem;
            margin-bottom: 8px;
          }
          .contact-heading {
            font-size: clamp(1.8rem, 6.5vw, 2.5rem);
            margin-bottom: 24px;
            line-height: 1.15;
          }
          .huge-email-link {
            font-size: clamp(0.82rem, 4.2vw, 1.1rem);
            gap: 8px;
            margin-bottom: 32px;
            max-width: 100%;
            word-break: break-all;
          }
          .huge-email-icon {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
          }
          .social-pills-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 100%;
          }
          .social-pill {
            padding: 12px 14px;
            font-size: 0.85rem;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="contact-glass-container">
        <div className="bg-orb-1" />
        <div className="bg-orb-2" />

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <motion.span variants={itemVariants} className="contact-eyebrow">
            What's Next?
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="contact-heading">
            Let's build something <br />
            <span className="contact-heading-dim">extraordinary together.</span>
          </motion.h2>

          <motion.div variants={itemVariants}>
            <a href="mailto:hariharanmahesh34@gmail.com" className="huge-email-link">
              hariharanmahesh34@gmail.com
              <div className="huge-email-icon">
                <ArrowUpRight size={24} />
              </div>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="social-pills-container">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target={social.link.startsWith('mailto') ? '_self' : '_blank'} 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <div className="social-pill-content">
                    <Icon size={18} />
                    {social.name}
                  </div>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
