class Comment < ActiveRecord::Base
  validates :user_id, :listing_id, :rating, :title, :body, presence: true
  validate :rating_within_limits?
  belongs_to :listing
  belongs_to :user
  before_save :populate_username

  def populate_username
    self.username = User.find(self.user_id).username
  end

  def rating_within_limits?
    unless self.rating.between?(1,5)
      errors[:rating].push("Rating must be between 1 and 5")
    end
  end

  def self.find_by_user_listing(current_listing_id,current_user_id)
    Comment.where(<<-SQL,current_listing_id,current_user_id)
    listing_id = ? AND user_id = ?
    SQL
  end
end
