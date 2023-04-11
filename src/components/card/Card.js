import React from 'react'


import CryptoIcon from "../cryptoIcon/CryptoIcon";

const Card = (props) => {
    const aimodel = props.aimodel;
    const position = props.position;

    const signalStyle = {
        background: position.position === 1 ? 'green' : 'red'
    };

    return <>
        <div className="card bg-dark text-warning" style={{width: "36rem"}}>
                <div className="card-body">
                    {aimodel &&
                        <>
                            <h5 className="card-title"><CryptoIcon cryptoId={"binancecoin"} /> {aimodel.symbol} AI Model</h5>
                            <p className="card-text">Source: {aimodel.source} Exchange</p>
                            <p className="card-text">AI Model Type: {aimodel.ai_type}</p>
                            <p className="card-text">Feature Counts: {aimodel.feature_counts}</p>
                            <p className="card-text">AI Model Name: {aimodel.model_name}</p>
                            <p className="card-text">Accuracy Score: {aimodel.accuracy_score}</p>
                        </>
                    }
                    {position &&
                        <p className="card-text font-weight-bold">
                            {position.position === 1 ? (
                                <span style={signalStyle}>Signal: BUY</span>
                            ) : (
                                <span style={signalStyle}>Signal: SELL</span>
                            )} for {position.datetime_t}
                        </p>
                    }

                </div>
        </div>
    </>
}

export default Card;