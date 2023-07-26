import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { Line } from 'react-chartjs-2';


const JapaneseCandlestickChart = () => {
  const [candlestickData, setCandlestickData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/japanese', {
          symbol: 'BTC-USD',
        });
        setCandlestickData(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getAnnotations = () => {
    if (!candlestickData) return [];

    const annotations = [];
    for (const timestamp in candlestickData.close) {
      const pattern = candlestickData.candlestick_pattern[timestamp];
      if (pattern !== 'NO_PATTERN') {
        const patternName = pattern.replace('CDL', '').replace('_', ' ');
        const isBullish = pattern.endsWith('Bull');
        annotations.push({
          type: 'point',
          x: new Date(parseInt(timestamp)),
          y: candlestickData.close[timestamp],
          borderColor: isBullish ? 'green' : 'red',
          backgroundColor: isBullish ? 'green' : 'red',
          borderWidth: 1,
          radius: 6,
          label: {
            backgroundColor: 'rgba(120, 120, 120, 0.8)',
            content: patternName,
            enabled: true,
            position: 'top',
            xAdjust: isBullish ? -10 : 10,
            yAdjust: -15,
          },
        });
      }
    }

    return annotations;
  };
  // Function to filter out the timestamps with "NO_PATTERN" and get the close prices
  const getClosePricesWithLabels = () => {
    if (!candlestickData) return { labels: [], closePrices: [] };

    const labels = [];
    const closePrices = [];

    for (const timestamp in candlestickData.close) {
      const pattern = candlestickData.candlestick_pattern[timestamp];
      if (pattern !== 'NO_PATTERN') {
        labels.push(new Date(parseInt(timestamp)));
        closePrices.push(candlestickData.close[timestamp]);
      }
    }

    return { labels, closePrices };
  };


  const { labels, closePrices } = getClosePricesWithLabels();

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Close Price',
        data: closePrices,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time',
      },
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      annotation: { // Add the annotation plugin options here
        annotations: getAnnotations(), // Call the function to get the annotations
      },
    },
    interaction: {
      intersect: false,
    },
  };

  return (
    <div>
      {labels.length > 0 ? (
        <div className='m-5 text-center'>
          <p>Japanese CandleStick Signals</p>
          <div className='container m-3'>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JapaneseCandlestickChart;