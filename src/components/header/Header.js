import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return <>
        <div className="p-5 text-center text-warning bg-dark" style={{ marginTop:'0px' }}>
            <h1 className="mb-3">KZ Forecasting Engine</h1>
            <h4 className="mb-3">{props.content}</h4>
            <Link className="btn btn-warning" to="/engine" role="button">Try Forecasting</Link>

        </div>
    </>
}

export default Header;