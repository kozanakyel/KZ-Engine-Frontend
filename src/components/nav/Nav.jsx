import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-warning fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={'/images/kozanlogo.png'}
              alt="profiler"
              style={{ width: '50px' }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/engine/1h" className="nav-link active" style={{textDecoration: "underline"}}>
                  Hourly Engine
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/engine/1d" className="nav-link active" style={{textDecoration: "underline"}}>
                  Daily Engine
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sentiment" className="nav-link active" style={{textDecoration: "underline"}}>
                  Sentiment Tracker
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
