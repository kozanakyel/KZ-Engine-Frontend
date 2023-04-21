import React from 'react'

import CryptoIcon from "../cryptoIcon/CryptoIcon";

const Card = (props) => {
    const signalTracker = props.signalTracker;
    const forecastModel = props.forecastModel;
    const crypto = props.crypto;

    const signalStyle = {
        background: signalTracker.signal === 1 ? 'green' : 'red'
    };

    return <>
        <div className="card bg-dark text-warning" style={{width: "36rem"}}>
                <div className="card-body">
                    {signalTracker &&
                        <>
                            <h5 className="card-title"><CryptoIcon cryptoId= {crypto.name} /> {forecastModel.symbol} AI Model</h5>
                            <p className="card-text">Source: {forecastModel.source} Exchange</p>
                            <p className="card-text">AI Model Type: {forecastModel.ai_type}</p>
                            <p className="card-text">Feature Counts: {forecastModel.feature_counts}</p>
                            <p className="card-text">AI Model Name: {forecastModel.model_name}</p>
                            <p className="card-text">Evaluated Tweet Counts: {signalTracker.tweet_counts}</p>
                            <p className="card-text">Accuracy Score: {forecastModel.accuracy_score}</p>
                        </>
                    }
                    {signalTracker &&
                        <p className="card-text font-weight-bold">
                            {signalTracker.signal === 1 ? (
                                <span style={signalStyle}>Signal: BUY</span>
                            ) : (
                                <span style={signalStyle}>Signal: SELL</span>
                            )} for {signalTracker.datetime_t}
                        </p>
                    }

                </div>
        </div>
    </>
}

export default Card;