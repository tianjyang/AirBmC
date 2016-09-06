export const COMMENT_CONSTANTS = {
  REQUEST_COMMENTS: "REQUEST_COMMENTS",
  RECEIVE_COMMENTS: "RECEIVE_COMMENTS",
  CREATE_COMMENT: "CREATE_COMMENT"
};

export const requestComments = (listingId) => ({
  type: COMMENT_CONSTANTS.REQUEST_COMMENTS,
  listingId
});
export const receiveComments = (comments) => ({
  type: COMMENT_CONSTANTS.RECEIVE_COMMENTS,
  comments
});

export const createComments = (commentInfo) => ({
  type: COMMENT_CONSTANTS.CREATE_COMMENT,
  commentInfo
});
