import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const App = (props) => {
  const {moviesList, clickFilterHandler, currentGenre} = props;

  return <Main
    movies = {moviesList}
    clickFilterHandler={clickFilterHandler}
    currentGenre={currentGenre}
  />;
};

const mapStateToProps = (state) => ({
  moviesList: state.movies,
  currentGenre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.getMoviesOnGenre(genre));
  }
});

App.propTypes = {
  moviesList: PropTypes.array.isRequired,
  clickFilterHandler: PropTypes.func
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
