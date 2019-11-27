import {ActionCreator, reducer} from "./reducer";
import {moviesListData} from "./mocks/films.js";


it(`Reducer correctly set a genre`, () => {
  expect(
      reducer(
          {
            genre: `All genres`,
            films: moviesListData
          },
          {
            type: `SET_GENRE`,
            payload: `Drama`
          }
      )
  ).toEqual({
    genre: `Drama`,
    films: moviesListData
  });
});

it(`Reducer correctly return filtered films`, () => {
  expect(
      reducer(
          {
            genre: `All genres`,
            films: moviesListData
          },
          {
            type: `FILMS_FILTER`,
            payload: moviesListData
          }
      )
  ).toEqual({
    genre: `All genres`,
    films: moviesListData
  });
});


it(`Action creator correctly set genre`, () => {
  expect(ActionCreator.setGenre(`Drama`)).toEqual({
    type: `SET_GENRE`,
    payload: `Drama`
  });
});

it(`Action creator correctly filter films`, () => {
  expect(ActionCreator.getMoviesOnGenre(`Romance`)).toEqual({
    type: `GET_MOVIES`,
    payload: [moviesListData[2]]
  });
});
