import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
       <Link to="/">Home</Link>
       <Link to="/movies">Movies</Link>
       <Link to="/directors">Directors</Link>
       <Link to="/actors">Actors</Link>
     </div>
  );
};

export default NavBar;
