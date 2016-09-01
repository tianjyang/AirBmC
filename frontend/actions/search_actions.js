const SEARCH_CONSTANTS = {
  FIND_LISTINGS: "FIND_LISTINGS",
  RECEIVE_LISTINGS: "RECEIVE_LISTINGS"
};

const findListings = (searchParams) => ({
  type: SEARCH_CONSTANTS.FIND_LISTINGS,
  searchParams
});

const receiveListings = (receivedListings) => ({
  type: SEARCH_CONSTANTS.RECEIVE_LISTINGS,
  receivedListings
});
export {SEARCH_CONSTANTS, findListings, receiveListings};
