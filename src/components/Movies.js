import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((e) => (
          <div >
              <p>Name: {e.title}</p>
              <p>Time: {e.time}</p>
              <ul>
                  {e.genres.map((e) =>  <li >{e}</li> )}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
