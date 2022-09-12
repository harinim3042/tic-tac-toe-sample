import React from 'react';
import { Line } from 'react-chartjs-2';
function LineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
       
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Second dataset',
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: '#742774',
      },
    ],
  };
  const options = {
    plugins: {
      
      title: {
        display: true,
        text: 'Time-in/out',
        color: 'blue',
        font: {
          size: 34,
        },
      
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
