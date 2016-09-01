class Api::ListingsController < ApplicationController
  def index
    location = params[:location]
    criteria = params[:criteria]
    debugger
    puts "location is #{location}"
    puts "critiera is #{criteria}"

    render json: "you hit the index controller"
  end

end
