# AirBmC

## Executive Summary

AirBmC is a marketplace to connect people willing to rent their cars to people who do not own and require the use of one. Currently, AirBmC is limited to the San Francisco metropolitan area.

## Architecture
AirBmC is built using the following stack:

* HTTP Request Interface: Rack
* HTTP Server: WEBrick
* Database: PostgreSQL
* MVC Framework: Rails
* Languages: Javascript, Ruby, JSX, ERB, HTML, CSS
* Front End Frameworks: React, Redux
* Third Party Libraries/APIs: Lodash, Google Maps, jQuery
* Image Hosting: Cloudinary

## Features
AirBmC has the following features
### New account creation, login, and guest/demo login
AirBmC allows users to login to an existing account, create a new one, or simply experience the website's functionality as a guest. Users are free to browse and view listings without an account, but back end authentication ensures users are logged in before POST or DELETE methods are committed to the database.

### Ability to search for local cars
Listings in the San Francisco metropolitan area can be found using the search form on the landing page. If the user desires, search results can be filtered by availability dates and distance from location. Once redirected to the search results page, the user is presented with two options to refine their results. The criteria previously entered persists in a form at the top of the results page and can be updated accordingly. Alternatively, users can use the map and find results contained in the current view.

Since the map provides valuable feedback regarding the location of listings, a feature was developed to fix the position of the map as the user scrolls through the listings.

### Ability to create new bookings
From the search page, the user is redirected to the show page where more information about the car can be found. Three validations are performed before a reservation is committed to the database: a check to ensure the start date comes before the end date, a check to ensure the user has an account, and a final check to ensure there are no conflicts with existing reservations.

### Ability to post new reviews
At the show page, users can view existing reviews. Users can post a review on a car if they have not done so before.

## Development Schedule
AirBmC was produced over two weeks using the following schedule.

**New account/session creation - 8/30**
* Generate model and controllers for back end authentication and session token functionality
* Front End - add login/signup form to header
  * Create a react component for the header
  * Create a react component which displays login/logout options
  * Nest react component into the header form
  * Develop routes which will choose to display login/logout form based on state
  * Develop front end functionality to login as guest/demo

**Ability to Display Local Cars - 9/1**
* Back End - Add car MVCs to back end
  * Generate model for Listings
  * Generate api controller to find cars in a within a certain distance (10 miles by default)
* Front End - create a search results page
  * Develop form which will display the list of cars in an area (without distance criteria) using google geocoding API [reference link](https://developers.google.com/maps/documentation/javascript/geocoding)
  * Develop middleware which will request information from backend
  * Develop reducers which will update state of the site with searched cars

**Ability to create new bookings - 9/5**
* Back End - develop functionality for show page
  * Add method to Listings controller return car details as JSON.
  * Create a model for new reservations
  * Implement functionality to ensure there are no conflicts. (rails before action hook)
  * Ensure associations between users/listings works
* Front End - create show page
  * Update React Routes to include
  * Develop React component for car image
  * Develop React component for listing information
  * Develop React component for bookings form
  * Develop middleware for form submission
  * Ensure css style matches the wireframe.

**Ability to Search for Cars - 9/7**
* Back End - modify api controllers
  * modify api controllers to accept distance from location
  * modify car models to be able to search by availability
  * modify car models to be able to search by price
* Front End - update the form elements and generate landing search element
  * Develop react component which will house the maps element displayed on the search results page
  * Develop functionality to request more cars based on the coordinates of the map

**Ability to post and view existing reviews - 9/9**
* Back End - reviews functionality
  * Create a model for new reviews
  * Develop controller to create a new comment
  * Develop controller to transfer comments associated with a listing
* Front End - new comment form on show page
  * Develop react component for new comments form
  * Develop middleware to submit new comment
  * Develop reducer to update state with new comment
* Front End - show comments
  * Develop react component to display comments
  * Develop middleware to request all comments
