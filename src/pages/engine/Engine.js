import React from 'react';

import { useState, useEffect } from 'react';
import axios from "../../utils/axios";

import Card from "../../components/card/Card";


const Engine = () => {

    const [aimodel, setAimodel] = useState(null);
    const [position, setPosition] = useState({});
    const [signal, setSignal] = useState({});
    const [fModel, setfModel] = useState({});
    const [cr, setCr] = useState({});


    useEffect(() => {
        const options = {
            params: {
                symbol: "BNBUSDT",
                interval: "1h",
                ai_type: "XgboostForecaster",
            },
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios.post("/signal_tracker", {symbol: "BNBUSDT",
            interval: "1h",
            ai_type: "XgboostForecaster"})
            .then(function (response) {
                //console.log('signal_tracker response', response);
                //console.log('signal_tracker response Data', response.data);
                //console.log('signal_tracker response Data', response.status);
                setSignal(response.data);
                setfModel(response.data.forecast_model)
                setCr((response.data.forecast_model.crypto))
                console.log('signal_tracker fetched: ', response.data.forecast_model.symbol, 'include aimodel');
            }).catch(function (error) {
            console.log(error);
        });
    }, [])

    /**
    useEffect(() => {
        axios.post("/aimodel", {symbol: 'BNBUSDT'})
            .then(function (response) {
                console.log('aimodel response', response);
                console.log('aimodel response Data', response.data);
                console.log('aimodel response Data', response.status);
                setAimodel(response.data);
                console.log('aimodel fetched: ', typeof aimodel, 'include aimodel', aimodel);
            });
    }, [])



    useEffect(() => {
        axios.post("/position", {symbol: 'BNBUSDT'})
            .then(function (response) {
                console.log('position response', response);
                console.log('position response Data', response.data);
                console.log('position response Data', response.status);
                setPosition(response.data);
                console.log('position fetched: ', typeof position, 'include position', position);
            });
    }, [])
*/

    return (
        <>
            <div className="hor-ver-centered m-3">

                 <Card
                 signalTracker={signal}
                 fModel={fModel}
                 cr={cr}
                 />



            </div>
        </>
    )
}

export default Engine;