import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import FlowComponent from '@/components/flowComponent/FlowComponent';
import KzengineDiagram from '@/components/kzengineDiagram/KzengineDiagram';
import AIProjectAssistant from '../../components/aiProjectAssistant/AIProjectAssistant';
import TradingAdvisor from '../../components/tradingAdvisor/TradingAdvisor';

const Home = () => {
  const homeHeader =
    'Welcome, You can try our cyptocurrency price movement forecasting engine ' +
    'for next 1 hour and 1 day BUY/SELL SIGNAL. It is designed with AI, also supported with' +
    ' Live Tracker Sentiment Analysis and Desicion Trees for Bitcoin, Ethereum, Binance coin';

  return (
    <>
      <Header content={homeHeader} />
      <AIProjectAssistant />
      <FlowComponent />
      <TradingAdvisor />
      <KzengineDiagram />
      <Footer />
    </>
  );
};

export default Home;
