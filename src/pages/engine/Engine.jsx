import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from '../../utils/axios';

import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

const Engine = () => {
  const [allSignals, setAllSignals] = useState([]);
  const location = useLocation();
  let data = location.state;
  const { interval } = useParams();

  useEffect(() => {
    axios
      .post('/signal_tracker_all', {
        interval: interval, // get from header component button click
        ai_type: 'XgboostBinaryForecaster', // default value
      })
      .then(function (response) {
        setAllSignals(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(interval + 'yes interval');

  return (
    <>
      {allSignals.map((signal) => (
        <div key={signal.ticker} className={'hor-ver-centered m-3'}>
          <Card
            signalTracker={signal}
            forecastModel={signal?.forecast_model}
            crypto={signal?.forecast_model?.crypto}
          />
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Engine;
