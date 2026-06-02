import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

import cert1 from '../assets/certificate 1.jpeg';
import cert2 from '../assets/certificate 2.jpeg';
import cert3 from '../assets/certificate 3.jpeg';
import cert4 from '../assets/certificate 4.jpeg';
import cert5 from '../assets/certificate 5.jpeg';
import cert6 from '../assets/certificate 6.jpeg';
import cert7 from '../assets/certificate 7.jpeg';

const CertificateCard = ({ title, issuer, image }) => (
    <div
        className="glass-card"
        style={{
            minWidth: 'min(90vw, 800px)',
            flex: '0 0 auto',
            margin: '0 20px',
            overflow: 'hidden',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            scrollSnapAlign: 'center'
        }}
    >
        <div style={{
            position: 'relative',
            height: 'clamp(250px, 50vh, 500px)',
            overflow: 'hidden',
            background: '#0a0a0f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 10,
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
                <CheckCircle2 size={14} /> VERIFIED
            </div>

            <img
                src={image}
                alt={title}
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    zIndex: 1,
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))'
                }}
            />
        </div>

        <div style={{ padding: '30px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h3 style={{
                fontSize: '1.5rem',
                color: 'white',
                marginBottom: '8px',
                fontFamily: 'Outfit'
            }}>{title}</h3>
            <p style={{
                color: 'var(--primary)',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.05em'
            }}>{issuer.toUpperCase()}</p>
        </div>
    </div>
);

const Certificates = () => {
    const scrollRef = useRef(null);

    const certificates = [
        { title: "JavaScript", issuer: "infosys springboard", image: cert1 },
        { title: "Html & Css", issuer: "Guvi", image: cert2 },
        { title: "Python", issuer: "Nativeva", image: cert3 },
        { title: "Ethical Hacking ", issuer: "Guvi", image: cert4 },
        { title: "MongoDB", issuer: "MongoDB", image: cert5 },
        { title: "Git & Github", issuer: "Guvi", image: cert6 },
        { title: "Generative AI", issuer: "Guvi", image: cert7 },
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="certificates" style={{ padding: '100px 0', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}>
                <span className="section-label">Gallery</span>
                <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em', marginBottom: '15px' }}>
                    My <span className="gradient-text">Certifications</span>
                </h2>
                <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                    A horizontal showcase of my professional achievements and industrial training credentials.
                </p>
            </div>

            <div style={{ position: 'relative', width: '100%' }}>
                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll('left')}
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 100,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border)',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <ChevronLeft size={30} />
                </button>

                <button
                    onClick={() => scroll('right')}
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 100,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border)',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <ChevronRight size={30} />
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollBehavior: 'smooth',
                        padding: '20px 0 40px 0',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    <div style={{ minWidth: 'calc((100vw - min(90vw, 800px)) / 2)' }}></div>
                    {certificates.map((cert, index) => (
                        <CertificateCard key={index} {...cert} />
                    ))}
                    <div style={{ minWidth: 'calc((100vw - min(90vw, 800px)) / 2)' }}></div>
                </div>
            </div>

            <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                <p>Scroll or use arrows to view all 7 credentials</p>
            </div>
        </section>
    );
};

export default Certificates;
