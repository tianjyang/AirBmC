class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in, only:[:create]

  def index
    current_listing = Listing.find(params[:id])
    render json: current_listing.comments
  end

  def create
    new_comment = Comment.new
    new_comment.user_id = current_user.id
    new_comment.body = params[:body]
    new_comment.title = params[:title]
    new_comment.rating = params[:rating].to_i
    new_comment.listing_id = params[:listing_id].to_i

    if new_comment.save
      render json: [new_comment]
    else
      render json: new_comment.errors.full_messages,status: 400
    end
  end

  def ensure_logged_in
    unless current_user
      render json:["You must be logged in!"],status: 401
    end
  end
end
