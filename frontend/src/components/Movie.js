import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Casts from './Casts';
import Genres from './Genres';

const GET_MOVIE = gql`
  query Movie($id: ID!) {
    movie(id: $id) {
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

function Movie({ movie, selectMovie }) {
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: movie.id }
  });

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return(
    <React.Fragment>
      <div className="flex flex-wrap my-4">
        <button
          className="bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
          onClick={selectMovie.bind(this, null)}>
            Back
        </button>
      </div>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 my-4">{data.movie.name}</h2>
      <div className="flex flex-wrap items-start mb-4">
        <div className="lg:w-1/4 w-full rounded text-center">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src="/movie.png"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full p-6"
            />
          </div>
        </div>
        <div className="pox-4 flex-1 w-full">
          <Genres genres={data.movie.genres} />
        </div>
        <div className="pox-4 flex-1 w-full">
          <Casts casts={data.movie.casts} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Movie;
