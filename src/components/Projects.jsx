import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import tamilrockesPng from '../assets/tamilrockes.png';
import aiChatBotPng from '../assets/ai chat bot.png';
import spotifyPng from '../assets/spotify.png';

const ProjectCard = ({ title, description, tags, image, github, live }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="glass-card"
        style={{ overflow: 'hidden', height: '100%' }}
    >
        <div style={{ height: '200px', overflow: 'hidden' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.target.style.transform = 'scale(1)'} />
        </div>
        <div style={{ padding: '25px' }}>
            <h3 style={{ marginBottom: '10px', color: 'white' }}>{title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '20px', minHeight: '60px' }}>{description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>#{tag}</span>
                ))}
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
                <a href={github} style={{ color: 'var(--text)', textDecoration: 'none' }}><Github size={20} /></a>
                <a href={live} style={{ color: 'var(--text)', textDecoration: 'none' }}><ExternalLink size={20} /></a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "TamilRockes Movie Hub",
            description: "A comprehensive movie streaming and discovery platform built with high-performance search and modern UI.",
            tags: ["React", "Node.js", "API Integration", "UI/UX"],
            image: tamilrockesPng,
            github: "https://github.com/hariharan1022/tamilrockes",
            live: "https://hariharan1022.github.io/tamilrockes/tamilrocker.html"
        },
        {
            title: "AI Public Health Chatbot",
            description: "An AI-powered chatbot designed for disease awareness and health education using modern natural language processing.",
            tags: ["AI", "React", "Python", "Public Health"],
            image: aiChatBotPng,
            github: "https://github.com/hariharan1022/Al-Driven-Public-Health-Chatbot-for-Disease-Awareness",
            live: "https://hariharan1022.github.io/Al-Driven-Public-Health-Chatbot-for-Disease-Awareness/"
        },
        {
            title: "Spotify Cloud Clone",
            description: "A full-featured music streaming clone with playlist management and interactive player controls.",
            tags: ["React", "Spotify API", "Tailwind", "State Management"],
            image: spotifyPng,
            github: "https://github.com/hariharan1022/Spotify-Clone",
            live: "https://hariharan1022.github.io/Spotify-Clone/"
        }
    ];

    return (
        <section id="projects">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Featured <span className="gradient-text">Projects</span></h2>
                <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>A selection of my recent work and personal experiments.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
