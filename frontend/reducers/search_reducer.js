import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.RECEIVE_LISTINGS:
      debugger
      return merge({},state,action.receivedListings);
    default:
    return state;
  }
};

export default sessionReducer;
