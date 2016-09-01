const success = (data) => {console.log(data);};
const fail = (data) => {console.log(data);};

export const requestListing = (listingId,successCallback = success) => {
  $.ajax({
    method: "GET",
    url: `api/listings/${listingId}`,
    success: successCallback,
    error: fail
  });
};

export const newReservation = (listingId,reservation,successCallback = success) => {
  $.ajax({
    method: "POST",
    url: `api/listings/${listingId}/reservations`,
    data: reservation,
    success: successCallback,
    error: fail
  });
};

export const cancelReservation = (listingId,reservationId,successCallback = success) => {
  $.ajax({
    method: "DELETE",
    url: `api/listings/${listingId}/reservations/${reservationId}`,
    success: successCallback,
    error: fail
  });
};
