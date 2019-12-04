import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const movies = [
  {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`
  }
];

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      moviesList={movies}
      initialMoviesList={movies}
      currentGenre={`All genres`}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
