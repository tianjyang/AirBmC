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
    render json: current_listing
  end

end
