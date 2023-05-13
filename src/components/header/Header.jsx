import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const image = "/images/archopt_cover.png";

    return <>
        <div className="p-5 text-center bg-dark" style={{height:'600px', marginTop:'0px', backgroundImage: `url(${image})`}}>
            <h1 className="mb-3 text-warning">KZEngine AI</h1>

            <div className="container mb-3">
                <div className="row">
                    <div className="col-sm">
                        <p className="mb-3 text-light" style={{fontWeight:'bold'}}>{props.content}</p>
                    </div>
                </div>
            </div>
            <Link className="btn btn-warning m-3" to="/engine" state={{interval:"1h"}} role="button" style={{fontWeight:"bold"}}>Try Engine Hourly</Link>
            <Link className="btn btn-warning m-3" to="/engine" state={{interval:"1d"}} role="button" style={{fontWeight:"bold"}}>Try Engine Daily</Link>
            <Link className="btn btn-warning m-3" to="/" role="button" style={{fontWeight:"bold"}}>Whitepaper</Link>
        </div>
    </>
}

export default Header;