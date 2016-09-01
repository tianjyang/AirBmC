const SHOW_CONSTANTS = {
  REQUEST_LISTING: "REQUEST_LISTING",
  REQUEST_COMMENTS: "REQUEST_COMMENTS",
  RECEIVE_LISTING: "RECEIVE_LISTING",
  RECEIVE_COMMENTS: "RECEIVE_COMMENTS",
  POST_RESERVATION: "POST_RESERVATION"
};

const findListings = (searchParams) => ({
  type: SHOW_CONSTANTS.REQUEST_LISTING,
  searchParams
});

const requestComments = (searchParams) => ({
  type: SHOW_CONSTANTS.REQUEST_COMMENTS,
  searchParams
});

const receiveListings = (receivedListings) => ({
  type: SHOW_CONSTANTS.RECEIVE_LISTING,
  receivedListings
});

const receiveComments = (receivedComments) => ({
  type: SHOW_CONSTANTS.RECEIVE_COMMENTS,
  receivedComments
});

const postReservation = (reservationInfo) => ({
  type: SHOW_CONSTANTS.POST_RESERVATION,
  reservationInfo
});

export {SHOW_CONSTANTS, findListing, receiveListing, postReservation};
