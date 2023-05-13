import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FlowComponent from "@/components/flowComponent/FlowComponent";

const Home = () => {

    const homeHeader = "Welcome, You can try our cyptocurrency price movement forecasting engine " +
        "for 1 hour and 2 hour BUY/SELL SIGNAL. It is designed with AI, also supported with" +
        "Live tracker Twitter Sentiment Analysis and Xgboost(Desicion Trees) for specific strategies and " +
        "complex Deep Learning Modelling Architecture. Now Available for Bitcoin, Ethereum, Binance coin";

    return <>
        <Header content={homeHeader} />
        <FlowComponent />
        <Footer />
    </>

}

export default Home;
