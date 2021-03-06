/*
 *
 * Search
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

export class Search extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    const containerStyle = {
      background: "url(http://h4z.it/Image/4a7cf5_1752846_1920.jpg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      overflow: "hidden"
    };
    return (
      <div style={containerStyle}>
        <Helmet
          title="Search"
          meta={[
            { name: 'description', content: 'Description of Search' },
          ]}
        />

        <Header />

        <main>
          <input type="radio" name="searchType" value="searchBar" />Search<br />
          <input type="radio" name="searchType" value="category" />Search By Category<br />


          <input type="text" name="searchTerm" />
          <select>
            <option value="">Meat</option>
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="pork">Pork</option>
            <option value="fish">Fish</option>
          </select>
        </main>

        <Footer />
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Search);
