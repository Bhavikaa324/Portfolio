import React from 'react';
import { 
  SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiFlask, SiOpencv, SiTensorflow, SiFigma, SiCanva, SiMysql, SiStreamlit,
  SiLeetcode, SiCodeforces, SiHackerrank, SiGeeksforgeeks, SiC, SiNumpy, SiPandas, SiKeras, SiScikitlearn,
  SiGit, SiJupyter, SiDocker
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
  { name: 'Streamlit', icon: <SiStreamlit />, color: '#FF4B4B' },
  { name: 'React.js', icon: <SiReact />, color: '#20232A' },
];

const tools = [
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
  
];

const dsaPlatforms = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/bhavika_0324/', icon: <SiLeetcode /> },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/bhavika_0324', icon: <SiCodeforces /> },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/puppalwarbhavika', icon: <SiHackerrank /> },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/puppalwar8xyi', icon: <SiGeeksforgeeks /> },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-category-title">Skills</h2>
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Programming Languages</h3>
        <ul className="skills-list">
          {languages.map(lang => (
            <li key={lang.name} className="skill-item" style={{ background: lang.color, color: lang.textColor || '#fff' }}>
              {lang.icon}
              {lang.name}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Libraries/Frameworks</h3>
        <ul className="skills-list">
          {frameworks.map(framework => (
            <li key={framework.name} className="skill-item" style={{ background: framework.color, color: '#fff' }}>
              {framework.icon}
              {framework.name}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Databases</h3>
        <ul className="skills-list">
          <li className="skill-item" style={{ background: '#4479A1', color: '#fff' }}>
            <SiMysql />
            MySQL
          </li>
        </ul>
      </div>
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Tools</h3>
        <ul className="skills-list">
          {tools.map(tool => (
            <li key={tool.name} className="skill-item" style={{ background: tool.color, color: '#fff' }}>
              {tool.icon}
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="skills-category">
        <h3 className="skills-category-title">DSA Platforms</h3>
        <ul className="skills-list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {dsaPlatforms.map(platform => (
            <li key={platform.name} className="skill-item" style={{ color: '#19335c' }}>
              {platform.icon}
              <a href={platform.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {platform.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills; 