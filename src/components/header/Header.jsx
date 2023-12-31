import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const homeHeader = (
    <h5 className="text-lg text-uppercase">
      Welcome<br></br>
      <br></br> Try our forecasting engine for next 1 hour and 1 day BUY/SELL
      SIGNAL.<br></br> It is designed with AI, also supported with Live Tracker
      Sentiment Analysis, Desicion Trees and Japanse Candlestick Art for
      Bitcoin, Ethereum and Binance coin.
    </h5>
  );

  const whitepaper =
    'https://drive.google.com/file/d/1YtaueYIfKVAdb-Uwb2419Yo_RcuCXnCU/view?usp=sharing';
  const whitepaperURL = new URL(whitepaper);

  //  style={{height:'600px', marginTop:'0px', backgroundImage: `url(${image})`}}
  return (
    <>
      <div
        className="p-5 text-center text-dark bg-warning mt-5"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* <video
          className="videoTag"
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={'./images/teamcollabarate.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <h1 className="display-1 mb-3">KZENGINE AI</h1>

        <div className="container mb-3">
          <div className="row">
            <div className="col-sm">{homeHeader}</div>
          </div>
        </div>
        <Link
          className="btn btn-success m-3"
          to="/engine/1h"
          role="button"
          style={{ fontWeight: 'bold' }}
        >
          Try Engine Hourly
        </Link>
        <Link
          className="btn btn-success m-3"
          to="/engine/1d"
          role="button"
          style={{ fontWeight: 'bold' }}
        >
          Try Engine Daily
        </Link>
        <Link
          className="btn btn-success m-3"
          to="/sentiment"
          role="button"
          style={{ fontWeight: 'bold' }}
        >
          Sentiment Tracker
        </Link>
        <a
          className="btn btn-success m-3"
          href={whitepaperURL}
          target="_blank"
          role="button"
          style={{ fontWeight: 'bold' }}
        >
          Whitepaper
        </a>
      </div>
    </>
  );
};

export default Header;
