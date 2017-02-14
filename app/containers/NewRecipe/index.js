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
      flexDirection: "row",
      padding: "15px"

      //shiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit
      //i hate css. eat dicks css.
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
            <table id="newRecipe">
              <tr>
                <th>Qty</th>
                <th>Measurement</th>
                <th>Ingredient</th>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity" style={tableBorders} /></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity" style={tableBorders} /></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity" style={tableBorders} /></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity"  style={tableBorders}/></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity" style={tableBorders} /></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity"  style={tableBorders}/></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity" style={tableBorders} /></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

              <tr>
                <td><input type="text" name="qty" value="quantity" style={tableBorders} /></td>
                <td><input type="text" name="measure" value="measure" style={tableBorders}/></td>
                <td><input type="text" name="ingredient" value="ingredient" style={tableBorders}/></td>
              </tr>

            </table>
            <br />

            <textarea rows="12" cols="75" style={tableBorders}>
              Place all directions here.
            </textarea>

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
