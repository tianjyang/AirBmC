import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.RECEIVE_LISTINGS:
      let keys = Object.keys(action.receivedListings);
      keys.forEach((key)=>{
        action.receivedListings[key].filtered = false;
      });
      return merge({},action.receivedListings);
    // case SEARCH_CONSTANTS.FILTER_LISTINGS:
    //   let matchingCars = state.matchingCars;
    //   let keys1 = Object.keys(matchingCars);
    //   let numSeatFilter = parseInt(state.searchParams.num_seats)
    //   let currentCar = null;
    //   keys1.forEach((key)=>{
    //     currentCar = matchingCars[key];
    //     if (currentCar.num_seats > 10)
    //   });

    default:
    return state;
  }
};

export default searchReducer;
