import React from 'react'

import CryptoIcon from "../cryptoIcon/CryptoIcon";

const Card = (props) => {
    const signalTracker = props.signalTracker;
    const forecastModel = props.forecastModel;
    const crypto = props.crypto;

    const signalStyle = {
        background: signalTracker?.signal === 1 ? 'green' : 'red'
    };

    function capitilaze(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return <>
        <div className="card bg-dark text-warning m-3" style={{width: "36rem"}}>
                <div className="card-body">
                    {signalTracker &&
                        <>
                            <h5 className="card-title"><CryptoIcon cryptoId= {crypto?.name} /> {forecastModel?.symbol} AI Model</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark text-light">Source: {capitilaze(forecastModel?.source)} Exchange</li>
                                <li className="list-group-item bg-dark text-light">AI Model Type: {forecastModel?.ai_type}</li>
                                <li className="list-group-item bg-dark text-light">Feature Counts: {forecastModel?.feature_counts}</li>
                                <li className="list-group-item bg-dark text-light">AI Model Name: {forecastModel?.model_name.slice(5, -5)}</li>
                                <li className="list-group-item bg-dark text-light">Evaluated Tweet Counts: {signalTracker?.tweet_counts}</li>
                                <li className="list-group-item bg-dark text-light">Accuracy Score: {forecastModel?.accuracy_score}</li>

                                    {signalTracker.signal === 1 ? (
                                        <li className="list-group-item bg-success text-light">
                                    <span style={signalStyle}>Signal: BUY</span> for {signalTracker?.datetime_t}</li>
                                ) : (
                                        <li className="list-group-item bg-danger text-light">
                                    <span style={signalStyle}>Signal: SELL</span> for {signalTracker?.datetime_t}</li>
                                )}

                            </ul>
                        </>
                    }

                </div>
        </div>
    </>
}

export default Card;