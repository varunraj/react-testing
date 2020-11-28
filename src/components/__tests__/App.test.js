import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
// packages to test components
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('shows a comment box', ()=>{
    const div = document.createElement('div') // JSDOM take care of fake div. This code does not run on browser
    ReactDOM.render(<App />, div) // render App to this div
    
    // Below is bad code since we are checking inner working of another component
    //expect(div.innerHTML).toContain('Comment Box')
    
    // check if App have comment box component using enzyme package

    ReactDOM.unmountComponentAtNode(div) // clean up the test setup. Else degrade performance

})