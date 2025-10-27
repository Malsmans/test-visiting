import React from 'react';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: DataPoint[];
  height?: number;
  horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 300,
  horizontal = false
}) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        No data available
      </div>
    );
  }

  const maxValue = Math.max(...data.map(d => d.value), 1);

  return (
    <div className="space-y-3" style={{ minHeight: height }}>
      {data.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700 dark:text-gray-300 truncate flex-1">
              {item.label}
            </span>
            <span className="text-gray-600 dark:text-gray-400 ml-2 font-semibold">
              {item.value.toLocaleString()}
            </span>
          </div>
          <div className="relative w-full h-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-lg transition-all duration-500 ease-out"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color || '#3b82f6'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
