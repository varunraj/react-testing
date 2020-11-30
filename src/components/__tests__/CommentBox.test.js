import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme' // this will do full dom rendering

let wrapped;

beforeEach(()=>{
    wrapped = mount(<CommentBox />); // full render instead of shallow
})

afterEach(()=>{
    // unmount the component from jsdom 
    wrapped.unmount();
})

it('Has a text area and a button', ()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
    
});

it('has a text area that user can type text in', ()=>{
    // simulate method will recreate the event
    wrapped.find('textarea').simulate('change', {
        target:{value:'new comment'} // this will be passed to event handler as event.target.value
    })
    wrapped.update() // this will rerender the component so that text area have new value
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('text areas is cleared when form is submitted',()=>{
    wrapped.find('textarea').simulate('change', {
        target:{value:'new comment'} // this will be passed to event handler as event.target.value
    })
    wrapped.update()
    wrapped.find('form').simulate('submit')
    wrapped.update() // this will rerender the component so that text area have new value
    expect(wrapped.find('textarea').prop('value')).toEqual('');
});
