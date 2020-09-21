import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let looping = () =>{

     return directors.map((number) =><div> {number.name}
     <ul><li>{number.movies}</li></ul>
     </div>)
    }
  return (
    <div>
    <h1>Directors Page</h1>
      {looping()}
    </div>
  );
}

export default Directors
