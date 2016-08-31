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


window.signUpUser = signUpUser;
export { signUpUser, newSession };