module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # /movies
    field :movies, [Types::MovieType], null: false

    def movies
      Movie.all
    end

    # /movie/:id
    field :movie, Types::MovieType, null: false do
      argument :id, ID, required: true
    end

    def movie(id:)
      Movie.find(id)
    end

    # /casts
    field :casts, [Types::CastType], null: false

    def casts
      Cast.all
    end

    # /cast/:id
    field :cast, Types::CastType, null: false do
      argument :id, ID, required: true
    end

    def cast(id:)
      Cast.find(id)
    end

  end
end
