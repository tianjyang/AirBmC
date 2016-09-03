export const ERROR_CONSTANTS = {
  UPDATE_ERRORS: "UPDATE_ERRORS",
};

export const updateErrors = (errors) => ({
  type: ERROR_CONSTANTS.UPDATE_ERRORS,
  errors
});
