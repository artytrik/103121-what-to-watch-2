import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const movies = [
  {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`
  }
];

const userData = {
  id: 1,
  name: `Artem`,
  email: `tema-luch`,
  avatarUrl: `tema.jpg`
};

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      moviesList={movies}
      initialMoviesList={movies}
      currentGenre={`All genres`}
      userData={userData}
      isAuthorizationRequired={true}
      submitHandler={jest.fn()}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
