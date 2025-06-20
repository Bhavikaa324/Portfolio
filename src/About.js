import React from 'react';



function About() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', minHeight: '300px', color: '#19335c' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#19335c', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.2rem' }}>About Me</h2>
        <div style={{ textAlign: 'left', fontSize: '1.1rem', color: '#19335c', lineHeight: 1.7 }}>
          <p>
            This is a short description about you. You can mention your background, interests, and what drives you as a developer. <br />
            For example: <br />
            "I'm a passionate developer with a love for building interactive web applications. I enjoy learning new technologies and contributing to open source. My goal is to create impactful solutions and grow as a software engineer."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; 