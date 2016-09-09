import { merge } from 'lodash';
import { CAR_CONSTANTS } from '../actions/car_actions';

const carReducer = (state = [], action) => {
  switch (action.type) {
    case CAR_CONSTANTS.RECEIVE_CARS:
      return merge({},action.carInfo);
    case CAR_CONSTANTS.CLEAR_CARS:
      return state;
    default:
      return state;
  }
};

export default carReducer;
