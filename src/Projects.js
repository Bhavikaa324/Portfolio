import React from 'react';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    name: 'SignSnap',
    tech: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'pyttsx3', 'Flask'],
    description: 'Developed a real-time traffic sign recognition system using CNN and OpenCV, providing live detection and classification of road signs from a camera feed. Implemented audio feedback with a text-to-speech engine and a Flask web interface for interactive monitoring and control. The system helps in making driving safer and smarter.',
    github: 'https://github.com/Bhavikaa324/Sign_Snap',
  },
  {
    name: 'Subjective Answer Evaluator',
    tech: ['Python', 'Keras', 'TensorFlow', 'NLTK', 'scikit-learn', 'Flask'],
    description: 'Built an automated answer evaluation system using LSTM and NLP to assess student responses based on semantic similarity with model answers. Included advanced text preprocessing and similarity techniques to improve scoring accuracy. Delivered real-time scoring and feedback through a Flask interface, enabling fast, fair, and consistent evaluation.',
    github: 'https://github.com/Bhavikaa324/Subjective-Answer-Evalution',
  },
 
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.name}</h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-link">
                <SiGithub size={24} />
              </a>
            </div>
            <p className="project-tech-stack">
              <strong>Tech Stack:</strong> {project.tech.join(', ')}
            </p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 