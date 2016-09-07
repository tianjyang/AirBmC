class ChangeDateFormatInListings < ActiveRecord::Migration
  def change
    drop_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.text :description, null:false
      t.datetime :start_date, null:false
      t.datetime :end_date, null:false
      t.timestamps null: false
    end

    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.text :description, null:false
      t.datetime :start_date, null:false
      t.datetime :end_date, null:false
      t.timestamps null: false
    end
    add_index :reservations, :id
    add_index :reservations, :start_date
    add_index :reservations, :end_date
    add_foreign_key :reservations, :listings
  end
end
