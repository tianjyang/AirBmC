const successCallback = (data) => {console.log(data);};
const errorCallback = (data) => {console.log(data);};

const signUpUser = (id,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "POST",
    url: `api/listings/${id}`,
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


export { signUpUser, newSession, destroySession };
