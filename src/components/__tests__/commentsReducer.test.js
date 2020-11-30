import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';


it('handles actions of type SAVE_COMMENT', ()=>{
  const action = {
      type: SAVE_COMMENT,
      payload:'new comment'
  }
    
  const newState = commentsReducer([], action)
  expect(newState).toEqual(['new comment']);

})

it('handles actions of unknown type', ()=>{
  const action = {
      type: "no_type",
      payload:'new comment'
  }
    
  const newState = commentsReducer([], action)
  expect(newState).toEqual([]);

})