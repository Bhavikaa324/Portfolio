import React from 'react';

const projects = [
  {
    name: 'SignSnap',
    tech: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'pyttsx3', 'Flask'],
    description: 'Developed a real-time traffic sign recognition system using CNN and OpenCV, providing live detection and classification of road signs from a camera feed. Implemented audio feedback with a text-to-speech engine and a Flask web interface for interactive monitoring and control.',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    name: 'Subjective Answer Evaluator',
    tech: ['Python', 'Keras', 'TensorFlow', 'NLTK', 'scikit-learn', 'Flask'],
    description: ' Built an automated answer evaluation system using LSTM and NLP to assess student responses based on semantic similarity. Delivered real-time scoring and feedback for efficient and objective grading through a Flask interface.',
    github: 'https://github.com/yourusername/weather-app',
  },
  {
    name: 'Phrase Prediction and Sentence Autocomplete',
    tech: ['React', 'API'],
    description: 'A simple weather app that fetches and displays weather data.',
    github: 'https://github.com/yourusername/weather-app',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div>
      <h2 style={{ color: '#19335c', fontSize: '2rem', fontWeight: 'bold', marginBottom: 0 }}>Projects</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', color: '#19335c' }}>
        {projects.map(project => (
          <div key={project.name} style={{ background: '#f5f7fa', borderRadius: '10px', padding: '1.2rem 1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', color: '#19335c' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, marginRight: '1rem', color: '#19335c',fontSize: '1.3rem' }}>{project.name}</h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', color: '#19335c', fontSize: '1.2rem' }}>
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              </a>
            </div>
            <strong>Tech Stack:</strong> <span style={{ fontStyle: 'italic' }}>{project.tech.join(', ')}</span>
            <br />
            <div style={{ marginTop: '0.5rem',color: '#19335c' }}>{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 