class ReadingSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_one :user
  has_one :reading
end
