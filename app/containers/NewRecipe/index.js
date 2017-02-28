/*
 *
 * NewRecipe
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

export class NewRecipe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={
      dishName:"",
      author:"",
      difficulty:0,
      timeReqHrs:0,
      timeReqMins:0,
      ingredients:[{measurement:"", qty:"", ingredient:"", ingredientType:""}],
      instructions:""
    };
  };

  dishNameHandler = (event) => {
    this.setState({
      dishName:event.target.value
    })
  };

  authorHandler = (event) => {
    this.setState({
      author:event.target.value
    })
  };

  difficultyHandler = (event) => {
    this.setState({
      difficulty:event.target.value
    })
  };

  timeReqHrsHandler = (event) => {
    this.setState({
      timeReqHrs:event.target.value
    })
  };

  timeReqMinsHandler = (event) => {
    this.setState({
      timeReqMins:event.target.value
    })
  };
//-------------------------------------------------------
  measurementHandler = (event, index) => {
    var array=this.state.ingredients;
    array[index].measurement = event.target.value;
    this.setState({
        ingredients:array
    })
    this.rowCheck();
  };

  qtyHandler = (event, index) => {
    var array=this.state.ingredients;
    array[index].qty = event.target.value;
    this.setState({
        ingredients:array
    })
    this.rowCheck();
  };

  ingredientHandler = (event, index) => {
    var array=this.state.ingredients;
    array[index].ingredient = event.target.value;
    this.setState({
        ingredients:array
    })
    this.rowCheck();
  };

  ingredientTypeHandler = (event, index) => {
    var array=this.state.ingredients;
    array[index].ingredientType = event.target.value;
    this.setState({
        ingredients:array
    })
    this.rowCheck();
  };
  //-------------------------------------------------------------------

  instructionsHandler = (event) => {
    this.setState({
      instructions:event.target.value
    })
  };

  rowCheck = () => {
    var array = this.state.ingredients;
    if (array[array.length - 1].qty != "" &&
      array[array.length - 1].ingredient != "" &&
      array[array.length - 1].ingredientType != "" &&
      array[array.length - 1].measurement != ""){
      array.push({measurement:"", qty:"", ingredient:"", ingredientType:""});
      this.setState({
        ingredients:array
      })
    }
  };

  storeRecipe = () => {
    fetch("http://localhost:8000/storeRecipe", {
    method:"post",
    body:JSON.stringify({
      dishName:this.state.dishName,
      author:this.state.author,
      difficulty:this.state.difficulty,
      timeReqHrs:this.state.timeReqHrs,
      timeReqMins:this.state.timeReqMins
    })
  })
    .then(function(Response){
      return Response.json();
    })
    .then(function(json) {
      if (json == 1) {alert("hi")}
    })
  };

  render() {

    const containerStyle = {
      background: "url(http://h4z.it/Image/7857e4_-115800_1280.jpg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      overflow: "hidden"
    };
    const mainStyle ={
      display: "flex",
      justifyContent: "center",
      height: "90vh"
    };
    const divStyle = {
      background: "rgba(255, 255, 255, .8)",
      color: "rgb(0,0,0)",
      margin: "auto",
      width: "90%",
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      padding: "15px"

      //shiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit
      //i hate css. eat dicks css.
    };
    const recipeInfo = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    };
    const tableBorders = {
      border: "1px solid rgb(0,0,0)"
    };

    return (
      <div style={containerStyle}>
        <Helmet
          title="NewRecipe"
          meta={[
            { name: 'description', content: 'Description of NewRecipe' },
          ]}
        />
        <Header />

        <main style={mainStyle}>
          <div style={divStyle}>
              <div style={recipeInfo}>
                <label for="dishName">Dish Name:</label> <input type="text" name="dishName" value={this.state.dishName} onChange={this.dishNameHandler}/>&nbsp;
                <label for="difficulty">Easy</label><input type="range" name="difficulty" value={this.state.difficulty} onChange={this.difficultyHandler} min="1" max="10" /><label for="difficulty">Difficult</label>
              </div>
              <div style={recipeInfo}>
                <label for="author">Author:</label><input type="text" name="author" value={this.state.author} onChange={this.authorHandler} />
                <label for="hour">Hours:</label><input type="number" name="hour" value={this.state.timeReqHrs} onChange={this.timeReqHrsHandler} />
                <label for="mins">Mins:</label><input type="number" name="mins" value={this.state.timeReqMins} onChange={this.timeReqMinsHandler} />
              </div>

             <br /> <br />

            <table id="newRecipe">
              <tr>
                <th>Qty</th>
                <th>Measurement</th>
                <th>Ingredient</th>
                <th>Ingredient Type</th>
              </tr>

              {this.state.ingredients.map((ingredient,i) => (
                <tr key={i}>
                  <td><input type="text" name="qty" value={ingredient.qty} style={tableBorders} onChange={this.qtyHandler} /></td>
                  <td><input type="text" name="measure" value={ingredient.measurement} style={tableBorders} onChange={this.measurementHandler} /></td>
                  <td><input type="text" name="ingredient" value={ingredient.ingredient} style={tableBorders} onChange={this.ingredientHandler} /></td>
                  <td><input type="text" name="ingredientType" value={ingredient.ingredientType} style={tableBorders} onChange={this.ingredientTypeHandler} /></td>
                </tr>
              ))}

            </table>
            <br />

            <textarea rows="12" cols="75" style={tableBorders} onChange={this.instructionsHandler}>
              Place all directions here.
            </textarea>

            <a href="#" onClick={() => this.storeRecipe()} >submit</a>

          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

NewRecipe.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(NewRecipe);
