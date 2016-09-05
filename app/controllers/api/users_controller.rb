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
      render json: new_user.errors.full_messages, status:400
    end
  end
end
