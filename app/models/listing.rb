class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :reservations
  has_many :comments
  validates :title, :description, :user_id, :price_per_day, :lat, :long, presence: true

  def self.find_by_max_price(arg)
    self.where(" price_per_day <= ? ",arg)
  end

  def self.find_by_min_price(arg)
    self.where(" price_per_day >= ? ",arg)
  end

  def self.find_by_distance(lat,long,distance)
    delta_lat = (distance/2.0)*(1/68.792)
    min_lat = lat-delta_lat
    max_lat = lat+delta_lat
    lat_radians = lat*Math::PI/180
    delta_long = (Math::PI * 3959.0 * Math.cos(lat_radians))/180.0
    min_long = long-delta_long
    max_long = long+delta_long
    self.find_within_bounds(min_lat,max_lat,min_long,max_long)
  end

  def self.find_within_bounds(min_lat,max_lat,min_long, max_long)
    self.where(<<-SQL,min_lat, max_lat, min_long, max_long)
    (lat >= ?) AND (lat <= ?) AND long >= ? AND long <= ?
    SQL
  end

  def self.find_by_date(lat,long,start_date, end_date)
    all_results = self.find_by_distance(lat,long,10)
    output = []
    all_results.each do |listing|
      conflicts = listing.reservations.any? do |reservation|
        reservation.conflict_with_date?(start_date, end_date)
      end
      debugger
      output << listing unless conflicts
    end
    output
  end

  def date_conflict?(start_date, end_date)
    output = self.reservations.any? do |reservation|
      reservation.conflict_with_date?(start_date, end_date)
    end

    output

  end
end
