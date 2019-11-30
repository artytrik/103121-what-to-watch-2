import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {GENRES_LIST} from '../../utils.js';
import withActiveItem from '../../hocs/with-active-item.jsx';

const MovieCardWrapped = withActiveItem(MovieCard);
class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.cardHeaderClickHandler = this.cardHeaderClickHandler.bind(this);
  }

  cardHeaderClickHandler() {
  }

  render() {
    const {movies} = this.props;

    return (<div className="catalog__movies-list">
      {movies.map((movie, i) => {
        const {name, preview, id, link} = movie;
        return <MovieCardWrapped
          id={i}
          key={id}
          name={name}
          preview={preview}
          link={link}
          isPlaying={false}
          cardHeaderClickHandler={this.cardHeaderClickHandler}
        />;
      })}
    </div>);
  }
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.oneOf(GENRES_LIST),
    preview: PropTypes.string,
    link: PropTypes.string
  })).isRequired
};

export default MoviesList;
