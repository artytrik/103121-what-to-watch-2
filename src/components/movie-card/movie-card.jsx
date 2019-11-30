import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  render() {
    const {id, name, preview, link, cardHeaderClickHandler, onEnter, onLeave, isActive} = this.props;

    return <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        this.timer = setTimeout(onEnter, 1000);
      }}
      onMouseLeave={() => {
        clearTimeout(this.timer);
        onLeave();
      }}>
      <div className="small-movie-card__image">
        <VideoPlayer
          src={link}
          poster={preview}
          isPlaying={isActive}
        />
        <img src={preview} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#"
          onClick={() => cardHeaderClickHandler()}>{name}</a>
      </h3>
    </article>;
  }
};
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  cardHeaderClickHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
