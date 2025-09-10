import React from 'react';
import { Widget } from './Widget';
import { useDashboard } from '../context/DashboardContext';
import { Widget as WidgetType, ChartWidget } from '../types';

// BUGGY: Component return type inference probléma
export function Dashboard() {
  const dashboard = useDashboard();
  
  // BUGGY: Optional chaining hiánya null check nélkül
  const { widgets, addWidget, removeWidget } = dashboard;

  // BUGGY: Sample widget létrehozása type error-ral
  const handleAddChart = () => {
    const newChart: ChartWidget = {
      id: Date.now().toString(),
      title: 'Sample Chart',
      type: 'chart',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        // BUGGY: Wrong type - should be number[]
        values: ['10', '20', '30']
      },
      chartType: 'bar'
    };
    
    addWidget(newChart);
  };

  // BUGGY: Type assertion probléma
  const handleAddMetric = () => {
    const newMetric = {
      id: Date.now().toString(),
      title: 'Sample Metric',
      type: 'metric',
      value: 42,
      // BUGGY: Invalid enum value
      trend: 'increasing'
    } as WidgetType;
    
    addWidget(newMetric);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="actions">
          <button onClick={handleAddChart}>Add Chart</button>
          <button onClick={handleAddMetric}>Add Metric</button>
        </div>
      </header>
      
      <div className="widgets-grid">
        {/* BUGGY: Map függvény return type probléma */}
        {widgets.map((widget) => {
          <Widget 
            key={widget.id}
            widget={widget}
            onRemove={removeWidget}
          />
        })}
      </div>
    </div>
  );
}