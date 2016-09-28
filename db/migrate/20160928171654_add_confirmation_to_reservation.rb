class AddConfirmationToReservation < ActiveRecord::Migration
  def change
    add_column :reservations, :confirm, :boolean, default: false
  end
end
