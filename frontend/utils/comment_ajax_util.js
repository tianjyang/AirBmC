const successCallback = (data) => {console.log(data);};
const errorCallback = (data) => {
  console.log("you failed");
  console.log(data);
};

const requestCommentsFromServer = (listingId,success = successCallback,fail = errorCallback) => {
  console.log("requested comments");
  $.ajax({
    method: "GET",
    url: "api/comments",
    data: {id: listingId},
    success: success,
    error: fail
  });
};


export { requestCommentsFromServer };
