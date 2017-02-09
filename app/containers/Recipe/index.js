/*
 *
 * Recipe
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

export class Recipe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet title="Recipe" meta={[ { name: 'description', content: 'Description of Recipe' },  ]}  />
        <Header />

        <Footer />
      </div>
    );
  }
}

Recipe.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Recipe);
