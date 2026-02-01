import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        color: 'var(--text-dim)',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '50px'
      }}>
        <p>&copy; {new Date().getFullYear()} S Hariharan. Built with React & Passion.</p>
      </footer>
    </div>
  );
}

export default App;
