import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return <>
        <div className="p-5 text-center bg-dark" style={{ marginTop:'0px' }}>
            <h1 className="mb-3 text-warning">KZ Forecasting Engine</h1>
            <p className="mb-3 text-light">{props.content}</p>
            <Link className="btn btn-warning" to="/engine" role="button" style={{fontWeight:"bold"}}>Try Forecasting</Link>

        </div>
    </>
}

export default Header;