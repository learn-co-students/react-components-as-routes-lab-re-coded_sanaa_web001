import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map(ele =>(
      <div>
         <h3>Name: {ele.name}</h3>
         <p>Movies: </p>
         {ele.movies.map(item => (
           <ul>
             <li>{item}</li>
           </ul>
         ))}
      </div>
  ))}
    </div>
  );
};

export default Actors;
