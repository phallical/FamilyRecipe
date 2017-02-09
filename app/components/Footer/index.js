/**
*
* Footer
*
*/

import React from 'react';
import { Link } from 'react-router';
// import styled from 'styled-components';


class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer>
        <Link to="/ReportBug">Report a bug.</Link>
      </footer>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
