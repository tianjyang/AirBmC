import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.RECEIVE_LISTINGS:
      return merge({},state,action.receivedListings);

    case SEARCH_CONSTANTS.UPDATE_SEARCH_PARAMS:
      return merge({},state,{searchParams:action.searchParams});

    default:
    return state;
  }
};

export default sessionReducer;
//FUCK THIS BRANCH
