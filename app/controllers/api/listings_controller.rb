class Api::ListingsController < ApplicationController
  def index
    location = params[:location]
    lat = location[:lat].to_f
    long = location[:lng].to_f
    distance = params[:criteria].to_f
    listings = Listing.find_by_distance(lat,long,distance);
    render json: listings
  end

  def show
    current_listing = Listing.find(params[:id])

    reply = {}
    reply[:title] = current_listing.title
    reply[:description] = current_listing.description
    reply[:price_per_day] = current_listing.price_per_day
    reply[:image_url] = current_listing.image_url
    reply[:lat] = current_listing.lat
    reply[:long] = current_listing.long
    reply[:mpg] = current_listing.mpg
    reply[:num_seats] = current_listing.num_seats
    reply[:make_model] = current_listing.make_model
    reply[:username] = current_listing.user.username
    render json: reply
  end

  def index_by_map
    min_lat = params[:south]
    max_lat = params[:north]
    min_long = params[:west]
    max_long = params[:east]
    current_listings = Listing.find_within_bounds(min_lat,max_lat,min_long, max_long)
    render json: current_listings
  end

end
