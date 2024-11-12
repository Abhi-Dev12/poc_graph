import React from 'react';
import './Header.css';

const Header = ({ searchQuery, selectedClient, selectedSeverity, onSearchChange, onClientChange, onSeverityChange }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="search-controls">
          <div className="search-group">
            <label>Key Attributes:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by"
            />
          </div>
          <div className="search-group">
            <label>Client :</label>
            <select value={selectedClient} onChange={(e) => onClientChange(e.target.value)}>
              <option value="caringconnections">caringconnections</option>
            </select>
          </div>
          <div className="search-group">
            <label>Severity Level</label>
            <select value={selectedSeverity} onChange={(e) => onSeverityChange(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Header;