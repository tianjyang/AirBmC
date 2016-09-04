class Api::ReservationsController < ApplicationController
  before_action :ensure_logged_in, only:[:create, :index, :destroy]

  def create
    new_reservation = Reservation.new
    new_reservation.listing_id = params[:listing_id]
    new_reservation.start_date = params[:start_date]
    new_reservation.end_date = params[:end_date]
    new_reservation.user_id = current_user.id
    new_reservation.description = params[:description]
    if new_reservation.save
      render json: "confirmed booking!"
    else
      render json: new_reservation.errors.full_messages
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
    unless current_user
      render text: "You must be logged in!", status: :bad_request
    end
  end

  def destroy
    Reservation.find(params[:id].to_i).destroy
    render json: current_user.reservations
  end

end
