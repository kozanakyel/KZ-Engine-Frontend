import React from 'react';

const FlowComponent = () => {
    const image = "/images/strateji2.png";

    const infoApp1 = "The objective of this project is to use various techniques such as Decision Trees, Sentiment Analysis with Natural Language Processing, and Japanese Candlestick Art to forecast the structure of the next candle for popular cryptocurrencies like Bitcoin, Ethereum, Binance coin. " +
        "The predictions will be made using a binary format and will aim to determine whether the price movement of the cryptocurrencies in the market will increase or decrease within the next 1 hour and next 1 day based on the candle structure.\n" +
        "In addition to these techniques, the research also involves studying other technical analysis and indicator structures, as well as incorporating Twitter data and sentiment analysis scores into the model.\n";

    const infoApp2 = "The research resulted in the development of an application with a backend data and AI modelling pipeline, as well as a frontend for users to view the coin signal results and how many tweets were evaluated.\n";

    return <>
        <div className="p-5 text-center bg-light">
            <div className="container mb-3">
                <div className="row">
                    <div className="col-sm align-self-center">
                        <div>
                            <p className="mb-3 text-dark">{infoApp1}</p>
                            <p className="mb-3 text-dark">{infoApp2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FlowComponent;