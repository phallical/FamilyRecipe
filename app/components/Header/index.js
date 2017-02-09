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
    return (
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/NewRecipe">New Recipe</Link>
          <Link to="/Search">Search</Link>
          <Link to="/Browse">Browse</Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
