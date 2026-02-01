import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Server, Shield, Cloud, Terminal } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="glass-card"
        style={{ padding: '30px', flex: '1', minWidth: '300px' }}
    >
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: `${color}20`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            color: color
        }}>
            <Icon size={28} />
        </div>
        <h3 style={{ marginBottom: '15px', color: 'var(--text)' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {skills.map(skill => (
                <span key={skill} style={{
                    padding: '6px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: 'var(--text-dim)',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillGroups = [
        {
            icon: Layout,
            title: "Frontend Development",
            color: "#6366f1",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "State Management"]
        },
        {
            icon: Database,
            title: "Backend & Database",
            color: "#a855f7",
            skills: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs"]
        },
        {
            icon: Shield,
            title: "Security & Cloud",
            color: "#ec4899",
            skills: ["Ethical Hacking", "Cloud Computing", "Network Security", "Git"]
        }
    ];

    return (
        <section id="skills">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Tech <span className="gradient-text">Stack</span></h2>
                <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                {skillGroups.map((group, index) => (
                    <SkillCard key={index} {...group} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
