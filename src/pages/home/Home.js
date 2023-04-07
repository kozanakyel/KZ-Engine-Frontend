import React from "react";
import Header from "../../components/header/Header";

const Home = () => {

    const homeHeader = "Welcome, You can try our cyptocurrency price movement forecasting engine " +
        "for Bitcoin(BTCUSDT) and Binance Coin (BNBUSDT). It is designed with AI, also supported with" +
        "Live tracker Twitter Sentiment Analysis and Xgboost(Desicion Trees) for specific strategies and " +
        "complex Deep Learning Modelling Architecture";

    return <>
        <Header content={homeHeader} />
    </>

}

export default Home;
