### Database Schema
users:  
has_many: listings  
has_many: reservations  
has_many: comments  
t.string :username  
t.string :password_digest  
t.string :session_token  

listings:  
belongs_to: user  
has_many: reservations  
t.float :overall_rating  
t.integer :user_id  
t.string :title  
t.text :description  
t.string :image_url  
t.integer :price_per_day
t.float :lat  
t.float :long  

reservations:  
belongs_to: user  
belongs_to: listing  
t.integer :user_id  
t.integer :listing_id  
t.string :start_date  
t.string :end_date  
t.text :description  

t.comments:  
belongs_to: user  
belongs_to: listing  
t.integer :user_id  
t.integer :listing_id  
t.integer :rating  
t.string :title  
t.text :body  
