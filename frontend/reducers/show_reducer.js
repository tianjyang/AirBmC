import { merge } from 'lodash';
import { SHOW_CONSTANTS, receiveListing } from '../actions/show_actions';

const defaultState = {
  listingInfo: {},
  commentInfo: {},
  potentialCarId: null
};

const showReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_CONSTANTS.RECEIVE_LISTING:
      return merge({},state,{listingInfo: action.receivedListing});
    case SHOW_CONSTANTS.RECEIVE_COMMENTS:
      return merge({},state,{listingComments: action.commentInfo});
    case SHOW_CONSTANTS.HIGHLIGHT_MARKER:
      return merge({},state,{potentialCarId: action.markerId})
    default:
    return state;
  }
};

export default showReducer;
