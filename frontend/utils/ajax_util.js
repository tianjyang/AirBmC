const success = (data) => {console.log(data);};
const fail = (data) => {console.log(data);};

const signUpUser = (creds,successCallback = success) => {
  $.ajax({
    method: "POST",
    url: "api/user",
    data: creds,
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

const GoogleGeocoding = (address,successCallback) => {
  $.ajax({
    method: "GET",
    dataType: "json",
    url: "http://maps.googleapis.com/maps/api/geocode/json",
    data: address,
    success: successCallback,
    error: fail
  });
};
export { signUpUser, newSession, destroySession, GoogleGeocoding };
