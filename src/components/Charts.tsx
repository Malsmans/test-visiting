import React from 'react';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface LineChartProps {
  data: DataPoint[];
  height: number;
  color: string;
}

export const LineChart: React.FC<LineChartProps> = ({ data, height, color }) => {
  if (data.length === 0) {
    return <div className="flex items-center justify-center h-64 text-gray-400">No data available</div>;
  }

  const maxValue = Math.max(...data.map(d => d.value), 1);
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1 || 1)) * 100;
    const y = ((maxValue - d.value) / maxValue) * 80 + 10;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative" style={{ height: `${height}px` }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        {data.map((d, i) => {
          const x = (i / (data.length - 1 || 1)) * 100;
          const y = ((maxValue - d.value) / maxValue) * 80 + 10;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="1"
              fill={color}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        {data.filter((_, i) => i % Math.ceil(data.length / 6) === 0).map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  );
};

interface BarChartProps {
  data: DataPoint[];
  height: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, height }) => {
  if (data.length === 0) {
    return <div className="flex items-center justify-center h-64 text-gray-400">No data available</div>;
  }

  const maxValue = Math.max(...data.map(d => d.value), 1);

  return (
    <div style={{ height: `${height}px` }}>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-700 dark:text-gray-300 truncate flex-1 pr-2">{item.label}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{item.value}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color || '#3b82f6'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface DonutChartProps {
  data: DataPoint[];
  size: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, size }) => {
  if (data.length === 0) {
    return <div className="flex items-center justify-center h-64 text-gray-400">No data available</div>;
  }

  const total = data.reduce((sum, d) => sum + d.value, 0);
  let currentAngle = -90;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox="0 0 100 100">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const angle = (percentage / 100) * 360;
          const startAngle = currentAngle;
          const endAngle = currentAngle + angle;
          currentAngle = endAngle;

          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;

          const x1 = 50 + 40 * Math.cos(startRad);
          const y1 = 50 + 40 * Math.sin(startRad);
          const x2 = 50 + 40 * Math.cos(endRad);
          const y2 = 50 + 40 * Math.sin(endRad);

          const largeArc = angle > 180 ? 1 : 0;

          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 40 40 0 ${largeArc} 1 ${x2} ${y2}`,
            `Z`
          ].join(' ');

          return (
            <path
              key={index}
              d={pathData}
              fill={item.color}
              opacity={0.9}
            />
          );
        })}
        <circle cx="50" cy="50" r="25" fill="white" className="dark:fill-gray-800" />
      </svg>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-700 dark:text-gray-300">
              {item.label}: <span className="font-semibold">{item.value}</span>
              <span className="text-gray-500 ml-1">
                ({((item.value / total) * 100).toFixed(1)}%)
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
