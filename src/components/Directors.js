import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
     <h1>Directors Page</h1>
     {directors.map((e) => (
         <div>
             <p>Name: {e.name}</p>
             <ul>
                 {e.movies.map((e) => <li >{e}</li> )}
             </ul>
         </div>
     ))}
   </div>
  );
}

export default Directors
