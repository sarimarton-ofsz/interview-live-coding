import React from 'react';
import { Widget as WidgetType } from '../types';

// BUGGY: Props interface nem megfelelően típusozott
interface WidgetProps {
  widget: WidgetType;
  onRemove?: (id: string) => void;
}

// BUGGY: Discriminated union kezelése hibás
export const Widget: React.FC<WidgetProps> = ({ widget, onRemove }) => {
  // BUGGY: Type narrowing nem működik megfelelően
  const renderContent = () => {
    if (widget.type === 'chart') {
      return (
        <div className="chart-widget">
          {/* BUGGY: Property access hibás lehet */}
          <p>Chart: {widget.chartType}</p>
          <p>Data points: {widget.data.values.length}</p>
        </div>
      );
    }
    
    if (widget.type === 'table') {
      return (
        <div className="table-widget">
          {/* BUGGY: Type assertion nélkül nem működik */}
          <p>Columns: {(widget as any).columns.join(', ')}</p>
          <p>Rows: {(widget as any).rows.length}</p>
        </div>
      );
    }
    
    if (widget.type === 'metric') {
      const metricWidget = widget;
      return (
        <div className="metric-widget">
          {/* BUGGY: Optional chaining hiánya */}
          <h2>{metricWidget.value} {metricWidget.unit}</h2>
          <span className={`trend-${metricWidget.trend}`}>
            {metricWidget.trend}
          </span>
        </div>
      );
    }
    
    // BUGGY: Default case kezelése
    return <div>Unknown widget type</div>;
  };

  return (
    <div className="widget">
      <div className="widget-header">
        <h3>{widget.title}</h3>
        {onRemove && (
          <button onClick={() => onRemove(widget.id)}>×</button>
        )}
      </div>
      <div className="widget-content">
        {renderContent()}
      </div>
    </div>
  );
};