import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies.genres);
  return (
    <div>
        <h1>Movies Page</h1>
        
          {movies.map((movie, i) => (<div key={i}>
            <h6>{movie.title}</h6>
            <p>{movie.time}</p>
            <ul>
              {movie.genres.map((genre, i) => (<li key={i}>{genre}</li>))}
            </ul>
            </div> ))}
          
        
    </div>
  );
};

export default Movies;
