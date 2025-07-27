import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'PixelPainter',
    description: 'A web-based pixel art editor with layer support and export options.',
    github: '#',
    icon: '🎨',
    language: 'JavaScript',
    features: ['Layer Support', 'Export PNG', 'Custom Palette'],
  },
  {
    title: 'NoteNest',
    description: 'A minimalist note-taking app with markdown support and cloud sync.',
    github: '#',
    icon: '📝',
    language: 'React',
    features: ['Markdown', 'Cloud Sync', 'Dark Mode'],
  },
  {
    title: 'QuizWhiz',
    description: 'A quiz platform with real-time multiplayer and leaderboard.',
    github: '#',
    icon: '❓',
    language: 'Node.js',
    features: ['Multiplayer', 'Leaderboard', 'Question Bank'],
  },
  /*{
    title: 'FitBuddy',
    description: 'A fitness tracker with workout logging and progress analytics.',
    github: '#',
    icon: '🏃',
    language: 'Python',
    features: ['Workout Log', 'Progress Charts', 'Goal Setting'],
  },
  {
    title: 'Weatherly',
    description: 'A weather dashboard with animated icons and 7-day forecast.',
    github: '#',
    icon: '☁️',
    language: 'Vue.js',
    features: ['Animated Icons', '7-Day Forecast', 'Location Search'],
  },
  {
    title: 'BookBarn',
    description: 'A virtual bookshelf to track, review, and share your reads.',
    github: '#',
    icon: '📚',
    language: 'Django',
    features: ['Book Reviews', 'Reading Goals', 'Social Sharing'],
  },
  {
    title: 'BudgetBee',
    description: 'A personal finance manager with expense tracking and analytics.',
    github: '#',
    icon: '💸',
    language: 'Angular',
    features: ['Expense Tracking', 'Budget Planning', 'Spending Analytics'],
  },
  {
    title: 'Travelogue',
    description: 'A travel diary app with map integration and photo uploads.',
    github: '#',
    icon: '🌍',
    language: 'Svelte',
    features: ['Map Integration', 'Photo Uploads', 'Trip Timeline'],
  }*/,
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of my featured projects.
        </p>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-title-row">
                <span className="project-title">{project.title}</span>
              </div>
              <div className="project-desc">{project.description}</div>
              <div className="project-meta">
                <span className="project-language"><strong>Language:</strong> {project.language}</span>
                <span className="project-features"><strong>Features:</strong> {project.features.join(', ')}</span>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label="github">🐙</span> View On GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 