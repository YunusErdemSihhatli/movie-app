class Mutations::AddStar < Mutations::BaseMutation
  argument :user, User, required: true
  argument :cast, Cast, required: false
  argument :movie, Movie, required: false

  field :user, Types::UserType, null: false
  field :errors, [String], null: false

  def resolve(user:, cast:, movie:)
    if cast.present?
      user.casts << cast
    end
    if movie.present?
      user.movies << movie
    end
    {
      user: user,
      errors: []
    }
  end
end
