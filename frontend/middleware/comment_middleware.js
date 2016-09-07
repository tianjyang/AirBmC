import { COMMENT_CONSTANTS, receiveComments} from '../actions/comment_actions';
import { requestCommentsFromServer, postRequestToServer } from '../utils/comment_ajax_util';

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

      case COMMENT_CONSTANTS.CREATE_COMMENT:
      postRequestToServer(action.commentInfo,success);

      break;

    default:
      return next(action);

  }
};

export default CommentMiddleware;
