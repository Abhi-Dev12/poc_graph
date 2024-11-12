import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Badge from "../Badge/Badge";
import "./Opportunity.css";

const OpportunityChart = ({ title, data, badgeValue, badgeColor }) => (
  <div className="opportunity-chart">
    {/* <Badge value={badgeValue} color={badgeColor} /> */}
    <h3 className="chart-header">{title}</h3>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient
            id={`colorGradient-${badgeColor}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={badgeColor} stopOpacity={0.6} />
            <stop offset="100%" stopColor={badgeColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={badgeColor}
          fill={`url(#colorGradient-${badgeColor})`}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 8 }}
          tension={0.4}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const Opportunity = ({ firstCallData, callsOnHoldData }) => {
  return (
    <div className="opportunity-container">
      <h2 className="container-header">MY OPPORTUNITY</h2>
      <div className="opportunity-charts">
        <div>
          <OpportunityChart
            title="First Call Resolution"
            data={firstCallData}
            badgeValue="89"
            badgeColor="#ff4757"
          />
          <div className="chart-legend-opportunity">
            <div className="legend-item-opportunity">
              <div className="legend-dot optimal"></div>
              <span>Optimal Performance</span>
            </div>
            <div className="legend-item-opportunity">
              <div className="legend-dot median"></div>
              <span>Median Performance</span>
            </div>
          </div>
        </div>
        <div>
          <OpportunityChart
            title="Calls Put On Hold"
            data={callsOnHoldData}
            badgeValue="29"
            badgeColor="#4CAF50"
          />
          <div className="chart-legend-opportunity">
            <div className="legend-item-opportunity">
              <div className="legend-dot optimal"></div>
              <span>Optimal Performance</span>
            </div>
            <div className="legend-item-opportunity">
              <div className="legend-dot median"></div>
              <span>Median Performance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
