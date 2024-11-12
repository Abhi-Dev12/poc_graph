import React from 'react';
import './Learning.css';

const Learning = ({ resources }) => {
  return (
    <div className="learning-container">
      <h2 className='container-header'>LEARNING RESOURCE</h2>
      <div className="learning-content">
      <ul className="learning-list">
        {resources.map((resource) => (
          <li key={resource.id} className="learning-item">
            <div className="resource-info">
              <span className="resource-id">{resource.id}</span>
              <span className="resource-title">{resource.title}</span>
            </div>
            <a href={resource.link} className="resource-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </li>
        ))}
      </ul>
      <div className="learning-footer">
        <span>Recommended</span>
      </div>
      </div>
    </div>
  );
};

export default Learning;