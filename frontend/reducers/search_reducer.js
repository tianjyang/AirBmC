import { merge } from 'lodash';
import { SEARCH_CONSTANTS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONSTANTS.RECEIVE_LISTINGS:
      let keys = Object.keys(action.receivedListings);
      keys.forEach((key)=>{
        action.receivedListings[key].meetsFilters = true;
      });
      return merge({},action.receivedListings);
    case SEARCH_CONSTANTS.FILTER_LISTINGS:
      let matchingCars = state;
      let carKeys = Object.keys(matchingCars);
      let numSeat = parseInt(action.searchParams.num_seats)||0;
      let minPrice = parseInt(action.searchParams.min_price)||0;
      let maxPrice = parseInt(action.searchParams.max_price)||Infinity;
      let currentCar,seatCheck,minPriceCheck,maxPriceCheck;
      carKeys.forEach((key)=>{
        currentCar = matchingCars[key];
        seatCheck = (currentCar.num_seats >= numSeat);
        minPriceCheck = (currentCar.price_per_day >= minPrice);
        maxPriceCheck = (currentCar.price_per_day <= maxPrice);
        currentCar.meetsFilters = (seatCheck && minPriceCheck && maxPriceCheck)
      });
      return merge({},matchingCars);

    default:
    return state;
  }
};

export default searchReducer;
