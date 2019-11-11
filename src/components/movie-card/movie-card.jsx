import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({name, preview, cardHoverHandler, cardHeaderClickHandler}) => {
  return <article className="small-movie-card catalog__movies-card" onMouseOver={() => cardHoverHandler(name, preview)}>
    <div className="small-movie-card__image">
      <img src={preview} alt={name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="#" onClick={() => cardHeaderClickHandler()}>{name}</a>
    </h3>
  </article>;
};
MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  cardHoverHandler: PropTypes.func.isRequired,
  cardHeaderClickHandler: PropTypes.func.isRequired
};

export default MovieCard;
