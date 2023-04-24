import React from 'react';
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from "../../utils/axios";

import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";


const Engine = () => {

    //const [aimodel, setAimodel] = useState(null);
    //const [position, setPosition] = useState({});
    //const [signal, setSignal] = useState({});
    //const [forecastModel, setForecastModel] = useState({});
    //const [crypto, setCrypto] = useState({});

    const [allSignals, setAllSignals] = useState([])
    const location = useLocation();
    const data = location.state;

    useEffect(() => {

        axios.post("/signal_tracker_all", {
            interval: data.interval,
            ai_type: "XgboostForecaster"
        })
            .then(function (response) {
                //console.log('signal_tracker response', response);
                //console.log('signal_tracker_all response Data', response.data);
                //console.log('signal_tracker response Data', response.status);
                setAllSignals(response.data);
                //setForecastModel(response.data?.forecast_model)
                //setCrypto((response.data?.forecast_model?.crypto))

            }).catch(function (error) {
            console.log(error);
        });
    }, [])

    //console.log('signal_tracker fetched: ', signal.forecast_model?.symbol, 'include aimodel');
    /**
     *
     useEffect(() => {

        axios.post("/signal_tracker", {symbol: "BNBUSDT",
            interval: "1h",
            ai_type: "XgboostForecaster"})
            .then(function (response) {
                //console.log('signal_tracker response', response);
                console.log('signal_tracker response Data', response.data);
                //console.log('signal_tracker response Data', response.status);
                setSignal(response.data);
                setForecastModel(response.data?.forecast_model)
                setCrypto((response.data?.forecast_model?.crypto))

            }).catch(function (error) {
            console.log(error);
        });
    }, [])

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
            {allSignals.map((signal) => (
            <div key={signal.ticker} className={"hor-ver-centered m-3"}>

                <Card
                    signalTracker={signal}
                    forecastModel={signal?.forecast_model}
                    crypto={signal?.forecast_model?.crypto}
                />

            </div>
            ))}
            <Footer />
        </>
    )
}

export default Engine;