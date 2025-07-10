import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Logistics System');
  const [hoveredCard, setHoveredCard] = useState(null);

  const projectsData = {
    'Logistics System': [
      {
        id: 1,
        category: 'FULL-STACK',
        title: 'Logistics Management Platform',
        subtitle: 'MOBILE & WEB SOLUTION',
        image: 'https://images.unsplash.com/photo-1601000938251-8329d442e854?w=800', // Logistics/truck image
        description: 'Integrated platform featuring 3 mobile apps (Customer, Transporter, Driver) and Admin Dashboard for complete logistics coordination.',
        features: [
          'Flutter for cross-platform apps',
          'React.js admin dashboard',
          'Node.js backend services',
          'MongoDB database'
        ]
      },
      {
        id: 2,
        category: 'MOBILE APPS',
        title: 'Driver Application',
        subtitle: 'REAL-TIME TRACKING',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800', // Mobile app image
        description: 'Driver-facing app with route optimization, delivery updates, and communication features.',
        features: [
          'Real-time GPS tracking',
          'Delivery status updates',
          'In-app messaging',
          'Performance analytics'
        ]
      }
    ],
    'Technical Implementation': [
      {
        id: 3,
        category: 'TECH STACK',
        title: 'System Architecture',
        subtitle: 'CLOUD INTEGRATION',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800', // Tech/code image
        description: 'Robust backend infrastructure supporting the entire logistics ecosystem.',
        features: [
          'Firebase for real-time updates',
          'AWS cloud services',
          'RESTful API design',
          'JWT authentication'
        ]
      }
    ],
    'Project Impact': [
      {
        id: 4,
        category: 'RESULTS',
        title: 'System Outcomes',
        subtitle: 'MEASURABLE IMPACT',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', // Analytics image
        description: 'Delivered significant improvements to logistics operations and user experience.',
        features: [
          '40% faster order processing',
          '30% reduction in delays',
          'Unified communication',
          'Featured in university showcase'
        ]
      }
    ]
  };

  const tabs = [
    { id: 1, name: 'Logistics System' },
    { id: 2, name: 'Technical Implementation' },
    { id: 3, name: 'Project Impact' }
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">My Projects</h1>
        
        <div className="portfolio-description">
          <p className="section-description">
            <span className="portfolio-highlight">My portfolio includes</span> innovative projects developed during my studies at Dire Dawa University, with standout work on:
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`tab ${activeTab === tab.name ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.name)}
              >
                <span className="tab-number">{tab.id}</span>
                {tab.name}
              </div>
            ))}
          </div>
          <div className="tab-divider"></div>
        </div>

        <div className="projects-grid">
          {projectsData[activeTab].map((project) => (
            <div 
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-card-content">
                {project.category && (
                  <div className="project-badge">{project.category}</div>
                )}
                <h3 className="project-title">{project.title}</h3>
                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}
                
                <div className={`project-hover-content ${hoveredCard === project.id ? 'visible' : ''}`}>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-features">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;