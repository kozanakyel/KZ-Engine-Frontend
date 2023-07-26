import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

const SentimentCircleChart = () => {

  const [sentimentScore, setSentimentScore] = useState(0);

  useEffect(() => {
    axios
      .post('/last_sentiment')
      .then(function (response) {
        setSentimentScore(response.data.sentiment_score);
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
    <div className="card text-center bg-dark">
      <div className="card-body">
        <div className="m-3 text-center text-light">
          <h5 className="text-warning text-lg text-uppercase">
            Twitter Sentiment Score
          </h5>
          <p>
            This Sentiment Score obtained from specific twitter phenomenon and
            getting their tweets. Those people selected via the graph
            Introducing our Sentiment Score, a treasure trove of insights
            meticulously gathered from specific Twitter phenomena and their
            tweets. Carefully handpicked individuals, identified through
            advanced graph algorithms, reveal intriguing relationships with
            price reactions.{' '}
            <mark>
              <strong>
                This captivating sentiment score undergoes hourly updates,
                ensuring the freshest and most accurate perspective on people's
                thoughts.
              </strong>
            </mark>
            Unlock a world of sentiment insights as you delve into the minds of
            the masses. Armed with our Sentiment Score, you gain access to an
            unparalleled understanding of public sentiments, empowering you to
            uncover trends, sentiments, and perceptions like never before. But
            that's not all! Our Sentiment Score takes center stage within our
            cutting-edge Signal Generator Machine Learning Pipeline. Witness the
            power of AI as it seamlessly incorporates sentiment analysis into
            the pipeline, creating a potent fusion that amplifies your
            decision-making prowess. Indulge in the wonders of data-driven
            artistry as we present the Sentiment Score - a beacon of
            intelligence and a catalyst for transformation in the world of
            analytics. Let its allure captivate you, empowering you to make
            informed choices and navigate the ever-changing landscape of
            sentiment and emotions with unprecedented clarity and precision.
          </p>
          <div className="col-4 mx-auto">
            <Doughnut data={data} options={options} />
          </div>

          <div
            className="container"
            style={{ marginTop: '10px', fontSize: '30px', color: '#333' }}
          >
            {sentimentScore > 0.05 ? (
              <span style={{ color: 'green' }}>Positive</span>
            ) : sentimentScore < -0.05 ? (
              <span style={{ color: 'red' }}>Negative</span>
            ) : (
              <span style={{ color: 'gray' }}>Neutral</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentCircleChart;
