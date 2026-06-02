import React from 'react';
import { GraduationCap, MapPin, School, Globe, ShoppingBag, ArrowUpRight } from 'lucide-react';
import studentImg from '../assets/student.jpeg';

const About = () => {
    return (
        <section id="about">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                
                {/* Intro Title */}
                <div style={{ textAlign: 'center' }}>
                    <span className="section-label">Profile</span>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
                        About <span className="gradient-text">Me & My Ventures</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                        Passionate about crafting outstanding digital experiences and scaling online businesses.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '40px', 
                    alignItems: 'start' 
                }}>
                    
                    {/* Left: Bio Card & Image */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '8px',
                                left: '8px',
                                right: '-8px',
                                bottom: '-8px',
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                borderRadius: '24px',
                                zIndex: -1,
                                opacity: 0.6
                            }} />
                            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '24px' }}>
                                <img src={studentImg} alt="S Hariharan" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '480px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                        </div>

                        {/* Quick Info Grid */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ color: 'var(--primary)' }}><School size={24} /></div>
                                <div>
                                    <h4 style={{ color: 'white', fontSize: '0.95rem' }}>Institution</h4>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Mount Zion College of Engineering & Tech</p>
                                </div>
                            </div>
                            <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ color: 'var(--secondary)' }}><GraduationCap size={24} /></div>
                                <div>
                                    <h4 style={{ color: 'white', fontSize: '0.95rem' }}>Degree</h4>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Bachelor of Technology (B.Tech)</p>
                                </div>
                            </div>
                            <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ color: 'var(--accent)' }}><MapPin size={24} /></div>
                                <div>
                                    <h4 style={{ color: 'white', fontSize: '0.95rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detailed Venture Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        
                        {/* Biography */}
                        <div className="glass-card" style={{ padding: '30px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'white' }}>Who is Hariharan?</h3>
                            <p style={{ color: 'var(--text-dim)', marginBottom: '15px', lineHeight: '1.7', fontSize: '0.95rem' }}>
                                I am a professional <span style={{ color: 'white', fontWeight: '600' }}>Full-Stack Developer</span> specializing in React, Node.js, and modern cloud databases. By combining technical execution with business strategy, I design high-performance applications that deliver real business value.
                            </p>
                            <p style={{ color: 'var(--text-dim)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                                Currently, I balance my academic pursuits with scaling professional service and e-commerce companies, offering state-of-the-art web technology and digital product systems globally.
                            </p>
                        </div>

                        {/* Skyrovix Freelance */}
                        <div className="glass-card" style={{ padding: '30px', position: 'relative' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Freelance Agency</span>
                                    <h3 style={{ fontSize: '1.4rem', color: 'white', marginTop: '4px' }}>Skyrovix Webtech</h3>
                                </div>
                                <a href="https://hariharan1022.github.io/sk_web_tech/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                                    <ArrowUpRight size={20} />
                                </a>
                            </div>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '15px' }}>
                                A premium digital agency delivering bespoke web applications, custom platforms, and software solutions. Under Skyrovix, I construct beautiful, high-speed, and secure user experiences for global clients.
                            </p>
                            <a href="https://hariharan1022.github.io/sk_web_tech/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                                Visit Skyrovix Website <Globe size={14} />
                            </a>
                        </div>

                        {/* E-Commerce Ventures */}
                        <div className="glass-card" style={{ padding: '30px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '15px' }}>
                                <div style={{ color: 'var(--accent)' }}><ShoppingBag size={24} /></div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>E-Commerce Business</span>
                                    <h3 style={{ fontSize: '1.4rem', color: 'white', marginTop: '2px' }}>Global E-Commerce</h3>
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '15px' }}>
                                Architecting custom sales platforms and optimizing marketplace presence. I run high-volume sales channels spanning **Etsy**, **eBay**, and custom online stores, leveraging automated **Print-on-Demand** workflows and intelligent target-market analytics.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Etsy', 'eBay', 'Print-on-Demand', 'Custom Stores'].map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '4px 10px',
                                        background: 'rgba(217, 70, 239, 0.08)',
                                        border: '1px solid rgba(217, 70, 239, 0.15)',
                                        color: 'var(--accent)',
                                        borderRadius: '6px',
                                        fontWeight: '600'
                                    }}>{tag}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
