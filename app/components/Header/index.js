/**
*
* Header
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router';
// import styled from 'styled-components';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {menuOpen:false};
  };

  handleMenu() {
    if(this.state.menuOpen == false){
      this.setState({menuOpen:true});
    }else{
    this.setState({menuOpen:false});
    }
  };

  renderMenu(){
    const navStyleMobile = {
      display: "flex",
      flexDirection: "column"
    };
    const linkStyle = {
      color: "rgb(255,205,30)",
      textDecoration: "none",
      padding: "10px",
      margin: "15px",
      background: "rgb(0,0,0)"
    };

    if (this.state.menuOpen){
      return (
        <nav style={navStyleMobile}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/Search">Search</Link>
        <Link style={linkStyle} to="/Browse">Browse</Link>
        <Link style={linkStyle} to="/ReportBug">Report a bug</Link>
        </nav>
      );
    }
  };

  componentWillMount(){
/*
    var aString = "this is a string";
    var anInt = 2;
    var anArray = [0,1,2,3,4];
    var aBool = false;
    var arrayOfStrings = ["this", "is", "array", "of", "strings"];
    var anObject = {fabric:"denim", amount:4};
    var arrayOfObjects = [{fabric:"denim", amount:4},{fabric:"satin", amount:6}];

    if (anArray[0] == 0 || anInt == 2){
      console.log(true);
    }else{
      console.log(false);
    }

    for (var i = -1; i < anArray.length; ++i){
      if (anArray[i] != 2){
        aBool = true;
        console.log(anArray[i] + " : " + aBool);
      }else{
        aBool = false;
        console.log(anArray[i] + " : " + aBool);
      }
    }
    //console.log(JSON.stringify(arrayOfObjects));
*/
  };


  render() {

    const headerStyle = {
      background: "rgb(255,205,30)",
      padding: "15px"
    };
    const navStyle = {
      display: "flex",
      flexDirection: "row"
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
        <Responsive minDeviceWidth={768} >
          <nav style={navStyle}>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/NewRecipe">New Recipe</Link>
            <Link style={linkStyle} to="/Search">Search</Link>
            <Link style={linkStyle} to="/Browse">Browse</Link>
          </nav>
        </Responsive>

        <Responsive maxDeviceWidth={767} >
          <nav>
            <a onClick={() => this.handleMenu()} href="#"><img src="http://h4z.it/Image/5a9808_burger.png" /></a>
            {this.renderMenu()}
          </nav>
        </Responsive>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
