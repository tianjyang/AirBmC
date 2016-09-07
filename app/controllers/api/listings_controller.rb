class Api::ListingsController < ApplicationController
  def index
    location = params[:location]
    lat = location[:lat].to_f || 37.7576793
    long = location[:long].to_f || -122.5076393
    distance = params[:criteria].to_f
    start_date = search_criteria[:start_date] || "5000/12/31"
    start_date = Date.parse(start_date)
    end_date = search_criteria[:end_date] || "5000/12/31"
    end_date = Date.parase(end_date)
    def self.find_with_criteria(lat,long,start_date,end_date,distance)
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
