import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
      Home
      </NavLink>
      <NavLink
        to="/actors"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
      Actors
      </NavLink>
      <NavLink
        to="/movies"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
      Movies
      </NavLink>
      <NavLink
        to="/directors"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
      Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
