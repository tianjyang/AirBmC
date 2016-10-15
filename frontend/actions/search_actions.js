const SEARCH_CONSTANTS = {
  FIND_LISTINGS: "FIND_LISTINGS",
  RECEIVE_LISTINGS: "RECEIVE_LISTINGS",
  UPDATE_SEARCH_PARAMS: "UPDATE_SEARCH_PARAMS",
  SEARCH_BY_BOUNDS: "SEARCH_BY_BOUNDS",
  HIGHLIGHT_MARKER: "HIGHLIGHT_MARKER",
  FILTER_LISTINGS: "FILTER_LISTINGS",
  RESET_FILTERS: "RESET_FILTERS",
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

const filterListings = (searchParams) => ({
  type: SEARCH_CONSTANTS.FILTER_LISTINGS,
  searchParams
});

const resetFilters = () => ({
  type: SEARCH_CONSTANTS.RESET_FILTERS
});

export {SEARCH_CONSTANTS,
  findListings,
  receiveListings,
  updateSearchParams,
  searchByBounds,
  filterListings,
  resetFilters};
