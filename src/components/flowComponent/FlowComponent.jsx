import React from 'react';

const FlowComponent = () => {

    const infoApp1 = <p className=" mb-3 text-dark">The objective of this project is to use various
        techniques such as <mark><strong>Decision Trees, Sentiment Analysis with Natural Language Processing
        and Japanese Candlestick Art</strong></mark> to forecast the structure of the next candle for popular
        cryptocurrencies like Bitcoin, Ethereum, Binance coin.
        The predictions will be made using a binary format and will aim to determine
        whether the price movement of the cryptocurrencies in the market will
        increase or decrease within <u>the next 1 hour and next 1 day</u> based
        on the candle structure.</p>;

    return <>
        <div className="p-5 text-center bg-light">
            <h3 className="text-dark">Project Purposes</h3>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-sm align-self-center">
                        <div>
                            {infoApp1}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FlowComponent;