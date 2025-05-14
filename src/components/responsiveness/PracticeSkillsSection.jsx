import React from 'react';
import './PracticeSkillsSection.css';

const skills = [
  { title: 'IT PRO OPERATIONS', labs: '48 LABS', icon: '🛠️' },
  { title: 'SOFTWARE DEVELOPMENT', labs: '27 LABS', icon: '💻' },
  { title: 'DATA PROFESSIONAL', labs: '14 LABS', icon: '📊' },
  { title: 'CYBER SECURITY', labs: '8 LABS', icon: '🔒' },
  { title: 'END-USER TRAINING', labs: '6 LABS', icon: '👨‍🏫' },
];

const PracticeSkillsSection = () => {
  return (
    <section className="practice">
      <h5>Tumba management students</h5>
      <h2>GAIN SKILLS WITH PRACTICE</h2>
      <p className="description">
        Tumba is an on-demand learning environment that teaches technical skills by the tried
        and true technique of doing it yourself. Learn through interactive hands-on exercises
        using our Real Time Lab platform. All you need to bring is a willingness to learn!
      </p>
      <div className="practice-grid">
        {skills.map((skill, index) => (
          <div key={index} className="practice-box">
            <div className="icon">{skill.icon}</div>
            <h4>{skill.title}</h4>
            <p>{skill.labs}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeSkillsSection;
