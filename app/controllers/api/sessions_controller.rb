class Api::SessionsController < ApplicationController
  before_action :ensure_logged_in, only:[:index]

  def create
    username = params[:username]
    password = params[:password]
    user = User.find_by_credentials(username,password)
    if user
      sign_in(user)
      render json: {username: user.username,logged_in: true}
    else
      render json:["invalid credentials"],status: 401
    end
  end

  def destroy
    sign_out(current_user)
    render json: {username:"", logged_in: false}
  end

  def index
    if current_user.has_no_reservations?
      render json: "No Reservations Yet!"
    else
      render json: current_user.reservations
    end

  end

  def ensure_logged_in
    unless current_user
      render text: "You must be logged in!", status: :bad_request
    end
  end


end
