import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";


const ChartComponent = (props) => {
    const chartData = JSON.parse(props.backtestData)
    // console.log(chartData)

    const formattedDates = Object.keys(chartData.creturns).filter(Boolean).map(timestamp => {
        const date = new Date(parseInt(timestamp));
        return date.toLocaleString(); // You can format the date string as desired using the toLocaleString method
    });

    const lineData = {
        labels: formattedDates.filter(Boolean),
        datasets: [
            {
                label: "Cummulative returns",
                data: Object.values(chartData.creturns).filter(Boolean),
                fill: false,
                borderColor: "red",
            },
            // {
            //     label: "Strategy",
            //     data: Object.values(chartData.cstrategy).filter(Boolean),
            //     fill: false,
            //     borderColor: "blue",
            // },
            {
                label: "Net Strategy",
                data: Object.values(chartData.cstrategy_net).filter(Boolean),
                fill: false,
                borderColor: "green",
            },
        ],
    };

    return (
        <div>
            <Line data={lineData} />
        </div>
    );
};
export default ChartComponent;