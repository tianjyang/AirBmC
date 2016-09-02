import { SEARCH_CONSTANTS, receiveListings} from '../actions/search_actions';
import { requestListings } from '../utils/search_ajax_util';

const SearchMiddleware = (store) => (next) => (action) => {
  const success = (data) => {
    store.dispatch(receiveListings(data));
  };
  switch (action.type) {
    case SEARCH_CONSTANTS.FIND_LISTINGS:
      requestListings(action.searchParams,success);

      break;
    default:
      return next(action);

  }
};

export default SearchMiddleware;
