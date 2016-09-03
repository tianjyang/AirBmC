import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';
import showReducer from './show_reducer';
import formReducer from './form_reducer';
import errorsReducer from './errors_reducer';
import reservationReducer from './reservation_reducer';

export default combineReducers({
  session: sessionReducer,
  matchingCars: searchReducer,
  currentListing: showReducer,
  searchParams: formReducer,
  errors: errorsReducer,
  reservations: reservationReducer
});
