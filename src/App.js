import React from 'react';
import './styles.css';
import DoughnutChart from './Donught.js';
import LineChart from './Linechart.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <DoughnutChart />
        <LineChart />
      </div>
    </div>
  );
}
