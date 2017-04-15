class Comment < ApplicationRecord
  belongs_to :book
  default_scope -> { order(created_at: :desc) }
  validates :book_id, presence: true
  validates :content, presence: true, length: { maximum: 140 }
end
