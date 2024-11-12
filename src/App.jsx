import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProgressionChart from './components/ProgressionChart/ProgressionChart';
import Strength from './components/Strength/Strength';
import Opportunity from './components/Opportunity/Opportunity';
import Learning from './components/Learning/Learning';
import { performanceData, learningResources, strengthMessage, inspirationalQuote } from './db.js';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState('BNDI CHP');
  const [selectedSeverity, setSelectedSeverity] = useState('High');

  return (
    <div className="app">
      <Header 
        searchQuery={searchQuery}
        selectedClient={selectedClient}
        selectedSeverity={selectedSeverity}
        onSearchChange={setSearchQuery}
        onClientChange={setSelectedClient}
        onSeverityChange={setSelectedSeverity}
      />
      <div className="grid-container">
        <ProgressionChart data={performanceData.customerSatisfaction} />
        <Strength message={strengthMessage} quote={inspirationalQuote} />
        <Opportunity 
          firstCallData={performanceData.firstCallResolution}
          callsOnHoldData={performanceData.callsOnHold}
        />
        <Learning resources={learningResources} />
      </div>
    </div>
  );
}

export default App;