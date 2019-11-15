import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = ({id, name, preview, link, cardHoverHandler, cardLeaveHandler, cardHeaderClickHandler, isPlaying}) => {
  return <article className="small-movie-card catalog__movies-card"
    onMouseEnter={() => cardHoverHandler(id, name, preview)}
    onMouseLeave={() => cardLeaveHandler()}>
    <div className="small-movie-card__image">
      <VideoPlayer
        src={link}
        poster={preview}
        isPlaying={isPlaying}
      />
      <img src={preview} alt={name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="#"
        onClick={() => cardHeaderClickHandler()}>{name}</a>
    </h3>
  </article>;
};
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  cardHoverHandler: PropTypes.func.isRequired,
  cardLeaveHandler: PropTypes.func.isRequired,
  cardHeaderClickHandler: PropTypes.func.isRequired
};

export default MovieCard;
