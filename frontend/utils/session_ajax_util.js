const success = (data) => {console.log(data);};
const fail = (data) => {console.log(data);};

const fetchCar = (id,successCallback = success) => {
  $.ajax({
    method: "POST",
    url: `api/listings/${id}`,
    success: successCallback,
    error: fail
  });
};

const newSession = (creds,successCallback) => {
  $.ajax({
    method: "POST",
    url: "api/sessions",
    data: creds,
    success: successCallback,
    error: fail
  });
};

const destroySession = (creds,successCallback) => {
  $.ajax({
    method: "DELETE",
    url: "api/sessions",
    data: creds,
    success: successCallback,
    error: fail
  });
};


export { signUpUser, newSession, destroySession };
