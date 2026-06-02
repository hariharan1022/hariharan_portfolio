import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import tamilrockesPng from '../assets/tamilrockes.png';
import aiChatBotPng from '../assets/ai chat bot.png';
import spotifyPng from '../assets/spotify.png';
import skyrovixJpg from '../assets/skyrovix.jpg';
import chessPng from '../assets/chess.png';
import nursingPng from '../assets/nursing.png';

const ProjectCard = ({ title, description, tags, image, github, live, isAgency }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className="glass-card"
        style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
        <div style={{ height: '220px', overflow: 'hidden', position: 'relative', background: '#09090e' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.target.style.transform = 'scale(1)'} />
            {isAgency && (
                <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                }}>
                    OUR BUSINESS
                </div>
            )}
        </div>
        <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <h3 style={{ marginBottom: '10px', color: 'white', fontSize: '1.25rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', marginBottom: '20px', lineHeight: '1.6' }}>{description}</p>
            </div>
            <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            color: isAgency ? 'var(--accent)' : 'var(--primary)',
                            background: isAgency ? 'rgba(217, 70, 239, 0.08)' : 'rgba(99, 102, 241, 0.08)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontWeight: '600'
                        }}>#{tag}</span>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }}
                           onMouseOver={e => e.currentTarget.style.color = 'white'}
                           onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>
                            <Github size={20} />
                        </a>
                    )}
                    {live && (
                        <a href={live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', textDecoration: 'none' }}
                           onMouseOver={e => e.currentTarget.style.color = 'white'}
                           onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>
                            Launch App <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Skyrovix Webtech",
            description: "Premium digital solutions provider delivering custom full-stack web applications, business software, and API services globally.",
            tags: ["Agency", "React.js", "Tailwind", "Freelance Services"],
            image: skyrovixJpg,
            live: "https://hariharan1022.github.io/sk_web_tech/",
            isAgency: true
        },
        {
            title: "Masters Chess Academy",
            description: "An elegant, interactive e-learning platform showcasing courses, academic roadmaps, puzzles, and trainer registries.",
            tags: ["React", "CSS Grid", "Dynamic UI", "E-Learning"],
            image: chessPng,
            live: "https://hariharan1022.github.io/chess_mca/"
        },
        {
            title: "Mount Zion College of Nursing",
            description: "A comprehensive academic portal for college curriculum details, student hubs, admissions systems, and portals.",
            tags: ["React", "Academic Portal", "Form System", "UI Design"],
            image: nursingPng,
            live: "https://hariharan1022.github.io/nursing/"
        },
        {
            title: "TamilRockes Movie Hub",
            description: "A comprehensive movie streaming and discovery platform built with high-performance search engine and beautiful responsive layout.",
            tags: ["React", "Node.js", "API Integration", "UI/UX"],
            image: tamilrockesPng,
            github: "https://github.com/hariharan1022/tamilrockes",
            live: "https://hariharan1022.github.io/tamilrockes/tamilrocker.html"
        },
        {
            title: "AI Public Health Chatbot",
            description: "An AI-powered chatbot designed for disease awareness and health education using modern natural language processing models.",
            tags: ["AI", "React", "Python", "Public Health"],
            image: aiChatBotPng,
            github: "https://github.com/hariharan1022/Al-Driven-Public-Health-Chatbot-for-Disease-Awareness",
            live: "https://hariharan1022.github.io/Al-Driven-Public-Health-Chatbot-for-Disease-Awareness/"
        },
        {
            title: "Spotify Cloud Clone",
            description: "A full-featured music streaming clone with custom playlist management, audio streaming systems, and interactive player panels.",
            tags: ["React", "Spotify API", "Tailwind", "State Management"],
            image: spotifyPng,
            github: "https://github.com/hariharan1022/Spotify-Clone",
            live: "https://hariharan1022.github.io/Spotify-Clone/"
        }
    ];

    return (
        <section id="projects">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-label">Portfolio</span>
                <h2 style={{ fontSize: '2.5rem' }}>Featured <span className="gradient-text">Projects & Ventures</span></h2>
                <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>A showcase of my commercial operations and academic programming builds.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
