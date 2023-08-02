import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import InfoSection from '@/components/infoSection/InfoSection';
import KzengineDiagram from '@/components/kzengineDiagram/KzengineDiagram';
import AIProjectAssistant from '../../components/aiProjectAssistant/AIProjectAssistant';
import TradingAdvisor from '../../components/tradingAdvisor/TradingAdvisor';
import KzaiAssistant from '../../components/kzaiAssistant/KzaiAssistant';
import SentimentCircleChart from '../../components/sentimentCircleChart/SentimentCircleChart';
import SentimentCard from '../../components/sentimentCard/SentimentCard';
import JapaneseCandlestickChart from '../../components/japaneseCandlestickChart/JapaneseCandlestickChart';

const HomePage = () => {
  const infoProjectPurposes = (
    <p className=" mb-3 text-light">
      <li>
        Using Decision Trees, Sentiment Analysis with Natural Language
        Processing, and Japanese Candlestick Art.
      </li>
      <li>
        Forecasting the structure of the next candle for popular
        cryptocurrencies like Bitcoin, Ethereum, and Binance Coin.
      </li>
      <li>For Bitcoin, Ethereum, and Binance Coin.</li>
      <li>Binary format prediction.</li>
      <li>Next candle for 1 hour and 1 day</li>
    </p>
  );

  const infoSentimentTracker = (
    <p className=" mb-3 text-light">
      <li>Do data mining with twitter api.</li>
      <li>Graph algorithm for detecting twitter phenomena</li>
      <li>Updating for each 30 minutes.</li>
      <li>Get sentiment score with VADER functionalities.</li>
      <li>Use for our machine learning Signal Generator Pipeline.</li>
    </p>
  );

  const infoKayzeeAsssitant = (
    <p className=" mb-3 text-light">
      <li>Powered to LLM process</li>
      <li>Langchain framework supported</li>
      <li>Embedding and GPT opeartion used</li>
      <li>Vectorstore and Indexed application.</li>
      <li>Get and ask trading advice wisely.</li>
    </p>
  );

  return (
    <>
      <Header />
      <AIProjectAssistant />
      <InfoSection
        info={infoProjectPurposes}
        head={'Project Purposes'}
        color={''}
        image={'/images/dmpurpose.png'}
      />
      <InfoSection
        info={infoSentimentTracker}
        head={'Sentiment Tracker'}
        color={''}
      />
      <InfoSection
        info={infoKayzeeAsssitant}
        head={'KayZee Assistant'}
        color={''}
        image={'/images/kzaiassist.png'}
      />
      {/* <SentimentCircleChart /> */}
      {/* <SentimentCard /> */}
      {/* <JapaneseCandlestickChart /> */}
      {/* <TradingAdvisor /> */}
      <KzengineDiagram />

      {/* <KzaiAssistant /> */}
      <Footer />
    </>
  );
};

export default HomePage;
