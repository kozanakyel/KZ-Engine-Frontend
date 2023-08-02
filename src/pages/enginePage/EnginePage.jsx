import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import './engine.css';

const EnginePage = () => {
  const [allSignals, setAllSignals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { interval } = useParams();

  useEffect(() => {
    axios
      .post('/signal_tracker_all', {
        interval: interval,
        ai_type: 'XgboostBinaryForecaster',
      })
      .then(function (response) {
        setAllSignals(response.data);
        setIsLoading(false);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [interval]);

  return (
    <>
      {isLoading ? (
        <div className="container hor-ver-centered">
          <div className="coming-soon bg-warning">
            <img src="/images/kozanlogo.png" width={'75px'} />
          </div>
        </div>
      ) : (
        <>
          <div className="container text-center" style={{ marginTop: '100px' }}>
            <h3 className="text-warning">
              {interval === '1h'
                ? 'Hourly Forecasting Engine'
                : 'Daily Forecasting Engine'}
            </h3>
            <p>
              This created Machine Learning Engine shows succes for pattern
              matching and getting signal from our AI model with its accuracy
              statistic. Also it detects Japanese Candlestick Structure from the
              price, dont forget each candlestick structure gives some insigths
              about next candle prediction and we represents as a signal for
              you.
            </p>
            {allSignals.map((signal) => (
              <div key={signal.ticker} className="container hor-ver-centered">
                <Card
                  signalTracker={signal}
                  forecastModel={signal?.forecast_model}
                  crypto={signal?.forecast_model?.crypto}
                />
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default EnginePage;
