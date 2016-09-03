const successCallback = (data) => {console.log(data);};
const errorCallback = (data) => {
  console.log("you failed");
  console.log(data);
};

const GoogleGeocoding = (address,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "GET",
    dataType: "json",
    url: "http://maps.googleapis.com/maps/api/geocode/json",
    data: address,
    success: success,
    error: fail
  });
};

const requestListings = (searchParams,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "GET",
    url: "api/listings",
    data: searchParams,
    success: success,
    error: fail
  });
};

const searchListingsByBound = (searchParams,success = successCallback,fail = errorCallback) => {
  $.ajax({
    method: "GET",
    url: "/api/map_listings",
    data: searchParams,
    success: success,
    error: fail
  });
};

export { GoogleGeocoding, requestListings, searchListingsByBound };
