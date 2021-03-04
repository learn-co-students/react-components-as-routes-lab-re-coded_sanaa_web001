import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(e => {
        return (
          <div key={e.time}>
            {e.title}
            {e.time}
            <ul>{e.genres.map(e => <li>{e}</li>)}</ul>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Movies;
