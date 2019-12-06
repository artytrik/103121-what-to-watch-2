import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      movies={movies}
      currentGenre={`All genres`}
      initialMovies={movies}
      userData={userData}
      isAuthorizationRequired={true}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
