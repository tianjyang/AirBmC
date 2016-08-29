### Database Schema

**Users**  

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

has_many: listings  
has_many: reservations  
has_many: comments  

**Listings**  

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
pricer_per_day | integer   | not null
image_url   | string    |
lat         | float     | not null
long        | float     | not null

belongs_to: user  
has_many: reservations  

**Reservations**

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
listing_id  | integer   | not null, foreign key (references listings), indexed
description | string    | not null
start_date  | string    | not null
end_date    | string    | not null

belongs_to: user  
belongs_to: listing  

**Comments**

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
listing_id  | integer   | not null, foreign key (references listings), indexed
rating      | integer   | not null
title       | string    | not null
body        | text      | not null

belongs_to: user  
belongs_to: listing  
