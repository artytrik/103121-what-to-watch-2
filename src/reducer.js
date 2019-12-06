const initialState = {
  genre: `All genres`,
  movies: [],
  initialMovies: [],
  isAuthorizationRequired: true,
  userData: {}
};

const convertKey = (key) => {
  const arr = key.split(`_`).map((word, ind) => ind === 0 ? word : word[0].toUpperCase() + word.slice(1));
  return arr.join(``);
};

const convertItem = (obj) => {
  let newObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[convertKey(key)] = obj[key];
    }
  }
  return newObj;
};
/* const convertMovie = (movie) => {
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
    previewImage: movie.previewImage_image,
    previewVideoLink: movie.previewImage_video_link,
    rating: movie.rating,
    date: movie.released,
    time: movie.run_time,
    scoresCount: movie.scores_count,
    actors: movie.starring,
    video: movie.video_link
  };

};*/

const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`films`)
      .then((response) => {
        const convertedMovies = response.data.map((movie) => convertItem(movie));
        dispatch(ActionCreator.loadMovies(convertedMovies));
      });
  },
  login: (email, password) => (dispatch, _, api) => {
    return api.post(`login`, {email, password})
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.setAuthorization(false));
          dispatch(ActionCreator.enterUser(convertItem(response.data)));
        }
      })
      .catch((_err) => {});
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
  }),

  setAuthorization: (boolean) => ({
    type: `SET_AUTHORIZATION`,
    payload: boolean
  }),

  enterUser: (userData) => ({
    type: `GET_USER`,
    payload: userData
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
    case `SET_AUTHORIZATION`: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case `GET_USER`: return Object.assign({}, state, {
      userData: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
