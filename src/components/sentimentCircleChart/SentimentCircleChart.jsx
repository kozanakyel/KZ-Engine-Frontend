import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

const SentimentCircleChart = () => {
  const [sentimentScore, setSentimentScore] = useState(0);
  const [datetime_t, setDatetime_t] = useState('');

  useEffect(() => {
    axios
      .post('/last_sentiment')
      .then(function (response) {
        setSentimentScore(response.data.sentiment_score);
        setDatetime_t(response.data.datetime_t);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const percentage = (sentimentScore + 1) * 50; // Map sentimentScore from [-1, 1] to [0, 100]

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [`rgba(62, 152, 199, ${percentage / 100})`, '#f0f0f0'],
      },
    ],
  };

  const options = {
    cutout: '50%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="card text-center" style={{ backgroundColor: 'black' }}>
      <div className="card-body">
        <div className="m-3 text-center text-light">
          <h3 className="text-warning text-lg text-uppercase mb-5">
            Twitter Sentiment Score
          </h3>
          <div className="col-4 mx-auto">
            <Doughnut data={data} options={options} />
          </div>
          <p className="m-3">Time: {datetime_t}</p>
          <p>Score: {sentimentScore.toFixed(4)}</p>

          <div
            className="container"
            style={{ marginTop: '10px', fontSize: '30px', color: '#333' }}
          >
            {sentimentScore > 0.05 ? (
              <span style={{ color: 'green' }}>Positive</span>
            ) : sentimentScore < -0.02 ? (
              <span style={{ color: 'red' }}>Negative</span>
            ) : (
              <span style={{ color: 'gray' }}>Neutral</span>
            )}
          </div>
          <li>
            Obtained from specific twitter phenomenon and getting their tweets.
          </li>
          <li>Selected via the graph</li>
          <li>
            Carefully handpicked individuals, identified through advanced graph
            algorithms, reveal intriguing relationships with price reactions
          </li>
          <li>
            hourly updates, ensuring the freshest and most accurate perspective
            on people's thoughts.
          </li>
          <li>
            Our Sentiment Score takes center stage within our cutting-edge
            Signal Generator Machine Learning Pipeline.
          </li>
          <li>
            Indulge in the wonders of data-driven artistry as we present the
            Sentiment Score - a beacon of intelligence and a catalyst for
            transformation in the world of analytics.
          </li>


        </div>
      </div>
    </div>
  );
};

export default SentimentCircleChart;
