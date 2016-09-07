import { merge } from 'lodash';
import { COMMENT_CONSTANTS } from '../actions/comment_actions';


const commentReducer = (state = [], action) => {
  switch (action.type) {
    case COMMENT_CONSTANTS.RECEIVE_COMMENTS:
    let outputVal = []
      return state.concat(action.comments);
  default:
  return state;
  }
};

export default commentReducer;