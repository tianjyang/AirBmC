# AirBmC

## Executive Summary

AirBmC is a marketplace to connect people willing to rent their cars to people who do not own and require the use of one. Currently, AirBmC is limited to the San Francisco metropolitan area.

### Features
By September 9th 2016 at 12pm, AirBmC shall at the very least include in the following features:
1. A persistent header across all pages which contains:
  1. The AirBmC logo
  2. A search function for cars in the area
  3. An option to login/sign up
  4. An option to view reservations if logged in
  5. An option to logout if logged in
2. A landing page which contains:
  1. Listings of local cars
  2. Links to show pages of local cars
  3. A map element which indicates the location of local cars
3. Show pages of local cars which contain:
  1. A picture of the car for rent
  2. A description, rules, and other considerations associated with the car.
  3. Form to submit a request to rent a car
  4. A list of comments and a form to submit a new comment
All features shall have smooth bug-free navigation and adhere to the css style indicated in the wireframes.

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
users:
has_many: listings
has_many: reservations
has_many: comments
t.string :username
t.string :password_digest
t.string :session_token

listings:
belongs_to: user
has_many: reservations
t.float :overall_rating
t.integer :user_id
t.string :title
t.text :description
t.string :image_url
t.float :lat
t.float :long

reservations:
belongs_to: user
belongs_to: listing
t.integer :user_id
t.integer :listing_id
t.string :start_date
t.string :end_date
t.text :description

t.comments:
belongs_to: user
belongs_to: listing
t.integer :user_id
t.integer :listing_id
t.integer :rating
t.string :title
t.text :body

### React Components
* Header Component
  * Input field
  * Profile Summary
  * Login/Sign Up Form

* Landing Page
  * Introduction
  * Popularity map
  * Top 5

* Search Results
  * Search filter
  * Listings map
  * Results

* Show Page
  * Description
  * Rules
  * Other considerations
  * New reservation form

### React State

<pre>
{
  MatchingCars: {
    0: {
      lat: FLOAT,
      long: FLOAT,
      title: STRING,
      image_url: STRING
    }

  Comments: {
    0: {

    }
  }
  }
  SearchField: {
    destination: STRING
    start_date: STRING
    end_date: STRING
  }
  CurrentUser: {
    username: STRING
    logged_in: BOOLEAN
  }
}
  </pre>

### Development Schedule
It is estimated a total of 72 hours will be available for the development of AirBmC. The development schedule is as follows.


Front End - styling of header component - 6 hours
  * Ensure logo appears
  * Ensure text input field is there

Back End - search functionality - 6 hours
  * Seed database with 25 car postings randomly located in SF
  * Implement google geocoding API [reference link](https://developers.google.com/maps/documentation/javascript/geocoding)
  * Ensure cars in a 10 mile radius can be found (use 10 miles for now)
  * Ensure information is returned as a JSON.


Front End - Display Results - 6 hours
  * Ensure front end can create a GET request front server
  * Develop react component which will display the list of cars
  * Develop middleware which will request information from backend
  * Develop reducers which will update state of the site with searched cars
  * Ensure hash history is updated with lat/long coordinates

Front End - Google Maps api - 6 hours
  * Develop react component which will house the maps element
  * Develop functionality to display coordinates of matched listings.
  * Make a request for popular listings and ensure they are displayed.
  * Develop a "popular listings" controller but have it return the first 5 elements for now

Back End - authentication functionality - 4 hours
  * Add account creation and session token functionality to back end

Front End - add login/signup form to header - 4 hours
  * Create a react component which displays login/logout options
  * Nest react component into the header form
  * Develop routes which will choose to display login/logout form based on state

Back End - develop functionality for show page - 2 hours
  * Develop controller to find a car by id
  * Return car details as JSON.

Front End - style show page - 6 hours
  * Develop React component for car image
  * Develop React component for listing information
  * Develop React component for bookings form
  * Develop middleware for form submission
  * Ensure css style matches the wireframe.

Back End - new reservation functionality - 6 hours
  * Create a model for new reservations
  * Seed database with 5 reservations for 5 selected cars
  * Seed database with 1 reservation for 10 different cars
  * Implement functionality to ensure there are no conflicts. (rails before action hook)
  * Ensure associations between users/listings works

Front End - new comment form on show page - 8 hours
  * Develop react component for new comments form
  * Develop middleware to submit new comment
  * Develop reducer to update state with new comment

Back End - new comment functionality - 8 hours
  * Create a model for new comments
  * Develop controller to submit new comment

Front End - show comments - 8 hours
  * Develop react component to display comments
  * Develop middleware to request all comments
