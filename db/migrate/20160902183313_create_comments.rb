class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.integer :rating, null: false
      t.string :title, null: false
      t.text :body, null:false
      t.timestamps null: false
    end
    add_index :comments, :user_id
    add_index :comments, :listing_id
  end
end
