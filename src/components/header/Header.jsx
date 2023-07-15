import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const image = '/images/darkbgorange.jpg';

  const homeHeader = (
    <h5 className="text-lg text-uppercase">
      Welcome<br></br>
      <br></br> Try our forecasting engine for next 1 hour and 1 day BUY/SELL
      SIGNAL.<br></br> It is designed with AI, also supported with Live Tracker
      Sentiment Analysis and Desicion Trees for Bitcoin, Ethereum, Binance coin
    </h5>
  );

  //  style={{height:'600px', marginTop:'0px', backgroundImage: `url(${image})`}}
  return (
    <>
      <div className="p-5 text-center bg-light text-dark">
        <h1 className="display-1 mb-3">KZENGINE AI</h1>

        <div className="container mb-3">
          <div className="row">
            <div className="col-sm">{homeHeader}</div>
          </div>
        </div>
        <Link
          className="btn btn-warning m-3"
          to="/engine/1h"
          role="button"
          style={{ fontWeight: 'bold' }}
        >
          Try Engine Hourly
        </Link>
        <Link
          className="btn btn-warning m-3"
          to="/engine/1d"
          role="button"
          style={{ fontWeight: 'bold' }}
        >
          Try Engine Daily
        </Link>
        <Link
          className="btn btn-warning m-3"
          to="/"
          role="button"
          style={{ fontWeight: 'bold' }}
        >
          Whitepaper
        </Link>
      </div>
    </>
  );
};

export default Header;
