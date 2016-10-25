class Modifyingusertable < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :promotion, :boolean, default: false
  end
end
