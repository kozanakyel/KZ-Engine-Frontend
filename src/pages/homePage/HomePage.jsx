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
  const infoApp1 = (
    <p className=" mb-3 text-light">
      The objective of this project is to use various techniques such as{' '}
      <mark>
        <strong>
          Decision Trees, Sentiment Analysis with Natural Language Processing
          and Japanese Candlestick Art
        </strong>
      </mark>{' '}
      to forecast the structure of the next candle for popular cryptocurrencies
      like Bitcoin, Ethereum, Binance coin. The predictions will be made using a
      binary format and will aim to determine whether the price movement of the
      cryptocurrencies in the market will increase or decrease within{' '}
      <u>the next 1 hour and next 1 day</u> based on the candle structure.
    </p>
  );

  const infoSentiment = (
    <p className=" mb-3 text-light">
      This Sentiment Score obtained from specific twitter phenomenon and getting
      their tweets. Those people selected via the graph Introducing our
      Sentiment Score, a treasure trove of insights meticulously gathered from
      specific Twitter phenomena and their tweets.{' '}
      <mark>
        <strong>
          This captivating sentiment score undergoes hourly updates, ensuring
          the freshest and most accurate perspective on people's thoughts.
        </strong>
      </mark>{' '}
      Our Sentiment Score takes center stage within our cutting-edge Signal
      Generator Machine Learning Pipeline. Witness the power of AI as it
      seamlessly incorporates sentiment analysis into the pipeline, creating a
      potent fusion that amplifies your decision-making prowess.
    </p>
  );



  return (
    <>
      <Header />
      <AIProjectAssistant />
      <InfoSection info={infoApp1} head={'Project Purposes'} color={'danger'} />
      <InfoSection info={infoSentiment} head={'Sentiment Tracker'} color={''} />
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
