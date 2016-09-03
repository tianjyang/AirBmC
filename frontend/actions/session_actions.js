const SESSION_CONSTANTS = {
  CREATE_USER: "CREATE_USER",
  CREATE_SESSION: "CREATE_SESSION",
  DESTROY_SESSION: "DESTROY_SESSION",
  UPDATE_USER: "UPDATE_USER",
  REQUEST_RESERVATIONS: "REQUEST_RESERVATIONS",
  RECEIVE_RESERVATIONS: "RECEIVE_RESERVATIONS"
};

const createUser = (creds) => ({
  type: SESSION_CONSTANTS.CREATE_USER,
  creds
});

const createSession = (creds) => ({
  type: SESSION_CONSTANTS.CREATE_SESSION,
  creds
});

const destroySession = () => ({
  type: SESSION_CONSTANTS.DESTROY_SESSION,
});

const updateUser = (userInfo) => ({
  type: SESSION_CONSTANTS.UPDATE_USER,
  userInfo
});

const requestReservations = () => ({
  type: SESSION_CONSTANTS.REQUEST_RESERVATIONS,
});

const receiveReservations = (reservationInfo) => ({
  type: SESSION_CONSTANTS.RECEIVE_RESERVATIONS,
  reservationInfo
});

export {SESSION_CONSTANTS, createUser, createSession, destroySession, updateUser, receiveReservations, requestReservations};
