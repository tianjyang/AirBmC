class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    user = User.find_by_credentials(username,password)
    if user
      sign_in(user)
      render json: {username: user.username,logged_in: true}
    else
      render({json:[invalid credentials],status: 401})
    end
  end

  def destroy
    sign_out(current_user)
  end
end
