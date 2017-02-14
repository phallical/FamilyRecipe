/*
 *
 * Browse
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

export class Browse extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    const containerStyle = {
      background: "url(http://h4z.it/Image/7210d0_-1002897_640.jpg)",
      minHeight: "50px",
      width: "auto"
    };

    return (
      <div style={containerStyle}>
        <Helmet
          title="Browse"
          meta={[
            { name: 'description', content: 'Description of Browse' },
          ]}
        />
        <Header />

        <main>lbdhjasgfldhasb</main>

        <Footer />
      </div>
    );
  }
}

Browse.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Browse);
