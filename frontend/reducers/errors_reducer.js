import { merge } from 'lodash';
import { ERROR_CONSTANTS } from '../actions/error_actions';

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_CONSTANTS.UPDATE_ERRORS:
      return action.errors;
    default:
    return state;
  }
};

export default errorsReducer;
