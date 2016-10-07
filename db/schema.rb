# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161006235001) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "listing_id", null: false
    t.integer  "rating",     null: false
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "username"
  end

  add_index "comments", ["listing_id"], name: "index_comments_on_listing_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "listings", force: :cascade do |t|
    t.string   "title",         null: false
    t.text     "description",   null: false
    t.integer  "user_id",       null: false
    t.integer  "price_per_day", null: false
    t.string   "image_url"
    t.float    "lat",           null: false
    t.float    "long",          null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "make_model",    null: false
    t.integer  "num_seats",     null: false
    t.integer  "mpg",           null: false
    t.string   "thumb_url"
  end

  add_index "listings", ["id"], name: "index_listings_on_id", using: :btree

  create_table "reservations", force: :cascade do |t|
    t.integer  "user_id",                     null: false
    t.integer  "listing_id",                  null: false
    t.text     "description",                 null: false
    t.datetime "start_date",                  null: false
    t.datetime "end_date",                    null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "confirm",     default: false
    t.string   "thumb_url"
  end

  add_index "reservations", ["end_date"], name: "index_reservations_on_end_date", using: :btree
  add_index "reservations", ["id"], name: "index_reservations_on_id", using: :btree
  add_index "reservations", ["start_date"], name: "index_reservations_on_start_date", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["id"], name: "index_users_on_id", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  add_foreign_key "listings", "users"
  add_foreign_key "reservations", "listings"
end
