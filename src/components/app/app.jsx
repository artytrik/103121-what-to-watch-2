import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {moviesList} = props;

  return <Main
    movies = {moviesList}
  />;
};
App.propTypes = {
  moviesList: PropTypes.array.isRequired
};

export default App;
