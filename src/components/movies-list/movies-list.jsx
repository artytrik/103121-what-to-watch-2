import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
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
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavourite: PropTypes.bool,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string,
    preview: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rating: PropTypes.number,
    date: PropTypes.number,
    time: PropTypes.number,
    scoresCount: PropTypes.number,
    actors: PropTypes.array,
    video: PropTypes.string
  })).isRequired
};

export default MoviesList;
