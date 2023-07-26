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
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);  

  return (
    <>
      {isLoading ? (
        <div className="container hor-ver-centered">
          <div className="coming-soon bg-warning">
            <img src="/images/kozanlogo.png" width={'75px'}/>
          </div>
        </div>
      ) : (
        <>
        <div className='container' style={{marginTop:'100px'}}>
          {allSignals.map((signal) => (
            <div key={signal.ticker} className="container hor-ver-centered m-3">
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
