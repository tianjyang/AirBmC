class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in, only:[:create]

  def index
    current_listing = Listing.find(params[:id])
    render json: current_listing.comments
  end
end
