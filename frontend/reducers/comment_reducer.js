import { merge } from 'lodash';
import { COMMENT_CONSTANTS } from '../actions/comment_actions';


const commentReducer = (state = [], action) => {
  switch (action.type) {
    case COMMENT_CONSTANTS.RECEIVE_COMMENTS:
    let outputVal = [];
      return outputVal.concat(action.comments);
    case COMMENT_CONSTANTS.CLEAR_COMMENTS:
      return [];
  default:
  return state;
  }
};

export default commentReducer;
