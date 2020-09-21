import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let looping = () =>{

     return actors.map((number) =><div> {number.name}
     <ul><li>{number.movies}</li></ul>
     </div>)
    }
  return (
    <div>
    <h1>Actors Page</h1>
    {looping()}
    </div>
  );
};

export default Actors;
