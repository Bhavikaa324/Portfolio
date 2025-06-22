import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";

const socialLinks = [
  { href: 'https://www.linkedin.com/in/bhavika-puppalwar-186a962a4', label: 'LinkedIn', icon: <FaLinkedin size={28} /> },
  { href: 'https://github.com/Bhavikaa324', label: 'GitHub', icon: <FaGithub size={28} /> },
  { href: 'mailto:puppalwarbhavika@gmail.com', label: 'Mail', icon: <FaEnvelope size={28} /> },
  { href: 'https://t.me/bhavika0324', label: 'Telegram', icon: <FaTelegram size={28} /> },
];

function About() {
  return (
    <div className="about-container">
      <h1 className="about-greeting">Hi, I'm Bhavika Puppalwar</h1>
      <h2 className="about-subtitle">AI Enthusiast | Web Developer</h2>
      <div className="about-content">
        <p>
        I'm a final-year student pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning,  driven by a strategic problem-solving mindset and a growing interest in Machine Learning and Deep Learning, with a desire to contribute, grow, and apply innovative solutions.
          
          Recently, I've started diving into cloud technologies to better understand how scalable infrastructure can power intelligent applications and data-driven systems.
        
        </p>
      </div>
      <div className="about-socials">
        {socialLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} className="social-link">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default About; 