import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {GENRES_LIST} from '../../utils.js';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        name: ``,
        src: ``
      }
    };

    this.cardHoverHandler = this.cardHoverHandler.bind(this);
    this.cardHeaderClickHandler = this.cardHeaderClickHandler.bind(this);
  }

  cardHeaderClickHandler() {
  }

  cardHoverHandler(name, preview) {
    this.setState({
      movie: {
        name,
        preview
      }
    });
  }

  render() {
    const {movies} = this.props;

    return (<div className="catalog__movies-list">
      {movies.map((movie, i) => {
        const {name, preview} = movie;
        return <MovieCard
          key={`movie-${i}`}
          name={name}
          preview={preview}
          cardHoverHandler={this.cardHoverHandler}
          cardHeaderClickHandler={this.cardHeaderClickHandler}
        />;
      })}
    </div>);
  }
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.oneOf(GENRES_LIST).isRequired,
    preview: PropTypes.string.isRequired
  }))
};

export default MoviesList;
