import React from 'react';
import { GraduationCap, MapPin, School } from 'lucide-react';
import studentImg from '../assets/student.jpeg';

const About = () => {
    return (
        <section id="about">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        right: '-10px',
                        bottom: '-10px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        borderRadius: '20px',
                        zIndex: -1
                    }} />
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
                        <img src={studentImg} alt="S Hariharan" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '2px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
                    <div className="glass-card" style={{ padding: '40px', height: '100%', borderRadius: '18px' }}>
                        <span className="section-label">Biography</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', letterSpacing: '-0.02em' }}>About <span className="gradient-text">Me</span></h2>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '25px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                            I am an aspiring <span style={{ color: 'white', fontWeight: '600' }}>Full-Stack Web Developer</span> with a strong interest in building modern, responsive web applications.
                            I work with <span style={{ color: 'var(--primary)', fontWeight: '600' }}>React and JavaScript</span> to create user-friendly interfaces, and I use <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>MongoDB and SQL</span> to design efficient and scalable databases.
                        </p>
                        <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                            Currently, I am expanding my knowledge in <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Cloud Computing and Ethical Hacking</span> to build secure and high-performance digital solutions.
                            I am passionate about continuous learning and turning ideas into real-world applications.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="glass-card" style={{ padding: '25px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ color: 'var(--primary)' }}><School size={30} /></div>
                        <div>
                            <h4 style={{ color: 'white' }}>Institution</h4>
                            <p style={{ color: 'var(--text-dim)' }}>Mount Zion College of Engineering and Technology</p>
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '25px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ color: 'var(--secondary)' }}><GraduationCap size={30} /></div>
                        <div>
                            <h4 style={{ color: 'white' }}>Degree</h4>
                            <p style={{ color: 'var(--text-dim)' }}>Bachelor of Technology (B.Tech)</p>
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '25px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ color: 'var(--accent)' }}><MapPin size={30} /></div>
                        <div>
                            <h4 style={{ color: 'white' }}>Location</h4>
                            <p style={{ color: 'var(--text-dim)' }}>India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
