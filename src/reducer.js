const initialState = {
  genre: `All genres`,
  movies: [],
  initialMovies: [],
  isAuthorizationRequired: true,
  userData: {},
  favorite: [],
  activeMovie: 1
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

const setFavoriteStatus = (movies, id) => {
  const result = movies.map((it) => {
    if (it.id === id) {
      let iit = {};
      for (const key in it) {
        if (it.hasOwnProperty(key)) {
          if (key === `isFavorite`) {
            iit[key] = !it[key];
          } else {
            iit[key] = it[key];
          }
        }
      }
      return iit;
    }
    return it;
  });
  return result;
};

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
  },
  changeFavorite: (id, isFavorite) => (dispatch, _, api) => {
    const status = isFavorite ? 1 : 0;
    console.log(status);

    return api.post(`favorite/${id}/${status}`)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.setFavorite(id, isFavorite));
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
  }),

  setFavorite: (id) => ({
    type: `SET_FAVORITE`,
    payload: id
  }),

  setActive: (id) => ({
    type: `SET_ACTIVE`,
    payload: id
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
    case `SET_FAVORITE`: return Object.assign({}, state, {
      movies: setFavoriteStatus(state.movies, action.payload),
      initialMovies: setFavoriteStatus(state.initialMoviesm, action.payload)
    });
    case `SET_ACTIVE`: return Object.assign({}, state, {
      activeMovie: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
