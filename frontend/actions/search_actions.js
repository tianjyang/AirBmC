const SEARCH_CONSTANTS = {
  FIND_LISTINGS: "FIND_LISTINGS"
};

const findListings = (searchParams) => ({
  type: SEARCH_CONSTANTS.FIND_LISTINGS,
  searchParams
});

export {SEARCH_CONSTANTS, findListings};
