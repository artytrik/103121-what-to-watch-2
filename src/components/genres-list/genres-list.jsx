import React from 'react';
import {moviesListData} from './mocks/films.js';

class ListGenres extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter = `All genres`
    };
  }

  getGenres() {
    const genres = new Set(`All genres`);
    moviesListData.forEach((movie) => (
      genres.add(movie.genre)
    ));
    return genres;
  };

  onFilterClick(evt) {

  }

  render() {
    <ul className="catalog__genres-list">
      {this.getGenres().map((genre) => {
        const className = this.state.activeFilter === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
        return (
          <li
            className={className}
            key={genre}>
            <a href="#" className="catalog__genres-link" onClick={this.onFilterClick}>{genre}</a>
          </li>
        );
      })}
    </ul>
  }
}

export default ListGenres;
