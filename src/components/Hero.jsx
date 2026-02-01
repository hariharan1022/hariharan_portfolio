import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import bgImage from '../assets/bg.png';
import studentImg from '../assets/student.jpeg';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            padding: '120px 20px 60px 20px',
            overflow: 'hidden',
            backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.85)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '300px',
                height: '300px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '300px',
                height: '300px',
                background: 'var(--secondary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                zIndex: -1
            }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <div style={{ position: 'relative', marginBottom: '30px' }}>
                    <div style={{
                        position: 'absolute',
                        top: '-5px',
                        left: '-5px',
                        right: '-5px',
                        bottom: '-5px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        borderRadius: '50%',
                        filter: 'blur(10px)',
                        opacity: 0.6
                    }} />
                    <div style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        border: '3px solid var(--glass-border)',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
                    }}>
                        <img src={studentImg} alt="S Hariharan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
                <span className="section-label">Full Stack Developer</span>

                <h2 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '4px' }}>
                    HELLO, I'M
                </h2>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', lineHeight: 1, letterSpacing: '-0.04em' }}>
                    S <span className="gradient-text">Hariharan</span>
                </h1>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-dim)',
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    lineHeight: '1.8',
                    fontWeight: '400'
                }}>
                    I am an aspiring <span style={{ color: 'white', fontWeight: '600' }}>Full-Stack Web Developer</span> with a strong interest in building modern, responsive web applications.
                    I work with <span style={{ color: 'var(--primary)', fontWeight: '600' }}>React and JavaScript</span> to create user-friendly interfaces, and I use
                    <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>MongoDB and SQL</span> to design efficient and scalable databases.
                    Currently, I am expanding my knowledge in <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Cloud Computing and Ethical Hacking</span> to build secure and high-performance digital solutions.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn glass-card" style={{ border: '1px solid var(--glass-border)' }}>Contact Me</a>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ position: 'absolute', bottom: '40px', color: 'var(--text-dim)' }}
            >
                <MousePointer2 size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
