class Comment < ActiveRecord::Base
  validates :user_id, :listing_id, :rating, :title, :body, presence: true
  validate :rating_within_limits?
  belongs_to :listing
  belongs_to :user

  def rating_within_limits?
    unless self.rating.between?(1,5)
      errors[:rating].push("Rating must be between 1 and 5")
    end
  end
end
