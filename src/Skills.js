import React from 'react';
import { 
  SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiOpenjdk, 
  SiFlask, SiOpencv, SiTensorflow, SiFigma, SiCanva, SiMysql, SiStreamlit,
  SiLeetcode, SiCodeforces, SiHackerrank, SiGeeksforgeeks
} from "react-icons/si";

const techStack = [
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', textColor: '#222' },
  { name: 'React', icon: <SiReact />, color: '#20232A' },
  { name: 'Java', icon: <SiOpenjdk />, color: '#f89820' },
  { name: 'Flask', icon: <SiFlask />, color: '#000' },
  { name: 'OpenCV', icon: <SiOpencv />, color: '#43c6f4' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Streamlit', icon: <SiStreamlit />, color: '#FF4B4B' },
];

const dsaPlatforms = [
  { name: 'LeetCode', url: 'https://leetcode.com/', icon: <SiLeetcode /> },
  { name: 'Codeforces', url: 'https://codeforces.com/', icon: <SiCodeforces /> },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/', icon: <SiHackerrank /> },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', icon: <SiGeeksforgeeks /> },
];

function Skills() {
  return (
    <div>
      <h2 style={{ color: '#19335c', fontSize: '2rem' }}>Tech Stack</h2>
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', margin: '1.5rem 0', color: '#19335c' }}>
        {techStack.map(tech => (
          <span
            key={tech.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: tech.color,
              color: tech.textColor || '#fff',
              borderRadius: '6px',
              padding: '0.3rem 0.8rem',
              fontWeight: 500,
              fontSize: '1rem',
              gap: '0.4rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
            }}
          >
            {tech.icon}
            {tech.name}
          </span>
        ))}
      </div>
      <br />
      <h2 style={{ color: '#19335c', fontSize: '2rem' }}>DSA Platforms</h2>
      <ul style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', listStyle: 'none', paddingLeft: 0, fontSize: '1.08rem', color: '#19335c', margin: 0 }}>
        {dsaPlatforms.map(platform => (
          <li key={platform.name} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ fontSize: '1.3rem' }}>{platform.icon}</span>
            <a href={platform.url} target="_blank" rel="noopener noreferrer" style={{ color: '#19335c' }}>{platform.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills; 