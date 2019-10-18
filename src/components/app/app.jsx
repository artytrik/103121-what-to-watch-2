import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';
import {GENRES_LIST} from '../../utils.js';

export const App = (props) => {
  const {moviesList} = props;

  return <Main movies = {moviesList}/>;
};
App.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.oneOf(GENRES_LIST).isRequired
  }))
};
