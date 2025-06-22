import React from 'react';
import { 
  SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiFlask, SiOpencv, SiTensorflow, SiFigma, SiCanva, SiMysql, SiStreamlit,
  SiLeetcode, SiCodechef, SiHackerrank, SiGeeksforgeeks, SiC, SiNumpy, SiPandas, SiKeras, SiScikitlearn,
  SiGit, SiJupyter, SiDocker
} from "react-icons/si";

const toClassName = (name) => `skill-${name.toLowerCase().replace('++', 'plusplus').replace('.', 'dot')}`;

const languages = [
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'C', icon: <SiC /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
];

const frameworks = [
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'Keras', icon: <SiKeras /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
  { name: 'Streamlit', icon: <SiStreamlit /> },
  { name: 'React.js', icon: <SiReact /> },
];

const tools = [
  { name: 'Git', icon: <SiGit /> },
  { name: 'Jupyter', icon: <SiJupyter /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Canva', icon: <SiCanva /> },
];

const dsaPlatforms = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/bhavika_0324/', icon: <SiLeetcode /> },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/bhavika_0324', icon: <SiCodechef /> },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/puppalwarbhavika', icon: <SiHackerrank /> },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/puppalwar8xyi', icon: <SiGeeksforgeeks /> },
];

function Skills() {
  return (
    <div className="skills-container">
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Programming Languages</h3>
        <ul className="skills-list">
          {languages.map(lang => (
            <li key={lang.name} className={`skill-item ${toClassName(lang.name)}`}>
              {lang.icon}
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Libraries/Frameworks</h3>
        <ul className="skills-list">
          {frameworks.map(framework => (
            <li key={framework.name} className={`skill-item ${toClassName(framework.name)}`}>
              {framework.icon}
              <span>{framework.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Databases</h3>
        <ul className="skills-list">
          <li className="skill-item skill-mysql">
            <SiMysql />
            <span>MySQL</span>
          </li>
        </ul>
      </div>
      
      <div className="skills-category">
        <h3 className="skills-category-title1">Tools</h3>
        <ul className="skills-list">
          {tools.map(tool => (
            <li key={tool.name} className={`skill-item ${toClassName(tool.name)}`}>
              {tool.icon}
              <span>{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="skills-category">
        <h3 className="skills-category-title1">DSA Platforms</h3>
        <ul className="skills-list dsa-platforms-list">
          {dsaPlatforms.map(platform => (
            <li key={platform.name} className={`skill-item ${toClassName(platform.name)}`}>
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                {platform.icon}
                <span>{platform.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills; 