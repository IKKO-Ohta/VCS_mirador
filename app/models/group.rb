class Group < ApplicationRecord
  has_many :memberships
  has_many :users, :through => :memberships

  def follow(other_user)
    membership.create(followed_id: other_user.id)
  end
  def unfollow
  end
end
