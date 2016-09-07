# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "guest", password: "password")
User.create!(username: "Wimbledon Crumplehorn", password: "password")
User.create!(username: "Beetlejuice Clombyclomp", password: "password")
User.create!(username: "Johnnycash Banglesnatch", password: "password")
User.create!(username: "Oscarbait Cuckatoo", password: "password")
User.create!(username: "Buckingham Frumblesnatch", password: "password")
User.create!(username: "Snorkeldink Crackersprout", password: "password")
User.create!(username: "Bentobox Crimpysnitch", password: "password")
User.create!(username: "Barnoldswick Crumplesack", password: "password")
User.create!(username: "Snozzlebert Kryptonite", password: "password")
User.create!(username: "ManyRes", password: "password")


Listing.create!(title:"Experience Embarcadero!",
description:"I have a Tesla Model S which I hardly use. I am open to letting people use this to commute around the bay area. It is important to remember that this car has limited range and will require a long time to recharge",
user_id:2,
price_per_day:120,
image_url:"http://placehold.it/1440x500",
lat:37.7936684,
long:-122.3957547,
make_model: "Tesla Model S",
num_seats: 5,
mpg: 90)

Listing.create!(title:"Tour the Coast in Style",
description:"Ferrari California. Perfect vehicle for a drive up the coast to Napa Valley. 10000 dollar deposit required, and pictures will be taken of the car before and after rental.",
user_id:2,
price_per_day:500,
image_url:"http://placehold.it/1440x500",
lat:37.7899936,
long:-122.4669532,
make_model: "Ferrari California",
num_seats: 4,
mpg: 23)

Listing.create!(title:"Day Use of Car",
 description:"I am willing to let people use my Toyota Camry while I am at work. Renter must return it to the same lot where it was picked up by 7pm. Has a large trunk for and can fit many items in it. Conveniently located next to Trader Joes and Bed Bath and Beyond.",
user_id:3,
price_per_day:20,
image_url:"http://placehold.it/1440x500",
lat:37.7623493,
long:-122.4191679,
make_model: "Toyota Camry",
num_seats: 5,
mpg: 33)

Listing.create!(title:"Car Close to BART Station",
description:"Available for rent is a Honda Civic. This was my son's car and he has no need for it while he is in college. Feel free to take as long as a road trip as you would like! I can suggest great attractions if that interests you.",
user_id:4,
price_per_day:35,
image_url:"http://placehold.it/1440x500",
lat:37.7601801,
long:-122.4011097,
make_model: "Honda Civic",
num_seats: 5,
mpg: 44)

Listing.create!(title:"Large SUV Available",
 description:"I have a Honda Pilot which is perfect for snowboarding vacations or outdoor trips. Before I broke my leg in that skiing accident, I used this car for many mountain biking trips and simply cant bring myself to sell it with all the memories I have in it.",
user_id:5,
price_per_day:70,
image_url:"http://placehold.it/1440x500",
lat:37.745524,
long:-122.4583201,
make_model: "Honda Pilot",
num_seats: 8,
mpg: 27)

Listing.create!(title:"Car for Rent",
description:"I have a reliable car which has plenty of space for your daily chores. It's a Toyota Camry",
user_id:6,
price_per_day:30,
image_url:"http://placehold.it/1440x500",
lat:37.7664302,
long:-122.3899747,
make_model: "Toyota Camry",
num_seats: 5,
mpg: 33)

Listing.create!(title:"Car for Rent",
description:"Hatchback for rent, Volkswagen GTI. Roomy despite it's smaller size!",
user_id:7,
price_per_day:50,
image_url:"http://placehold.it/1440x500",
lat:37.77,
long:-122.386,
make_model: "Volkswagen GTI",
num_seats: 5,
mpg: 32)

Listing.create!(title:"If You're Looking for a Fast Car...",
description:"Look no further! I have a weekend warrior that is available for use. It is a hardtop BMW Z4 M.",
user_id:7,
price_per_day:60,
image_url:"http://placehold.it/1440x500",
lat:37.7,
long:-122.42,
make_model: "BMW Z4 M",
num_seats: 2,
mpg: 20)

Listing.create!(title:"Mazda Miata Convertible",
description:"This car is what California is all about. Enjoy the Pacific Coast Highway in what is a fun easy handling little roadster.",
user_id:8,
price_per_day:60,
image_url:"http://placehold.it/1440x500",
lat:37.712,
long:-122.43,
make_model: "Mazda MX-5",
num_seats: 2,
mpg: 36)


Listing.create!(title:"Camry for Rent",
description:"Daughter is off at College. Anything goes in this car.",
user_id:7,
price_per_day:30,
image_url:"http://placehold.it/1440x500",
lat:37.8,
long:-122.422,
make_model: "Toyota Camry",
num_seats: 5,
mpg: 33)


Reservation.create!(user_id: 2, listing_id: 3,description: "Day Trip to Napa",
start_date: "2016/10/1",end_date: "2016/10/3")
Reservation.create(user_id: 4, listing_id: 3,description: "For Errands Around Town",
start_date: ("2016/10/8"),end_date: ("2016/10/10"))
Reservation.create(user_id: 11, listing_id: 4,description: "Pick Up Mom",
start_date: ("2016/10/15"),end_date: ("2016/10/17"))
Reservation.create(user_id: 11, listing_id: 5,description: "Beach Trip",
start_date: ("2016/10/22"),end_date: ("2016/10/23"))
Reservation.create(user_id: 11, listing_id: 8,description: "Weekend Drive Along Skyline",
start_date: ("2016/10/29"),end_date: ("2016/10/30"))
Reservation.create(user_id: 11, listing_id: 7,description: "Date Night",
start_date: ("2016/11/1"),end_date: ("2016/11/2"))
