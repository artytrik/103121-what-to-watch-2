import React from 'react';
import PropTypes from 'prop-types';
import {moviesListData} from '../../mocks/films.js';
import {GENRES_LIST} from '../../utils.js';

class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: `All genres`
    };
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  getGenres() {
    const genres = new Set();
    genres.add(`All genres`);
    moviesListData.forEach((movie) => {
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
        const className = this.state.activeFilter === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
        return (
          <li
            className={className}
            key={genre}>
            <a href="#" className="catalog__genres-link" onClick={this.onFilterClick}>{genre}</a>
          </li>
        );
      })};
    </ul>;
  }
}

GenresList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.oneOf(GENRES_LIST),
    preview: PropTypes.string,
    link: PropTypes.string
  })).isRequired,
  clickFilterHandler: PropTypes.func
};

export default GenresList;
