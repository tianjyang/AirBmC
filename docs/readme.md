# AirBmC

## Executive Summary

AirBmC is a marketplace to connect people willing to rent their cars to people who do not own and require the use of one. Currently, AirBmC is limited to the San Francisco metropolitan area.

AirBmC can be found at
[https://airbmc.herokuapp.com/](https://airbmc.herokuapp.com/)

### MVP Features

The MVP shall have smooth bug-free navigation, adequate styling, appropriate seed data to demonstarte the functionality of the following features:
* New account creation, login, and guest/demo login
* A production README
* Hosting on Heroku
* Ability to display local cars
* Ability to create new bookings
* Ability to find local cars by location and availability
* Ability to post new and view existing reviews

* Reviews

### Architecture
AirBmC will be developed using the following stack:

* HTTP Request Interface: Rack
* HTTP Server: WEBrick
* Database: PostgreSQL
* MVC Framework: Rails
* Languages: Javascript, Ruby, JSX, ERB, HTML, CSS
* Front End Frameworks: React, Redux
* Third Party Libraries/APIs: Lodash, Google Maps, jQuery
* Image Hosting: TO BE DETERMINED

### WireFrames
The following images detail the layout of AirBmC.

**Figure 1: Landing Page**
![alt text](/docs/wireframes/LandingPage.png "Landing Page")

**Figure 2: Search Results**
![alt text](/docs/wireframes/SearchResults.png "Search Results")

**Figure 3: Show Page**
![alt text](/docs/wireframes/ShowPage.png "Show Page")

### Database Schema
[Database Schema](/docs/schema.md "Schema")  

### React Components
[React Components](/docs/component-hierarchy.md "React Components")  

### Redux Structure and State
[Redux Structure and State](/docs/redux-structure.md "React Components")  


### Development Schedule
It is estimated a total of 72 hours will be available for the development of AirBmC. The development schedule is as follows.

**New account/session creation - 8/30**
* Back End - Add account creation and session token functionality to back end
  * Generate model and controllers
* Front End - add login/signup form to header
  * Create a react component for the header
  * Create a react component which displays login/logout options
  * Nest react component into the header form
  * Develop routes which will choose to display login/logout form based on state
  * Develop front end functionality to login as guest/demo

**Ability to Display Local Cars - 9/1**
* Back End - Add car MVCs to back end
  * Generate model for cars
  * Generate seed data (25 car postings randomly located in SF)
  * Generate api controllers to find 5 popular listings
  * Generate api controller to find cars in a within a certain distance (10 miles by default)
  * Generate JSON view
* Front End - create a search results page
  * Ensure front end can create a GET request front server
  * Develop form which will display the list of cars in an area (without distance criteria) using google geocoding API [reference link](https://developers.google.com/maps/documentation/javascript/geocoding)
  * Develop middleware which will request information from backend
  * Develop reducers which will update state of the site with searched cars
  * Ensure hash history is updated with lat/long coordinates

**Ability to create new bookings - 9/5**
* Back End - develop functionality for show page
  * Modify cars controller to find a car by id and return car details as JSON.
  * Create a model for new reservations
  * Seed database with 5 reservations for 5 selected cars
  * Seed database with 1 reservation for 10 different cars
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

### Additional Features
As time permits, additional features will be added to the website. They will be documented here.
