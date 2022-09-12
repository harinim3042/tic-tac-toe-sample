import React from 'react';
import './styles.css';
import DoughnutChart from './Donught.js';
import LineChart from './Linechart.js';
import BarChart from './barChart';
export default function App() {
  return (
    <div className='chart-align' >
       <div className="chart-bg px-5 mx-5 py-3 my-5"><DoughnutChart /></div>
       <div className="chart-bg px-5 mx-5 py-13 my-5"><LineChart /></div>
       <div className="chart-bg px-5 mx-5 py-13 my-5"><BarChart /></div>
     
    </div>
  );
}
