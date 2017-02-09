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
    return (
      <div>
        <Helmet
          title="NewRecipe"
          meta={[
            { name: 'description', content: 'Description of NewRecipe' },
          ]}
        />
        <Header />

        <main>
          <table id="newRecipe">
            <tr>
              <th>Qty</th>
              <th>Measurement</th>
              <th>Ingredient</th>
            </tr>

            <tr>
              <td><input type="text" name="qty" />...</td>
              <td><input type="text" name="measure"/>...</td>
              <td><input type="text" name="ingredient"/>...</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
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
