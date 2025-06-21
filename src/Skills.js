import React from 'react';
import { 
  SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiOpenjdk, 
  SiFlask, SiOpencv, SiTensorflow, SiFigma, SiCanva, SiMysql, SiStreamlit,
  SiLeetcode, SiCodeforces, SiHackerrank, SiGeeksforgeeks, SiC, SiNumpy, SiPandas, SiKeras, SiScikitlearn, 
} from "react-icons/si";

const languages = [
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'C', icon: <SiC />, color: '#A8B9CC' },
  { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', textColor: '#222' },
];


const frameworks = [
  { name: 'Flask', icon: <SiFlask />, color: '#000' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
  { name: 'Pandas', icon: <SiPandas />, color: '#130654' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
  { name: 'Keras', icon: <SiKeras />, color: '#D00000' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
  { name: 'OpenCV', icon: <SiOpencv />, color: '#43c6f4' },
  { name: 'React.js', icon: <SiReact />, color: '#20232A' },
];

const dsaPlatforms = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/bhavika_0324/', icon: <SiLeetcode /> },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/bhavika_0324', icon: <SiCodeforces /> },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/puppalwarbhavika', icon: <SiHackerrank /> },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/puppalwar8xyi', icon: <SiGeeksforgeeks /> },
];

function Skills() {
  return (
    <div>
      <h2 style={{ color: '#19335c', fontSize: '2rem' }}>Skills</h2>
      <h2 style={{ color: '#19335c',fontSize: '1.3rem' }}>Programming Languages:</h2>
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', margin: '1.5rem 0', color: '#19335c' }}>
        {languages.map(lang => (
          <span
            key={lang.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: lang.color,
              color: lang.textColor || '#fff',
              borderRadius: '6px',
              padding: '0.3rem 0.8rem',
              fontWeight: 500,
              fontSize: '1rem',
              gap: '0.4rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
            }}
          >
            {lang.icon}
            {lang.name}
          </span>
        ))}
      </div>
      <br/>
      <h2 style={{ color: '#19335c',fontSize: '1.3rem' }}>Libraries/Frameworks:</h2>
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', margin: '1.5rem 0', color: '#19335c' }}>
        {frameworks.map(framework => (
          <span
            key={framework.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: framework.color,
              color: '#fff',
              borderRadius: '6px',
              padding: '0.3rem 0.8rem',
              fontWeight: 500,
              fontSize: '1rem',
              gap: '0.4rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
            }}
          >
            {framework.icon}
            {framework.name}
          </span>
        ))}
      </div>
      
      <br/>
      <h2 style={{ color: '#19335c',fontSize: '1.3rem' }}>Databases:</h2>
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', margin: '1.5rem 0', color: '#19335c' }}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#4479A1',
            color: '#fff',
            borderRadius: '6px',
            padding: '0.3rem 0.8rem',
            fontWeight: 500,
            fontSize: '1rem',
            gap: '0.4rem',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
          }}
        >
          <SiMysql />
          MySQL
        </span>
      </div>
      <br/>
      <h2 style={{ color: '#19335c', fontSize: '2rem' }}>DSA Platforms</h2>
      <ul style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', listStyle: 'none', paddingLeft: 0, fontSize: '1.08rem', color: '#19335c', margin: 0 }}>
        {dsaPlatforms.map(platform => (
          <li key={platform.name} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ fontSize: '1.3rem' }}>{platform.icon}</span>
            <a href={platform.url} target="_blank" rel="noopener noreferrer" style={{ color: '#19335c' }}>{platform.name}</a>
          </li>
        ))}
      </ul>
    
      <br/>
    </div>
  );
}

export default Skills; 