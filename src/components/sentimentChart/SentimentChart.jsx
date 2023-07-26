import React from 'react';
import { Line } from 'react-chartjs-2';

const SentimentChart = ({ data }) => {
  // Extract datetime_t and sentiment_score from the response JSON
  const labels = data.map((item) => item.datetime_t);
  const scores = data.map((item) => item.sentiment_score);

  // Create the dataset for the chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Sentiment Score',
        data: scores,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='container hor-ver-centered'>
    <Line
      className='w-75'
      data={chartData}
      options={chartOptions}
    />
    </div>
  );
};

export default SentimentChart;
