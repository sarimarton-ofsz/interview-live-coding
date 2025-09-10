// Widget types with discriminated union
export type WidgetType = 'chart' | 'table' | 'metric' | 'text';

export interface BaseWidget {
  id: string;
  title: string;
  type: WidgetType;
}

export interface ChartWidget extends BaseWidget {
  type: 'chart';
  data: {
    labels: string[];
    values: number[];
  };
  chartType: 'bar' | 'line' | 'pie';
}

export interface TableWidget extends BaseWidget {
  type: 'table';
  columns: string[];
  rows: Array<Record<string, any>>;
}

export interface MetricWidget extends BaseWidget {
  type: 'metric';
  value: number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
}

export interface TextWidget extends BaseWidget {
  type: 'text';
  content: string;
  markdown?: boolean;
}

export type Widget = ChartWidget | TableWidget | MetricWidget | TextWidget;

// Data source types
export interface DataSource<T> {
  id: string;
  fetch: () => Promise<T>;
  transform?: (data: T) => any;
}

// Context types
export interface DashboardContextType {
  widgets: Widget[];
  addWidget: (widget: Widget) => void;
  removeWidget: (id: string) => void;
  updateWidget: <T extends Widget>(id: string, updates: Partial<T>) => void;
  dataSources: Map<string, DataSource<any>>;
}