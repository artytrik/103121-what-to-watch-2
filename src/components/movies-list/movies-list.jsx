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
        const {name, previewImage, id, previewVideoLink} = movie;
        return <MovieCardWrapped
          id={i}
          key={id}
          name={name}
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
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
    isFavorite: PropTypes.bool,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    rating: PropTypes.number,
    released: PropTypes.number,
    runTime: PropTypes.number,
    scoresCount: PropTypes.number,
    starring: PropTypes.array,
    videoLink: PropTypes.string
  })).isRequired
};

export default MoviesList;
