import React from 'react';
import { movies } from '../data';

const Movies = () => {
 let looping = () =>{

   return movies.map((number) =><div> {number.title} {number.time}
   <ul><li>{number.genres}</li></ul>
   </div>)
  }
  return (
    <div>
       <h1>Movies Page</h1>
       {looping()}
    </div>
  );
};

export default Movies;
