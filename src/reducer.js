const initialState = {
  genre: `All genres`,
  movies: [],
  initialMovies: []
};

const convertMovie = (movie) => {
  let convertedMovie = {};
  convertedMovie = {
    backgroundColor: movie.background_color,
    backgroundImage: movie.background_image,
    description: movie.description,
    director: movie.director,
    genre: movie.genre,
    id: movie.id,
    isFavourite: movie.is_favourite,
    name: movie.name,
    poster: movie.poster_image,
    preview: movie.preview_image,
    link: movie.preview_video_link,
    rating: movie.rating,
    date: movie.released,
    time: movie.run_time,
    scoresCount: movie.scores_count,
    actors: movie.starring,
    video: movie.video_link
  };
  return convertedMovie;
};

const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`films`)
      .then((response) => {
        const convertedMovies = response.data.map((movie) => convertMovie(movie));
        dispatch(ActionCreator.loadMovies(convertedMovies));
      });
  }
};

const getMovies = (genre, movies) => {
  if (genre === `All genres`) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

const ActionCreator = {
  loadMovies: (movies) => ({
    type: `LOAD_MOVIES`,
    payload: movies
  }),

  setGenre: (genre) => ({
    type: `SET_GENRE`,
    payload: genre
  }),

  getMoviesOnGenre: (genre) => ({
    type: `FILTER_MOVIES`,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_MOVIES`: return Object.assign({}, state, {
      movies: action.payload,
      initialMovies: action.payload
    });
    case `SET_GENRE`: return Object.assign({}, state, {
      genre: action.payload
    });
    case `FILTER_MOVIES`: return Object.assign({}, state, {
      movies: getMovies(action.payload, state.initialMovies),
      initialMovies: state.initialMovies
    });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
