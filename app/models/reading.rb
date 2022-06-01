class Reading < ApplicationRecord
  belongs_to :user
  belongs_to :tarot_card

  has_many :comments
  has_many :users, through: :comments
end
