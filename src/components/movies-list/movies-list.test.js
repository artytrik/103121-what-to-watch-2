import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

it(`MoviesList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MoviesList
      movies = {[
        {
          id: 1,
          name: `Fantastic Beasts: The Crimes of Grindelwald`,
          genre: `Comedy`,
          preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
        }
      ]}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
