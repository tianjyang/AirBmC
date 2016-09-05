class Api::SessionsController < ApplicationController


  def create
    username = params[:username]
    password = params[:password]
    user = User.find_by_credentials(username,password)
    if user
      sign_in(user)
      render json: {username: user.username,logged_in: true}
    else
      render json: errors.full_messages,status: 401
    end
  end

  def destroy
    sign_out(current_user)
    render json: {username:"", logged_in: false}
  end



end
