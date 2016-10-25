class Api::SessionsController < ApplicationController
before_action :full_form, only:[:create]

  def create
    username = params[:username]
    password = params[:password]
    user = User.find_by_credentials(username,password)
    if user
      sign_in(user)
      render json: {username: user.username,
        firstname: user.first_name,
        lastname: user.last_name,
        logged_in: true}
    else
      errors = ["Invalid credentials"]
      render json: errors,status: 401
    end
  end

  def destroy
    sign_out(current_user)
    render json: {username:"", logged_in: false}
  end

  def full_form
    errors = []
    if params[:username] == ""
      errors.push("Username cannot be blank")
    end
    if params[:password] == ""
      errors.push("Password cannot be blank")
    end

    if errors.length >= 1
      render json: errors, status: 400
    end
  end


end
