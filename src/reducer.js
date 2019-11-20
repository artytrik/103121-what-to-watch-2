import {moviesListData} from './mocks/films.js';

const initialState = {
  genre: `All genres`,
  movies: moviesListData
};

const getMovies = (genre, movies) => {
  if (genre === `All genres`) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: `SET_GENRE`,
    payload: genre
  }),

  getMoviesOnGenre: (genre) => ({
    type: `GET_MOVIES`,
    payload: getMovies(moviesListData, genre)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`: return Object.assign({}, state, {
      genre: action.payload
    });
    case `GET_MOVIES`: return Object.assign({}, state, {
      movies: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreator};
