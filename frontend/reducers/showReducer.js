import { merge } from 'lodash';
import { SHOW_CONSTANTS, receiveListing } from '../actions/session_actions';

const showReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_CONSTANTS.RECEIVE_LISTING:
      return merge({},state,{listingInfo: action.listingInfo});
    case SHOW_CONSTANTS.RECEIVE_COMMENTS:
      return merge({},state,{listingComments: action.commentInfo});
    default:
    return state;
  }
};

export default sessionReducer;
