import React from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";

const socialLinks = [
  { href: 'https://linkedin.com/', label: 'LinkedIn', icon: <FaLinkedin size={34} color="#0A66C2" /> },
  { href: 'hhttps://github.com/Bhavikaa324', label: 'GitHub', icon: <FaGithub size={34} color="#fff" style={{ background: '#181717', borderRadius: '50%' }} /> },
  { href: 'mailto:puppalwarbhavika@gmail.com', label: 'Mail', icon: <FaEnvelope size={34} color="#EA4335" /> },
  { href: 'https://t.me/', label: 'Telegram', icon: <FaTelegram size={34} color="#229ED9" /> },
];

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
];

function App() {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <div className="sidebar-content">
          <h1 className="sidebar-name">Bhavika Puppalwar</h1>
          <div className="sidebar-title">AI Enthusiast | Web Developer</div>
          <div className="sidebar-socials">
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} style={{ color: '#fff' }}>
                {link.icon}
              </a>
            ))}
          </div>
          <ul className="sidebar-tabs">
            {sections.map((section) => (
              <li key={section.id} onClick={() => handleNavClick(section.id)}>
                {section.label}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="content-area">
        <div className="page-content" id="about"><About /></div>
        <div className="page-content" id="skills"><Skills /></div>
        <div className="page-content" id="projects"><Projects /></div>
        <div className="page-content" id="contact"><Contact /></div>
      </div>
    </div>
  );
}

export default App;
