class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null:false
      t.text :description, null: false
      t.integer :user_id, null:false
      t.integer :price_per_day, null: false
      t.string :image_url
      t.float :lat, null: false
      t.float :long, null: false
      t.timestamps null: false
    end
    add_foreign_key :listings, :users
    add_index :listings, :id
  end
end
