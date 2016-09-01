import { SEARCH_CONSTANTS } from '../actions/search_actions';
import { requestListings } from '../utils/search_ajax_util';

const SearchMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case SEARCH_CONSTANTS.FIND_LISTINGS:
      console.log("finding listings");
      console.log(action.searchParams);
      requestListings(action.searchParams);

      break;
    default:
      return next(action);

  }
};

export default SearchMiddleware;
