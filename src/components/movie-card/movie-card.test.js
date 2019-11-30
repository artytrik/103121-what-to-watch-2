import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`MovieCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MovieCard
      id = {1}
      name = {movie.name}
      preview = {movie.preview}
      link = {movie.link}
      cardHoverHandler = {jest.fn()}
      cardHeaderClickHandler = {jest.fn()}
      cardLeaveHandler = {jest.fn()}
      isActive = {false}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
