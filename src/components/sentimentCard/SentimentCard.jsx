import React, { useEffect, useState } from 'react';
import SentimentChart from '../sentimentChart/SentimentChart';
import axios from '../../utils/axios';

const SentimentCard = () => {
  const [sentimentData, setSentimentData] = useState([]);

  useEffect(() => {
    axios
      .post('/all_sentiment')
      .then(function (response) {
        // Extract the 'data' property from the Axios response
        const responseData = response.data;
        // Convert the datetime_t strings to JavaScript Date objects
        const formattedData = responseData.map((item) => ({
          ...item,
          datetime_t: new Date(item.datetime_t),
        }));
        const slicedFormattedData = formattedData.slice(0, 100);
        setSentimentData(slicedFormattedData);
        // console.log(slicedFormattedData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="card text-center text-warning"
      style={{ backgroundColor: 'black' }}
    >
      <div className="card-body">
        <h3 className="card-title">Twitter Sentiment Tracker</h3>
        {sentimentData.length > 0 ? (
          <SentimentChart data={sentimentData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SentimentCard;
