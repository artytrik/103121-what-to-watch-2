import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

it(`MovieCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MovieCard
      name = {``}
      preview = {``}
      cardHoverHandler = {jest.fn()}
      cardHeaderClickHandler = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
