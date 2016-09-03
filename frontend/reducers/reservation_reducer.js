import { merge } from 'lodash';
import { SESSION_CONSTANTS } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SESSION_CONSTANTS.RECEIVE_RESERVATIONS:
      return merge({},state,action.reservationInfo);
    case SESSION_CONSTANTS.DESTROY_SESSION:
      return [];

    //
    default:
      return state;
  }
};

export default sessionReducer;
