class CastsMovie < ApplicationRecord

  belongs_to :cast
  belongs_to :movie

  validates_presence_of :cast_id, movie_id

end
