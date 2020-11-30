import React from 'react';
import ReactDOM from 'react-dom'
import App from 'components/App'; // absolute path .. jsconfig.json in root

ReactDOM.render(
    <App />, 
    document.querySelector('#root') 
)