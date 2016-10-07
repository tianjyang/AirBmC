class AddThumbnailToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :thumb_url, :string
  end
end
