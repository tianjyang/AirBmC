class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.text :description, null:false
      t.string :start_date, null:false
      t.string :end_date, null:false
      t.timestamps null: false
    end
    add_index :reservations, :id
    add_index :reservations, :start_date
    add_index :reservations, :end_date
    add_index :users, :id
    add_foreign_key :reservations, :users
    add_foreign_key :reservations, :listings
  end
end
