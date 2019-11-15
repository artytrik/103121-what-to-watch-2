import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {GENRES_LIST} from '../../utils.js';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1,
      movie: {
        name: ``,
        src: ``
      }
    };

    this.cardHoverHandler = this.cardHoverHandler.bind(this);
    this.cardHeaderClickHandler = this.cardHeaderClickHandler.bind(this);
    this.cardLeaveHandler = this.cardLeaveHandler.bind(this);
  }

  cardHeaderClickHandler() {
  }

  cardHoverHandler(id, name, preview) {
    this.setState({
      movie: {
        name,
        preview
      }
    });
    this.timer = setTimeout(() => {
      this.setState({activeCard: id});
    }, 1000);
  }

  cardLeaveHandler() {
    this.state = {
      activeCard: -1,
      movie: {
        name: ``,
        src: ``
      }
    };
    clearTimeout(this.timer);
  }

  render() {
    const {movies} = this.props;

    return (<div className="catalog__movies-list">
      {movies.map((movie, i) => {
        const {name, preview, id, link} = movie;
        return <MovieCard
          id={i}
          key={id}
          name={name}
          preview={preview}
          link={link}
          cardHoverHandler={this.cardHoverHandler}
          cardHeaderClickHandler={this.cardHeaderClickHandler}
          cardLeaveHandler={this.cardLeaveHandler}
          isPlaying={i === this.state.activeCard}
        />;
      })}
    </div>);
  }
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.oneOf(GENRES_LIST).isRequired,
    preview: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }))
};

export default MoviesList;
