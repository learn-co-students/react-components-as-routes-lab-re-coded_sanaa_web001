import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map((ele) => (
          <div>
           <h3>Title: {ele.title}</h3>
           <p>Time: {ele.time}</p>
           <p>Genres: </p>
           {ele.genres.map(item =>(
             <ul>
               <li>{item}</li>
             </ul>
           ))}
        </div>
      ))
      }
    </div>
  );
};

export default Movies;
