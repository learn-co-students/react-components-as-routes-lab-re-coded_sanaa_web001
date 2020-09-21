import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>

      <h1>Movies Page</h1>
      { movies.map((movie) => {
        return (
          <div>
          <h4>title : {movie.title} time : {movie.time}</h4>
          <ul>

            {movie.genres.map((gener) => <li>{gener}</li>)}


          </ul>
          </div>
        )
      }
      )
      }

    </div>
  );
};

export default Movies;
