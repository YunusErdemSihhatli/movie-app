class GenresMovie < ApplicationRecord

  belongs_to :genre
  belongs_to :movie

  validates_presence_of :genre_id, movie_id

end
