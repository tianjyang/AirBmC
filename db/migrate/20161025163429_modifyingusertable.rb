class Modifyingusertable < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string, default: ""
    add_column :users, :last_name, :string, default: ""
    add_column :users, :email, :string, default: ""
    add_column :users, :promotion, :boolean, default: false
  end
end
