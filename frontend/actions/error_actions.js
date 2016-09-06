export const ERROR_CONSTANTS = {
  UPDATE_SESSION_ERRORS: "UPDATE_SESSION_ERRORS",
  UPDATE_RESERVE_ERRORS: "UPDATE_RESERVE_ERRORS"
};

export const updateSessionErrors = (errors) => ({
  type: ERROR_CONSTANTS.UPDATE_SESSION_ERRORS,
  errors
});
export const updateReserveErrors = (errors) => ({
  type: ERROR_CONSTANTS.UPDATE_RESERVE_ERRORS,
  errors
});
