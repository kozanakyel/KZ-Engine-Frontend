import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import FlowComponent from '@/components/flowComponent/FlowComponent';
import KzengineDiagram from '@/components/kzengineDiagram/KzengineDiagram';
import AIProjectAssistant from '../../components/aiProjectAssistant/AIProjectAssistant';
import TradingAdvisor from '../../components/tradingAdvisor/TradingAdvisor';
import KzaiAssistant from '../../components/kzaiAssistant/KzaiAssistant';
import SentimentCircleChart from '../../components/sentimentCircleChart/SentimentCircleChart';
import SentimentCard from '../../components/sentimentCard/SentimentCard';
import JapaneseCandlestickChart from '../../components/japaneseCandlestickChart/JapaneseCandlestickChart';

const HomePage = () => {

  return (
    <>
      <Header />
      <AIProjectAssistant />
      <SentimentCircleChart />
      <SentimentCard />
      {/* <JapaneseCandlestickChart /> */}
      <FlowComponent />
      {/* <TradingAdvisor /> */}
      <KzengineDiagram />
      <KzaiAssistant />
      <Footer />
    </>
  );
};

export default HomePage;
