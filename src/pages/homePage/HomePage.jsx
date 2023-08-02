import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import InfoSection from "@/components/infoSection/InfoSection";
import KzengineDiagram from "@/components/kzengineDiagram/KzengineDiagram";
import AIProjectAssistant from "../../components/aiProjectAssistant/AIProjectAssistant";
import TradingAdvisor from "../../components/tradingAdvisor/TradingAdvisor";
import KzaiAssistant from "../../components/kzaiAssistant/KzaiAssistant";
import SentimentCircleChart from "../../components/sentimentCircleChart/SentimentCircleChart";
import SentimentCard from "../../components/sentimentCard/SentimentCard";
import JapaneseCandlestickChart from "../../components/japaneseCandlestickChart/JapaneseCandlestickChart";

const HomePage = () => {
  const infoApp1 = (
    <p className=" mb-3 text-light">

      <li>Using Decision Trees, Sentiment Analysis with Natural Language Processing, and Japanese Candlestick Art.</li>
      <li>Forecasting the structure of the next candle for popular cryptocurrencies like Bitcoin, Ethereum, and Binance
        Coin.
      </li>
      <li>For Bitcoin, Ethereum, and Binance Coin.</li>
      <li>Binary format prediction.</li>
      <li>Next candle for 1 hour and 1 day</li>

    </p>
  );

  const infoSentiment = (
    <p className=" mb-3 text-light">
      <li>Do data mining with twitter api.</li>
      <li>Graph algorithm for detecting twitter phenomena</li>
      <li>Updating for each 30 minutes.</li>
      <li>Get sentiment score with VADER functionalities.</li>
      <li>Use for our machine learning Signal Generator Pipeline.</li>
    </p>
  );


  return (
    <>
      <Header />
      <AIProjectAssistant />
      <InfoSection info={infoApp1} head={"Project Purposes"} color={""} />
      <InfoSection info={infoSentiment} head={"Sentiment Tracker"} color={""} />
      {/* <SentimentCircleChart /> */}
      {/* <SentimentCard /> */}
      {/* <JapaneseCandlestickChart /> */}
      {/* <TradingAdvisor /> */}
      <KzengineDiagram />
      <KzaiAssistant />
      <Footer />
    </>
  );
};

export default HomePage;
