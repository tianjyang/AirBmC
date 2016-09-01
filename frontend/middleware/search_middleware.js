import { SEARCH_CONSTANTS, findListings } from '../actions/search_actions';
import {  } from '../utils/ajax_util';

const SearchMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case SEARCH_CONSTANTS.FIND_LISTINGS:
      console.log("finding listings");
      console.log(action.searchParams);
      break;
    default:
      return next(action);

  }
};

export default SearchMiddleware;
