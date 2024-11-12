import React from 'react';
import './Badge.css';

const Badge = ({ value, color }) => (
  <div className="badge" style={{ backgroundColor: color }}>
    {value}
  </div>
);

export default Badge;