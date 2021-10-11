import React from 'react';

function Casts({ casts }) {
  return (
    <React.Fragment>
      <div className="lg:pl-10">
        <h1 className="font-bold mb-4">Casts</h1>
        {casts.map(cast => (
          <div key={cast.id}>
            <div className="p-6 shadow mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{cast.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Casts;
