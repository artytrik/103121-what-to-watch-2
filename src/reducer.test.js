import {ActionCreator, reducer, Operation} from "./reducer.js";
import MockAdapter from 'axios-mock-adapter';
import configureAPI from './api.js';
import {moviesListData} from "./mocks/films.js";


it(`Reducer correctly sets a genre`, () => {
  expect(
      reducer(
          {
            genre: `All genres`,
            films: moviesListData,
            initialMovies: moviesListData
          },
          {
            type: `SET_GENRE`,
            payload: `Drama`
          }
      )
  ).toEqual({
    genre: `Drama`,
    films: moviesListData,
    initialMovies: moviesListData
  });
});

it(`Reducer correctly returns filtered movies`, () => {
  expect(
      reducer(
          {
            genre: `All genres`,
            films: moviesListData,
            initialMovies: moviesListData
          },
          {
            type: `FILTER_MOVIES`,
            payload: `All genres`
          }
      )
  ).toEqual({
    genre: `All genres`,
    films: moviesListData,
    initialMovies: moviesListData
  });
});


it(`Action creator correctly sets genre`, () => {
  expect(ActionCreator.setGenre(`Drama`)).toEqual({
    type: `SET_GENRE`,
    payload: `Drama`
  });
});

it(`Action creator correctly filters films`, () => {
  expect(ActionCreator.getMoviesOnGenre(`Romance`)).toEqual({
    type: `FILTER_MOVIES`,
    payload: `Romance`
  });
});

it(`Action creator correctly loads movies`, () => {
  const dispatch = jest.fn();
  const load = Operation.loadMovies();

  const api = configureAPI(dispatch);
  const apiMock = new MockAdapter(api);

  apiMock
    .onGet(`/films`)
    .reply(200, [{fake: true}]);

  return load(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `LOAD_MOVIES`,
        payload: [{fake: true}],
      });
    });
});
