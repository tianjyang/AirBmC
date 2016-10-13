import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.RECEIVE_LISTINGS:
      let keys = Object.keys(action.receivedListings);
      keys.forEach((key)=>{
        action.receivedListings[key].filtered = false;
      });
      return merge({},action.receivedListings);
    default:
    return state;
  }
};

export default searchReducer;
