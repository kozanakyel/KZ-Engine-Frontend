import React from 'react';

export const edges = [{ id: '1-2', source: '1', target: '2' },
    { id: '2-3', source: '2', target: '3' },
    { id: '4-5', source: '4', target: '5' },
    { id: '4-6', source: '4', target: '6' },
    { id: '5-7', source: '5', target: '7' },
    { id: '6-7', source: '6', target: '7' },
    { id: '7-8', source: '7', target: '8' },
    { id: '8-9', source: '8', target: '9' },
    { id: '3-10', source: '3', target: '10' },
    { id: '9-11', source: '9', target: '11' },
    { id: '10-11', source: '10', target: '11' },
    { id: '11-12', source: '11', target: '12' },
    { id: '12-13', source: '12', target: '13' },
];

export const verticallyNodes = [
    {
        id: '1',
        data: { label: 'Twitter API' },
        position: { x: 30, y: 30 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'Data Mining' },
        position: { x: 30, y: 200 },
    },
    {
        id: '3',
        data: { label: 'Sentiment Analysis' },
        position: { x: 30, y: 300 },
    },
    {
        id: '4',
        data: { label: 'OHLC/Volume Data' },
        position: { x: 200, y: 30 },
    },
    {
        id: '5',
        data: { label: 'Technical Indicators' },
        position: { x: 150, y: 100 },
    },
    {
        id: '6',
        data: { label: 'Japanese Candlestick Art' },
        position: { x: 350, y: 100 },
    },
    {
        id: '7',
        data: { label: 'Composite Matrix Data' },
        position: { x: 200, y: 200 },
    },
    {
        id: '8',
        data: { label: 'Strategy Normalization' },
        position: { x: 200, y: 300 },
    },
    {
        id: '9',
        data: { label: 'Featured Matrix Data' },
        position: { x: 200, y: 400 },
    },
    {
        id: '10',
        data: { label: 'Sentiment Scores Matrix' },
        position: { x: 30, y: 400 },
    },
    {
        id: '11',
        data: { label: 'Composite Matrix (Sentiment Scores and Featured Matrix)' },
        position: { x: 100, y: 500 },
    },
    {
        id: '12',
        data: { label: 'Xgboost Binary Forecaster' },
        position: { x: 100, y: 600 },
    },
    {
        id: '13',
        data: { label: 'SIGNAL - binary output' },
        position: { x: 100, y: 700 },
    },
];

export const horizontallyNodes = [
    {
        id: '1',
        data: { label: 'Twitter API' },
        position: { x: 30, y: 30 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'Data Mining' },
        position: { x: 200, y: 30 },
    },
    {
        id: '3',
        data: { label: 'Sentiment Analysis' },
        position: { x: 400, y: 30 },
    },
    {
        id: '4',
        data: { label: 'OHLC/Volume Data' },
        position: { x: 30, y: 200 },
    },
    {
        id: '5',
        data: { label: 'Technical Indicators' },
        position: { x: 200, y: 150 },
    },
    {
        id: '6',
        data: { label: 'Japanse Candlestick Art' },
        position: { x: 200, y: 250 },
    },
    {
        id: '7',
        data: { label: 'Composite Matrix Data' },
        position: { x: 400, y: 200 },
    },
    {
        id: '8',
        data: { label: 'Strategy Normalization' },
        position: { x: 600, y: 200 },
    },
    {
        id: '9',
        data: { label: 'Featured Matrix Data' },
        position: { x: 800, y: 200 },
    },
    {
        id: '10',
        data: { label: 'Sentiment Scores Matrix' },
        position: { x: 800, y: 30 },
    },
    {
        id: '11',
        data: { label: 'Composite Matrix (Sentiment Scores and Featured Matrix)' },
        position: { x: 1000, y: 100 },
    },
    {
        id: '12',
        data: { label: 'Xgboost Binary Forecaster' },
        position: { x: 1200, y: 100 },
    },
    {
        id: '13',
        data: { label: 'SIGNAL - binary output' },
        position: { x: 1200, y: 200 },
    },
];

export default { verticallyNodes, edges, horizontallyNodes };