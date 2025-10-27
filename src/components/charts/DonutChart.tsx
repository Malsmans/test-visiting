import React from 'react';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DataPoint[];
  size?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, size = 200 }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        No data available
      </div>
    );
  }

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const strokeWidth = 20;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  let currentAngle = -90;

  return (
    <div className="flex items-center justify-center gap-8">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 100 100"
          className="transform -rotate-90"
          style={{ width: size, height: size }}
        >
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
            const rotate = currentAngle;
            currentAngle += (percentage / 100) * 360;

            return (
              <circle
                key={index}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeLinecap="round"
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: '50% 50%',
                  transition: 'all 0.3s ease'
                }}
              >
                <title>{`${item.label}: ${item.value} (${percentage.toFixed(1)}%)`}</title>
              </circle>
            );
          })}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {total}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {data.map((item, index) => {
          const percentage = ((item.value / total) * 100).toFixed(1);
          return (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  {percentage}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
