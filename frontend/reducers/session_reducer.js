import { merge } from 'lodash';
import { SESSION_CONSTANTS } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SESSION_CONSTANTS.UPDATE_USER:
      return merge({},state,action.userInfo);
    default:
    return state;
  }
};

export default sessionReducer;
