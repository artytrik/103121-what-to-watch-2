import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import {Link} from 'react-router-dom';

const Main = (props) => {
  const {movies, initialMovies, clickFilterHandler, currentGenre,
    isAuthorizationRequired, userData, clickFavoriteHandler, activeMovie} = props;
  let currentMovie = {};
  const result = initialMovies.filter((movie) => movie.id === activeMovie);
  currentMovie = result.length > 0 ? result[0] : {};
  console.log(currentMovie);

  return <div className="main-wrapper">
      {activeMovie > 0 ? <section className="movie-card">
      <div className="movie-card__bg">
        <img src={currentMovie.previewImage} alt={currentMovie.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      {isAuthorizationRequired ?

        <header className="page-header">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <Link to={`/login`} className="user-block__link">Sign in</Link>
          </div>
        </header> :

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <Link to="/mylist">
              <div className="user-block__avatar">
                <img src={`https://htmlacademy-react-2.appspot.com${userData.avatarUrl}`} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </div>
        </header>}

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={currentMovie.posterImage} alt={currentMovie.name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
          <h2 className="movie-card__title">{currentMovie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{currentMovie.genre}</span>
              <span className="movie-card__year">{currentMovie.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              {
                currentMovie.isFavorite ?
                <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                  clickFavoriteHandler(activeMovie, !currentMovie.isFavorite);
                }}>
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                </button>
              :
              <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                clickFavoriteHandler(activeMovie, !currentMovie.isFavorite)}}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              }
            </div>
          </div>
        </div>
      </div>
    </section> : ``}

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          initialMovies={initialMovies}
          clickFilterHandler={clickFilterHandler}
          currentGenre={currentGenre}
        />

        <MoviesList
          movies={movies}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </div>;
};
Main.propTypes = {
  movies: PropTypes.array.isRequired,
  initialMovies: PropTypes.array.isRequired,
  clickFilterHandler: PropTypes.func,
  currentGenre: PropTypes.string.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  clickFavoriteHandler: PropTypes.func.isRequired,
  activeMovie: PropTypes.number.isRequired
};

export default Main;
