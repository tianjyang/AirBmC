class Api::UsersController < ApplicationController
  def create
    username = params[:user][:username]
    password = params[:user][:password]
    new_user = User.new
    new_user.username = username
    new_user.password = password
    if new_user.save
      render json: {username: username, logged_in: true}
    else
      render json: {new_user.errors}
    end
  end
end
