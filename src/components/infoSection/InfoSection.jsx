import React from 'react';

const InfoSection = (props) => {
    const infoApp = props.info;
    const headerApp = props.head;
    const colorApp = props.color;

    return <>
        <div className={"pt-5 m-5 text-center bg-"+colorApp}  style={{borderTop: '1px solid white'}}>
            <h1 className="text-warning font-weight-bold ">{headerApp}</h1>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-sm align-self-center">
                        <div>
                            {infoApp}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default InfoSection;