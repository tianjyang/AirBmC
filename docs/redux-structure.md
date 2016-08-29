### Redux Structure and State

The front end will have the following elements:
* Middleware
  * CarSearch: receives a location, geolocates it, and submits a search request for cars in a specified location.
  * LoginUser: responsible for submitting user credentials and ensuring session is established.
  * FetchCar: receives a specific id of a car and submits a search request for the full details of the car.

* Reducers
  * CarReducer: receives fetched cars and processes updates the states with relevant vehicles.
  * CommentsReducer: receives fetched comments, processes comments as relevant. If there are no comments, populates it with a relevant default state.

* Actions
  * Car Actions
    * FetchPopularCars: Requests the top 5 cars in the area
    * FetchMatchingCars: Requests the cars matching the search criteria
    * ProcessMatchingCars: Updates the state with either the top 5 cars or the cars matching the search criteria

  * Comment Actions
    * FetchesComments: Requests comments relevant to the listing
    * ProcessComments: Updates the state with comments relevant to the listing
    * SubmitNewComment: Posts a new comment to the server

  * Reservation Actions
    * SubmitNewReservation: Submits a new reservation to the server
    * SuccessfulReservation: Updates the state with the newest reservation request
    * FailedReservation: Updates the state with the error messages
