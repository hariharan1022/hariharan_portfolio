import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="glass-card" style={{ padding: '60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'var(--primary)',
                    filter: 'blur(100px)',
                    opacity: 0.1
                }} />

                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's <span className="gradient-text">Connect</span></h2>
                <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                    Interested in working together or just want to say hi? Feel free to reach out through any of the platforms below.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    {[
                        { icon: Mail, label: 'Email', href: 'mailto:hariharanmahesh34@gmail.com' },
                        { icon: Github, label: 'GitHub', href: 'https://github.com/hariharan1022' },
                        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hariharan-s-92b566381' },
                        { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/919940773204' }
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                color: 'var(--text-dim)',
                                textDecoration: 'none',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.color = 'var(--text)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.color = 'var(--text-dim)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <item.icon size={24} />
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
