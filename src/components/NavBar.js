import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={navbar}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>

      <NavLink
        to="/actors"
        exact
        style={navbar}
        activeStyle={{
          background: 'darkblue'
        }}
      >Actors</NavLink>

      <NavLink
        to="/directors"
        exact
        style={navbar}
        activeStyle={{
          background: 'darkblue'
        }}
      >Directors</NavLink>

      <NavLink
        to="/movies"
        exact
        style={navbar}
        activeStyle={{
          background: 'darkblue'
        }}
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;
