import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const movies = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      movies = {movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
