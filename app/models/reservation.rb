class Reservation < ActiveRecord::Base
  belongs_to :user
  belongs_to :listing
  validates :user_id, :listing_id, :description, :start_date, :end_date, presence: true
  validate :renter_isnt_listing_owner
  validate :no_conflicts
  before_save :convert_dates

  def convert_dates
    self.start_date = Date.parse(self.start_date)
    self.end_date = Date.parse(self.end_date)
  end

  def renter_isnt_listing_owner
    listing = Listing.find(listing_id)
    if listing.user.id == user_id
      errors[:reservation].push("Cannot reserve your own listing!")
    end
  end

  def no_conflicts
    all_reservations = Reservation.where("listing_id = ?",self.listing_id)
    conflict_check = all_reservations.any? do |el|
      self.reservation_conflict?(el)
    end
    if conflict_check
      errors[:reservations].push("conflict with existing reservation!")
    end
  end

  def reservation_conflict?(reservation2)
    reservation1 = self
    start_date1 = reservation1.start_date
    end_date1 = reservation1.end_date
    start_date2 = reservation2.start_date
    end_date2 = reservation2.end_date
    check_array = []
    check_array[0] = start_date1.between?(start_date2,end_date2)
    check_array[1] = end_date1.between?(start_date2,end_date2)
    check_array[2] = start_date2.between?(start_date1,end_date1)
    check_array[3] = end_date2.between?(start_date1,end_date1)
    check_array.any?{|x| x }
  end
end
