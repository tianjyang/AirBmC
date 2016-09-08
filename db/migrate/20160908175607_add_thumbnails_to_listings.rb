class AddThumbnailsToListings < ActiveRecord::Migration
  def change
    add_column :listings, :thumb_url,:string
  end
end
