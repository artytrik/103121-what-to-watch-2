import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({name, preview, onMovieCardFocus}) => {
  return <article className="small-movie-card catalog__movies-card" key={name}>
    <div className="small-movie-card__image">
      <img src={preview} alt={name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="#" onFocus={onMovieCardFocus}>{name}</a>
    </h3>
  </article>;
};
MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onMovieCardFocus: PropTypes.func.isRequired
};

export default MovieCard;
