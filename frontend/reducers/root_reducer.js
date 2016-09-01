import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';
import showReducer from './show_reducer';

export default combineReducers({
  session: sessionReducer,
  matchingCars: searchReducer,
  currentCar: showReducer
});
