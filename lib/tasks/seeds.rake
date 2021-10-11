require 'faker'

namespace :seeds do

  desc "Seed data for cold start"
  task load: :environment do

    action = Genre.create!(name: 'Action')
    thriller = Genre.create!(name: 'Thriller')
    comedy = Genre.create!(name: 'Comedy')
    genres = [action, thriller, comedy]

    5.times do
      movie = Movie.create!(name: Faker::Movie.title)
      movie.genres << genres.sample

      3.times do
        cast = Cast.create!(name: Faker::Name.name)
        movie.casts << cast
      end

    end
  end

end
