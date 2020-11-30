import React from 'react';
import ReactDOM from 'react-dom'
import App from 'components/App'; // absolute path .. jsconfig.json in root
import Root from 'Root'


ReactDOM.render(
    <Root>
        <App />
    </Root>, 
    document.querySelector('#root') 
);