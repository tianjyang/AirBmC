class Api::UsersController < ApplicationController
  def create
    username = params[:username]
    password = params[:password]
    first_name = params[:firstname]
    last_name = params[:lastname]
    email = params[:email]
    if params[:promotions] == "on"
      promotion = true
    else
      promotion = false
    end

    new_user = User.new
    new_user.username = username
    new_user.password = password
    new_user.first_name = first_name
    new_user.last_name = last_name
    new_user.email = email
    new_user.promotion = promotion
    if new_user.save
      sign_in(new_user)
      reply = {username: username, logged_in: true}
      render json: reply
    else
      render json: new_user.errors.full_messages, status:400
    end
  end
end
