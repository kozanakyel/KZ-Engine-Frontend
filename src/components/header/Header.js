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
                        <p className="mb-3 text-light">{props.content}</p>
                    </div>
                    {/**
                    <div className="col-sm">
                        <img src={"/images/archopt_cover.png"} alt="profiler" style={{ width:"300px"}} />
                    </div>
                */}

                </div>
            </div>
            <Link className="btn btn-warning" to="/engine" role="button" style={{fontWeight:"bold"}}>Try Forecasting</Link>

        </div>
    </>
}

export default Header;