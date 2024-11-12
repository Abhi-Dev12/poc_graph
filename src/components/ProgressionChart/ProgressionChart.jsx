import React from 'react';
import { ReferenceLine, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Badge from '../Badge/Badge';
import './ProgressionChart.css';

const ProgressionChart = ({ data }) => {
  const xRef = 'Feb';
  const yRef = 8.5;

  return (
    <div className="chart-container">
      <h2 className='container-header'>PROGRESSION</h2>
      <h3 className='chart-header'>Customer Satisfaction</h3>
      <div className="chart-wrapper" style={{ position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2196F3" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#2196F3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <ReferenceLine x={xRef} stroke="red" strokeDasharray="5 5" />
            <ReferenceLine y={yRef} stroke="red" />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#2196F3"
              fill="url(#colorGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
              tension={0.4}
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-dot optimal"></div>
            <span>Optimal Performance</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot median"></div>
            <span>Median Performance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressionChart;
