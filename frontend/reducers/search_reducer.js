import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.UPDATE_USER:
    // debugger
      return merge({},state,action.userInfo);
    default:
    return state;
  }
};

export default sessionReducer;
