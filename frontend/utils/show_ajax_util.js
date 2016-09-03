const successCallback = (data) => {console.log(data);};
const errorCallback = (data) => {
  console.log("you failed");
  console.log(data);
};

export const requestListing = (listingId,successCallback = success,fail = errorCallback) => {
  console.log("requestlisting");
  $.ajax({
    method: "GET",
    url: `api/listings/${listingId}`,
    success: successCallback,
    error: fail
  });
};

export const newReservation = (listingId,reservation,successCallback = success,fail = errorCallback) => {
  console.log("newReservation");
  $.ajax({
    method: "POST",
    url: `api/listings/${listingId}/reservations`,
    data: reservation,
    success: successCallback,
    error: fail
  });
};

export const cancelReservation = (listingId,reservationId,successCallback = success,fail = errorCallback) => {
  console.log("cancelReservation");
  $.ajax({
    method: "DELETE",
    url: `api/listings/${listingId}/reservations/${reservationId}`,
    success: successCallback,
    error: fail
  });
};
