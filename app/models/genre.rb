class Genre < ApplicationRecord

  has_and_belongs_to_many :movies

  validates_presence_of :name

end
