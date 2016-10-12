const SEARCH_CONSTANTS = {
  FIND_LISTINGS: "FIND_LISTINGS",
  RECEIVE_LISTINGS: "RECEIVE_LISTINGS",
  UPDATE_SEARCH_PARAMS: "UPDATE_SEARCH_PARAMS",
  SEARCH_BY_BOUNDS: "SEARCH_BY_BOUNDS",
  HIGHLIGHT_MARKER: "HIGHLIGHT_MARKER"
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

const searchByBounds = (searchParams) => ({
  type: SEARCH_CONSTANTS.SEARCH_BY_BOUNDS,
  searchParams
});




export {SEARCH_CONSTANTS,
  findListings,
  receiveListings,
  updateSearchParams,
  searchByBounds};
