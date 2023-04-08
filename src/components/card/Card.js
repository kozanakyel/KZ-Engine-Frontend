import React from 'react'

const Card = (props) => {
    const aimodel = props.aimodel;
    const position = props.position;

    return <>
        <div className="card bg-dark text-warning" style={{width: "36rem"}}>
                <div className="card-body">
                    {aimodel &&
                        <>
                            <h5 className="card-title">{aimodel.symbol} AI Model</h5>
                            <p className="card-text">Source: {aimodel.source} Exchange</p>
                            <p className="card-text">AI Model Type: {aimodel.ai_type}</p>
                            <p className="card-text">Feature Counts: {aimodel.feature_counts}</p>
                            <p className="card-text">AI Model Name: {aimodel.model_name}</p>
                        </>
                    }
                    {position &&
                        <p className="card-text font-weight-bold">Signal: {position.position === 1 ? "BUY" : "SELL"} for {position.datetime_t}</p>
                    }

                </div>
        </div>
    </>
}

export default Card;