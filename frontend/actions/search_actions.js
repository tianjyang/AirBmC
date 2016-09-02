const SEARCH_CONSTANTS = {
  FIND_LISTINGS: "FIND_LISTINGS",
  RECEIVE_LISTINGS: "RECEIVE_LISTINGS",
  UPDATE_SEARCH_PARAMS: "UPDATE_SEARCH_PARAMS"
};

const findListings = (searchParams) => ({
  type: SEARCH_CONSTANTS.FIND_LISTINGS,
  searchParams
});

const receiveListings = (receivedListings) => ({
  type: SEARCH_CONSTANTS.RECEIVE_LISTINGS,
  receivedListings
});

const updateSearchParams = (searchParams) => ({
  type: SEARCH_CONSTANTS.UPDATE_SEARCH_PARAMS,
  searchParams
});
export {SEARCH_CONSTANTS, findListings, receiveListings, updateSearchParams};
