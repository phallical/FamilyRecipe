/*
 *
 * ReportBug
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

export class ReportBug extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    
      const containerStyle = {
        background: "url(http://h4z.it/Image/4fe5b7_-462576_1920.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        overflow: "hidden"
      };

    return (
      <div style={containerStyle}>
        <Helmet
          title="ReportBug"
          meta={[
            { name: 'description', content: 'Description of ReportBug' },
          ]}
        />

        <Header />
        <main>
          Title: <input type="text" /><br />
          No. of times bug was recreated: 1<input type="range" name="recurring" min="1" max="5" />5
          <br />
          Comments: <br />
          <textarea rows="5" cols="50" />

        </main>
        <Footer />
      </div>
    );
  }
}

ReportBug.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ReportBug);
