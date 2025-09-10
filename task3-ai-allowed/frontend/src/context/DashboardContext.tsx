import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Widget, DashboardContextType, DataSource } from '../types';

// BUGGY: Context default value type mismatch
const DashboardContext = createContext<DashboardContextType>(null);

interface DashboardProviderProps {
  children: ReactNode;
  initialWidgets?: Widget[];
}

// BUGGY: React.FC használata problémás lehet strict mode-ban
export const DashboardProvider: React.FC<DashboardProviderProps> = ({ 
  children, 
  initialWidgets = [] 
}) => {
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);
  const [dataSources] = useState(new Map<string, DataSource<any>>());

  // BUGGY: Type inference probléma a generic update függvénynél
  const updateWidget = (id: string, updates: any) => {
    setWidgets(prev => 
      prev.map(widget => 
        widget.id === id 
          ? { ...widget, ...updates } 
          : widget
      )
    );
  };

  const addWidget = (widget: Widget) => {
    setWidgets(prev => [...prev, widget]);
  };

  const removeWidget = (id: string) => {
    setWidgets(prev => prev.filter(w => w.id !== id));
  };

  return (
    <DashboardContext.Provider 
      value={{ 
        widgets, 
        addWidget, 
        removeWidget, 
        updateWidget,
        dataSources 
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// BUGGY: Nem kezeli a null context esetet
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  return context;
};