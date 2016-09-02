const fail = (data) => {console.log(data);};
const success = (data) => {console.log(data);};

const GoogleGeocoding = (address,successCallback = success) => {
  $.ajax({
    method: "GET",
    dataType: "json",
    url: "http://maps.googleapis.com/maps/api/geocode/json",
    data: address,
    success: successCallback,
    error: fail
  });
};

const requestListings = (searchParams,successCallback = success) => {
  $.ajax({
    method: "GET",
    url: "api/listings",
    data: searchParams,
    success: successCallback,
    error: fail
  });
};

const searchListingsByBound = (searchParams,successCallback = success) => {
  $.ajax({
    method: "GET",
    url: "/api/listings/by_bounds",
    data: searchParams,
    success: successCallback,
    error: fail
  });
};

export { GoogleGeocoding, requestListings, searchListingsByBound };
