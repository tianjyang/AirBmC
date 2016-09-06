import { COMMENT_CONSTANTS, receiveComments} from '../actions/comment_actions';
import { requestCommentsFromServer } from '../utils/comment_ajax_util';

const CommentMiddleware = (store) => (next) => (action) => {
  const success = (data) => {
    store.dispatch(receiveComments(data));
  };

  const errorCallback = (errorMessage) => {
  };

  switch (action.type) {
    case COMMENT_CONSTANTS.REQUEST_COMMENTS:
      requestCommentsFromServer(action.listingId,success);
      break;

    default:
      return next(action);

  }
};

export default CommentMiddleware;
