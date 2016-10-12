export const SHOW_CONSTANTS = {
  REQUEST_LISTING: "REQUEST_LISTING",
  // REQUEST_COMMENTS: "REQUEST_COMMENTS",
  RECEIVE_LISTING: "RECEIVE_LISTING",
  // RECEIVE_COMMENTS: "RECEIVE_COMMENTS",
  POST_RESERVATION: "POST_RESERVATION",
  CANCEL_RESERVATION: "CANCEL_RESERVATION",
  HIGHLIGHT_MARKER: "HIGHLIGHT_MARKER",
};

export const requestListing = (searchParams) => ({
  type: SHOW_CONSTANTS.REQUEST_LISTING,
  searchParams
});

// export const requestComments = (searchParams) => ({
//   type: SHOW_CONSTANTS.REQUEST_COMMENTS,
//   searchParams
// });

export const receiveListing = (receivedListing) => ({
  type: SHOW_CONSTANTS.RECEIVE_LISTING,
  receivedListing
});

// export const receiveComments = (receivedComments) => ({
//   type: SHOW_CONSTANTS.RECEIVE_COMMENTS,
//   receivedComments
// });

export const postReservation = (listingId, reservationInfo) => ({
  type: SHOW_CONSTANTS.POST_RESERVATION,
  reservationInfo,
  listingId
});

export const cancelReservation = (reservationInfo) => ({
  type: SHOW_CONSTANTS.CANCEL_RESERVATION,
  reservationInfo
});

export const highlightMarker = (markerId) => ({
  type: SHOW_CONSTANTS.HIGHLIGHT_MARKER,
  markerId
});
