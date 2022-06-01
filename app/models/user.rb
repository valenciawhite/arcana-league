class User < ApplicationRecord
    validates :username, presence: true 
    has_secure_password
    
    has_many :readings, dependent: :destroy
    # has_many :comments
    has_many :tarot_cards, through: :readings
   
end
