module Types
  class MovieType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :casts, [Types::CastType], null: true
    field :genres, [Types::GenreType], null: true
  end
end
