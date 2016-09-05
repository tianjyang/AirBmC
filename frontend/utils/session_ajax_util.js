const successCallback = (data) => {console.log(data);};
const errorCallback = (data) => {
  console.log("you failed");
  console.log(data);
};

const signUpUser = (creds,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "POST",
    url: "api/user",
    data: creds,
    success: success,
    error: fail
  });
};

const newSession = (creds,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "POST",
    url: "api/sessions",
    data: creds,
    success: success,
    error: fail
  });
};

const destroySession = (creds,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "DELETE",
    url: "api/sessions",
    data: creds,
    success: success,
    error: fail
  });
};

const getReservations = (success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "GET",
    url: "api/reservations",
    success: success,
    error: fail
  });
};

const deleteReservation = (id,success=successCallback, fail= errorCallback) =>{
  $.ajax({
    method: "DELETE",
    url: `api/reservations/${id}`,
    success: success,
    error: fail
  });
};


export { signUpUser, newSession, destroySession, getReservations, deleteReservation };
