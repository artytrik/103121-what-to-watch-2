import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

it(`MoviesList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MoviesList
      movies = {[
        {
          name: ``,
          genre: `Comedy`,
          preview: ``
        }
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
