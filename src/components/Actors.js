import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((e) => (
          <div>
              <h3>Name: {e.name}</h3>
              <p>Movies:</p>
              <ul>
                  {e.movies.map((e) => <li >{e}</li> )}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Actors;
