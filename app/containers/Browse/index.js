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

  constructor(props){
    super(props);
    this.state = {
      recipes:[
        {Dish:"chicken poopasaurus1", Author: "Jane Doe", Difficulty: 2, Time_Req: "3 hours"},
        {Dish:"chicken poopasaurus2", Author: "Jane Doe", Difficulty: 2, Time_Req: "3 hours"},
        {Dish:"chicken poopasaurus3", Author: "Jane Doe", Difficulty: 2, Time_Req: "3 hours"}
      ]
    }
  };

  render() {
    const tableStyle = {
      background: "rgba(0,0,0,.5)",
      color: "rgb(255,205,30)",
      margin: "auto",
      width:"90%",
      height: "50vh",
      textAlign: "center",
      marginBottom: "100px",
      marginTop: "50px"
    };

    const rowStyle = {
      border: "1px solid rgb(255,205,30)"
    };

    const containerStyle = {
      background: "url(http://h4z.it/Image/7210d0_-1002897_640.jpg)",
      minHeight: "100vh",
      maxHeight: "100vh",
      overflow: "auto",
      width: "auto",
      backgroundRepeat: "repeat"
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

        <main>
          <table style={tableStyle}>
            <tr style={rowStyle}>
              <th>Dish</th>
              <th>Author</th>
              <th>Difficulty</th>
              <th>Time req.</th>
            </tr>
            {this.state.recipes.map((recipe,i) => (
              <tr style={rowStyle} key={i}>
                <td>{recipe.Dish}</td>
                <td>{recipe.Author}</td>
                <td>{recipe.Difficulty}</td>
                <td>{recipe.Time_Req}</td>
              </tr>
            ))}
          </table>
        </main>

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
