import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';
import showReducer from './show_reducer';
import formReducer from './form_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import reservationErrorsReducer from './reservation_errors_reducer';
import reservationReducer from './reservation_reducer';

export default combineReducers({
  session: sessionReducer,
  matchingCars: searchReducer,
  currentListing: showReducer,
  searchParams: formReducer,
  sessionErrors: sessionErrorsReducer,
  reservations: reservationReducer,
  reservationErrors: reservationErrorsReducer
});
