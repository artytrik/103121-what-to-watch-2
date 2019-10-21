import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      movies = {[{
        name: ``,
        genre: `Comedy`
      }]}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
