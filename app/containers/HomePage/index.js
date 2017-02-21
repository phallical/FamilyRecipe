/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
/*  constructor(props){
    super(props);
    this.state = {
      text:"this is some text",
      myName:""
    }
  };

  componentWillMount(){
    this.getData("luuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuke");
  };

  getData(myName){
    if (this.state.name == ""){
      this.setState({name:"luke"})
    }else{
      this.setState({name:"i love you"})
    }
  };
*/
  render() {

    const containerStyle = {
      background: "url(http://h4z.it/Image/fe7ea8_1372607_1920.jpg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      overflow: "hidden"
    };
    const mainStyle ={
      display: "flex",
      justifyContent: "center",
      height: "80vh"
    };
    const divStyle = {
      background: "rgba(0,0,0,.5)",
      color: "rgb(255,205,30)",
      margin: "auto",
      width:"70%",
      height: "50vh",
      textAlign: "center"
    };

    return (
      <div style={containerStyle}>
        <Header />

        <main style={mainStyle}>
  
          <div style={divStyle}>
            (our) Family Home Recipes☺
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
