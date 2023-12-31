import React from 'react';
import './ChartBar.css';

function ChartBar(props) {
  const barHeight = `${(props.value / props.maxValue) * 100}%`;

  const barStyles = {
    height: barHeight,
    backgroundColor: 'steelblue',
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={barStyles}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
