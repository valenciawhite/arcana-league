class TarotCardSerializer < ActiveModel::Serializer
  attributes :id, :card_name, :image, :description
end
