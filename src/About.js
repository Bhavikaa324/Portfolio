import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <div className="about-container">
      <TypeAnimation
        sequence={['Hey there!', 1000]}
        wrapper="h1"
        speed={50}
        className="about-greeting"
      />
      <div className="about-content">
        <p>
          I'm a final-year student pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning,  driven by a strategic problem-solving mindset and a growing interest in Machine Learning and Deep Learning, with a desire to contribute, grow, and apply innovative solutions .
          
          Recently, I've started diving into cloud technologies to better understand how scalable infrastructure can power intelligent applications and data-driven systems.
          <br/>
          I love working on exciting projects, experimenting with new technologies, and collaborating with others to turn ideas into reality.
        </p>
      </div>
    </div>
  );
}

export default About; 