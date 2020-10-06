import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((element) => (
          <div >
              <p>Name: {element.title}</p>
              <p>Time: {element.time}</p>
              <ul>
                  {element.genres.map((e) => (
                      <li >{e}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;