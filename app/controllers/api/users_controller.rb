class Api::UsersController < ApplicationController
  def create
    username = params[:username]
    password = params[:password]
    new_user = User.new
    new_user.username = username
    new_user.password = password
    if new_user.save
      sign_in(new_user)
      reply = {username: username, logged_in: true}
      render json: reply
    else
      reply = [new_user.errors]
      render json: reply
    end
  end
end
