class AddColumnsToListings < ActiveRecord::Migration
  def change
    add_column :listings, :make_model, :string, null: false
    add_column :listings, :num_seats, :integer, null: false
    add_column :listings, :mpg, :integer, null: false
  end
end
