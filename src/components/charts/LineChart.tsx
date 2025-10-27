import React from 'react';

interface DataPoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
  showGrid?: boolean;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 200,
  color = '#3b82f6',
  showGrid = true
}) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        No data available
      </div>
    );
  }

  const maxValue = Math.max(...data.map(d => d.value), 1);
  const minValue = Math.min(...data.map(d => d.value), 0);
  const range = maxValue - minValue || 1;

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((point.value - minValue) / range) * 100;
    return { x, y, label: point.label, value: point.value };
  });

  const pathData = points.map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ');

  const areaData = `${pathData} L 100 100 L 0 100 Z`;

  return (
    <div className="relative" style={{ height }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {showGrid && (
          <g className="opacity-10">
            {[0, 25, 50, 75, 100].map(y => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-gray-400 dark:text-gray-600"
              />
            ))}
          </g>
        )}

        <path
          d={areaData}
          fill={color}
          opacity="0.1"
        />

        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill={color}
              vectorEffect="non-scaling-stroke"
              className="hover:r-3 transition-all cursor-pointer"
            >
              <title>{`${point.label}: ${point.value}`}</title>
            </circle>
          </g>
        ))}
      </svg>

      <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
        <span>{data[0]?.label}</span>
        <span>{data[data.length - 1]?.label}</span>
      </div>
    </div>
  );
};
