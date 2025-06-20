import React from 'react';



function About() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', minHeight: '300px', color: '#19335c' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#19335c', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.2rem' }}>About Me</h2>
        <div style={{ textAlign: 'left', fontSize: '1.1rem', color: '#19335c', lineHeight: 1.7 }}>
          <p>
          I'm a final-year student pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I have a growing understanding of software development, data structures, and algorithmic problem-solving, and I enjoy approaching challenges with a strategic and innovative mindset.
<br/><br/>
Currently developing a growing understanding of Machine Learning, Deep Learning, and Cloud Computing, with hands-on exposure to applying AI concepts in real-world contexts. Recently started exploring cloud technologies to better understand how scalable infrastructure supports intelligent applications and data-driven systems.
<br/><br/>I'm passionate about continuous learning, building real-world solutions, and collaborating with others to bring ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; 