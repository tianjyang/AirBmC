import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const formReducer = (state = {location: "San Francisco"}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.UPDATE_SEARCH_PARAMS:
      return merge({},state,action.searchParams);
    default:
    return state;
  }
};

export default formReducer;
