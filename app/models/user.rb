class User < ApplicationRecord
    has_many :readings, dependent: :destroy
    has_many :tarot_cards, through: :readings
   
end
