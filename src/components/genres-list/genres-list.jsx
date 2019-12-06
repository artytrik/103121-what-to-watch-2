import React from 'react';
import PropTypes from 'prop-types';

class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onFilterClick = this.onFilterClick.bind(this);
  }

  getGenres() {
    const {initialMovies} = this.props;
    const genres = new Set();
    genres.add(`All genres`);
    initialMovies.forEach((movie) => {
      genres.add(movie.genre);
    });
    return [...genres];
  }

  onFilterClick(evt) {
    const {clickFilterHandler} = this.props;
    evt.preventDefault();

    clickFilterHandler(evt.target.textContent);
    this.setState({
      activeFilter: evt.target.textContent
    });
  }

  render() {
    return <ul className="catalog__genres-list">
      {this.getGenres().map((genre) => {
        const className = this.props.currentGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
        return (
          <li
            className={className}
            key={genre}>
            <a href="#" className="catalog__genres-link" onClick={this.onFilterClick}>{genre}</a>
          </li>
        );
      })}
    </ul>;
  }
}

GenresList.propTypes = {
  initialMovies: PropTypes.arrayOf(PropTypes.exact({
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    previewVideoLink: PropTypes.string,
    rating: PropTypes.number,
    released: PropTypes.number,
    runTime: PropTypes.number,
    scoresCount: PropTypes.number,
    starring: PropTypes.array,
    videoLink: PropTypes.string
  })).isRequired,
  clickFilterHandler: PropTypes.func,
  currentGenre: PropTypes.string.isRequired
};

export default GenresList;
