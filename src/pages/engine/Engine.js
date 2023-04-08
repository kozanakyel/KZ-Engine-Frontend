import React from 'react';

import { useState, useEffect } from 'react';
import axios from "../../utils/axios";

const Engine = () => {

    const [aimodel, setAimodel] = useState([]);
    const [position, setPosition] = useState([]);

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


    return (
        <>
            <div>
                <p className={"hor-ver-centered"}>Welcome Engine Page {position.created_at} !</p>
            </div>
        </>
    )
}

export default Engine;