export const CAR_CONSTANTS = {
  REQUEST_CARS: "REQUEST_CARS",
  RECEIVE_CARS: "RECEIVE_CARS",
  CREATE_CARS: "CREATE_CARS",
  CLEAR_COMMENTS: "CLEAR_COMMENTS"
};

export const requestCars = () => ({
  type: CAR_CONSTANTS.REQUEST_CARS,
});
export const receiveCars = (carInfo) => ({
  type: CAR_CONSTANTS.RECEIVE_CARS,
  carInfo
});
export const createCar = (carInfo) => ({
  type: CAR_CONSTANTS.CREATE_CARS,
  carInfo
});

export const clearCar = () => ({
  type: CAR_CONSTANTS.CLEAR_CARS
});
