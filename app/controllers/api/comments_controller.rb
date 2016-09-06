class Api::CommentsController < ApplicationController
  def index
    current_listing = Listing.find(params[:id])
    render json: current_listing.comments
  end
end
