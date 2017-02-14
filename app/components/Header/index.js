/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
// import styled from 'styled-components';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const headerStyle = {
      background: "rgb(255,205,30)",
      padding: "15px"
    };
    const linkStyle = {
      color: "rgb(255,205,30)",
      textDecoration: "none",
      padding: "10px",
      margin: "15px",
      background: "rgb(0,0,0)"
    };

    return (
      <header style={headerStyle}>
        <nav>
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle} to="/NewRecipe">New Recipe</Link>
          <Link style={linkStyle} to="/Search">Search</Link>
          <Link style={linkStyle} to="/Browse">Browse</Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
