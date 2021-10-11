class Star < ApplicationRecord

  belongs_to :user
  belongs_to :star, polymorphic: true
  has_one :self_ref, class_name: self.class.to_s, foreign_key: :star_id
  has_one :movie, through: :self_ref, source: :star, source_type: Movie
  has_one :cast, through: :self_ref, source: :star, source_type: Cast

  validates_presence_of :user_id, :star_id, :star_type

end
