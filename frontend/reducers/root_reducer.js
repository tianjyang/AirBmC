import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  session: sessionReducer,
  matchingCars: searchReducer
});
