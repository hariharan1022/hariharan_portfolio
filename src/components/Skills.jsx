import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, ShoppingBag, Shield } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <motion.div
        whileHover={{ y: -6 }}
        className="glass-card"
        style={{ padding: '30px', flex: '1 1 250px' }}
    >
        <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: `${color}12`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            color: color,
            border: `1px solid ${color}30`
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ marginBottom: '15px', color: 'white', fontSize: '1.2rem' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map(skill => (
                <span key={skill} style={{
                    padding: '5px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '100px',
                    fontSize: '0.82rem',
                    color: 'var(--text-dim)',
                    border: '1px solid var(--glass-border)'
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
            title: "Frontend & Design",
            color: "#6366f1",
            skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Responsive Design"]
        },
        {
            icon: Database,
            title: "Backend & Databases",
            color: "#a855f7",
            skills: ["Node.js", "Express.js", "MongoDB", "SQL / Databases", "RESTful APIs"]
        },
        {
            icon: ShoppingBag,
            title: "E-Commerce & Business",
            color: "#ec4899",
            skills: ["Etsy Shop Management", "eBay Seller Tools", "Print on Demand (POD)", "SEO Optimization", "Shopify Systems"]
        },
        {
            icon: Shield,
            title: "Security & Platforms",
            color: "#14b8a6",
            skills: ["Ethical Hacking", "Cloud Computing", "Network Security", "Git & Version Control"]
        }
    ];

    return (
        <section id="skills">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-label">Abilities</span>
                <h2 style={{ fontSize: '2.5rem' }}>Tech <span className="gradient-text">Stack & Expertise</span></h2>
                <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>The specialized tools and technologies I use to build scalable products.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                {skillGroups.map((group, index) => (
                    <SkillCard key={index} {...group} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
