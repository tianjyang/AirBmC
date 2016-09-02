import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.RECEIVE_LISTINGS:
      return merge({},state,action.receivedListings);
    default:
    return state;
  }
};

export default formReducer;
