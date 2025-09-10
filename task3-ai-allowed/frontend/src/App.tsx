import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import { Dashboard } from './components/Dashboard';
import './App.css';

// BUGGY: App komponens típusozása
const App: React.FC = () => {
  // BUGGY: Initial widgets típus probléma
  const initialWidgets = [
    {
      id: '1',
      title: 'Sales Metric',
      type: 'metric',
      value: '1234', // BUGGY: Should be number
      unit: '$'
    },
    {
      id: '2', 
      title: 'User Table',
      type: 'table',
      // BUGGY: Missing required properties
      columns: ['Name', 'Email']
    }
  ];

  return (
    <DashboardProvider initialWidgets={initialWidgets}>
      <div className="app">
        <Dashboard />
      </div>
    </DashboardProvider>
  );
};

export default App;