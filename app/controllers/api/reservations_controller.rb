class Api::ReservationsController < ApplicationController
  before_action :ensure_logged_in, only:[:create, :index, :destroy]
  before_action :ensure_valid_dates, only:[:create]
  before_action :check_errors, only:[:create, :index, :destroy]

  def check_errors
    if @errors.length > 0
      render json: @errors, status: 400
    end
  end

  def create
    new_reservation = Reservation.new
    new_reservation.listing_id = params[:listing_id]
    new_reservation.start_date = params[:start_date]
    new_reservation.end_date = params[:end_date]
    new_reservation.user_id = current_user.id
    new_reservation.description = params[:description]
    new_reservation.thumb_url = Listing.find(params[:listing_id]).thumb_url
    if new_reservation.save
      render json: {result: "confirmed booking!"}
    else
      render json: new_reservation.errors.full_messages,status: 400
    end
  end

  def index
    if current_user.has_no_reservations?
      blank_res = Reservation.new(description:"No Reservations Yet!")
      render json: [blank_res]
    else
      render json: current_user.reservations
    end
  end

  def ensure_logged_in
    @errors ||= []
    unless current_user
      @errors << "You must be logged in!"
    end
  end

  def ensure_valid_dates
    @errors ||=[]
    begin
      end_date = Date.parse(params[:end_date])
      start_date = Date.parse(params[:start_date])
      if start_date > end_date
        @errors << "Start date must be before end date!"
      end

      if start_date < Date.today
        @errors << "Start date cannot be before today!"
      end
    rescue
      @errors << "Please enter a valid date"
    end
  end

  def destroy
    Reservation.find(params[:id].to_i).destroy
    render json: current_user.reservations
  end

end
