import React, { useState } from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram, FaBars, FaTimes } from "react-icons/fa";

const socialLinks = [
  { href: 'https://www.linkedin.com/in/bhavika-puppalwar-186a962a4', label: 'LinkedIn', icon: <FaLinkedin size={34} color="#0A66C2" /> },
  { href: 'https://github.com/Bhavikaa324', label: 'GitHub', icon: <FaGithub size={34} color="#fff" style={{ background: '#181717', borderRadius: '50%' }} /> },
  { href: 'mailto:puppalwarbhavika@gmail.com', label: 'Mail', icon: <FaEnvelope size={34} color="#EA4335" /> },
  { href: 'https://t.me/bhavika0324', label: 'Telegram', icon: <FaTelegram size={34} color="#229ED9" /> },
];

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="main-layout">
      <header className="app-header">
        <div className="logo">Bhavika.</div>
        {!menuOpen && (
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <FaBars size={28} />
          </button>
        )}
        <nav className="navbar">
          <ul className="nav-tabs">
            {sections.map((section) => (
              <li key={section.id} onClick={() => handleNavClick(section.id)}>
                {section.label}
              </li>
            ))}
          </ul>
        </nav>
        {menuOpen && (
          <div className="mobile-menu-overlay">
            <button className="close-menu" onClick={() => setMenuOpen(false)}>
              <FaTimes size={28} />
            </button>
            <ul className="mobile-nav-tabs">
              {sections.map((section) => (
                <li key={section.id} onClick={() => handleNavClick(section.id)}>
                  {section.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <main className="content-area">
        <section id="about" className="hero-section">
          <div className="hero-content">
            <About />
          </div>
          <div className="hero-image">
            <img 
              src="/profile0.jpg" 
              alt="Bhavika Puppalwar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </section>
        <div className="page-content" id="skills"><Skills /></div>
        <div className="page-content" id="projects"><Projects /></div>
        <div className="page-content" id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
