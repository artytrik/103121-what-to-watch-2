import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import { ActionCreator } from '../../reducer.js';

const App = (props) => {
  const {moviesList} = props;

  return <Main
    movies = {moviesList}
  />;
};

const mapStateToProps = (state) => ({
  moviesList: state.movies
});

const mapDispatchToProps = (dispatch) = ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.getMoviesOnGenre(genre));
  }
});

App.propTypes = {
  moviesList: PropTypes.array.isRequired
};

export default App;
