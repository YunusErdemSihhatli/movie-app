import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Casts from './Casts';
import Genres from './Genres';

const GET_MOVIES = gql`
  query Movies {
    movies {
      id
      name
      genres {
        id
        name
      }
      casts {
        id
        name
      }
    }
  }
`;

function Movies({ selectMovie }) {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return(
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Movies</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.movies.map((movie) => (
              <div key={movie.id} className="group relative" onClick={selectMovie.bind(this, movie)} >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/movie.png"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full p-6"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {movie.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {movie.genres.map((genre) => (
                          <div>
                            {genre.name}
                          </div>
                        ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Movies;
