/**
*
* Footer
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router';
// import styled from 'styled-components';


class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

      const footerStyle = {
        position: "absolute",
        bottom: "0",
        width: "100%",
        background: "rgb(255,205,30)",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      };
      const linkStyle = {
        color: "rgb(255,205,30)",
        textDecoration: "none",
        padding: "10px",
        margin: "7.5px",
        background: "rgb(0,0,0)"
      };
    return (

      <Responsive minDeviceWidth={768} >
        <footer style={footerStyle}>
          <Link style={linkStyle} to="/ReportBug">Report a bug</Link>
        </footer>
      </Responsive>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
