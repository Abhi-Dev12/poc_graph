import React from 'react';
import './Strength.css';

const Strength = ({ message, quote }) => {
  return (
    <div className="strength-container">
      <h2 className='container-header'>MY STRENGTH</h2>
      <div className="strength-content">
      <div className="strength-inside-container">
        <h3 className='chart-header-nomargin'>Intelligent Insights</h3>
        <p className="strength-message">{message}</p>
      </div>
      <blockquote className="strength-quote">"{quote}"</blockquote>
      </div>
    </div>
  );
};

export default Strength;