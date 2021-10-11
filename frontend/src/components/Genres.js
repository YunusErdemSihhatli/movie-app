import React from 'react';

function Genres({ genres }) {
  return (
    <React.Fragment>
      <div className="lg:pl-10">
        <h1 className="font-bold mb-4">Genres</h1>
        {genres.map(genre => (
          <div key={genre.id}>
            <div className="p-6 shadow mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{genre.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Genres;
