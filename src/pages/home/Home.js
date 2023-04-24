import React from "react";
import Header from "../../components/header/Header";

const Home = () => {

    const homeHeader = "Welcome, You can try our cyptocurrency price movement forecasting engine " +
        "for 1 hour and @ hour BUY/SELL SIGNAL. It is designed with AI, also supported with" +
        "Live tracker Twitter Sentiment Analysis and Xgboost(Desicion Trees) for specific strategies and " +
        "complex Deep Learning Modelling Architecture. Now Available for Bitcoin, Ethereum, Binance coin, Xrp and Doge coin";

    return <>
        <Header content={homeHeader} />
    </>

}

export default Home;
