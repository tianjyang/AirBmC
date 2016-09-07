const successCallback = (data) => {console.log(data);};
const errorCallback = (data) => {
  console.log("you failed");
  console.log(data);
};

const requestCommentsFromServer = (listingId,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "GET",
    url: "api/comments",
    data: {id: listingId},
    success: success,
    error: fail
  });
};

const postRequestToServer = (commentParams,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: commentParams,
    success: success,
    error: fail
  });
};


export { requestCommentsFromServer, postRequestToServer };
