import React from 'react';
import CryptoIcon from '../cryptoIcon/CryptoIcon';
import { regexCandleStick } from '../../utils/signalUtility';

const Card = (props) => {
  const signalTracker = props.signalTracker;
  const forecastModel = props.forecastModel;
  const crypto = props.crypto;

  return (
    <>
      <div className="card bg-dark text-warning m-3" style={{ width: '36rem' }}>
        <div className="card-body">
          {signalTracker && (
            <>
              <h5 className="card-title">
                <CryptoIcon cryptoId={crypto?.name} /> {forecastModel?.symbol}{' '}
                Tracker
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-light">
                  TimeStamp: {signalTracker?.datetime_t.slice(0, -6)}
                </li>
                <li className="list-group-item bg-dark text-light">
                  AI Model Type: {forecastModel?.ai_type}
                </li>
                <li className="list-group-item bg-dark text-light">
                  Feature Counts: {forecastModel?.feature_counts}
                </li>
                <li className="list-group-item bg-dark text-light">
                  Candlestick Signal:{' '}
                  {regexCandleStick(signalTracker?.japanese_candle)}
                </li>
                <li className="list-group-item bg-dark text-light">
                  Best Important Features:{' '}
                  {signalTracker?.backtest_returns_data}
                </li>

                <li className="list-group-item bg-dark text-light">
                  Accuracy Score: {forecastModel?.accuracy_score}
                </li>

                {signalTracker.signal === 1 ? (
                  <li className="list-group-item bg-success text-light">
                    KZ Engine AI Signal: BUY
                  </li>
                ) : (
                  <li className="list-group-item bg-danger text-light">
                    KZ Engine AI Signal: SELL
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
