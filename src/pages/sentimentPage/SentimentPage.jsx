import React from 'react';
import Footer from '@/components/footer/Footer';
import SentimentCircleChart from '../../components/sentimentCircleChart/SentimentCircleChart';
import SentimentCard from '../../components/sentimentCard/SentimentCard';

const SentimentPage = () => {
  return (
    <>
    
      <div style={{marginTop:'100px', backgroundColor:'black'}}>
        <SentimentCircleChart />
        <SentimentCard />
        <Footer />
      </div>
    </>
  );
};

export default SentimentPage;
