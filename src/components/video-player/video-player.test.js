import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const movie = {
  previewImage: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<VideoPlayer
      isPlaying = {false}
      src = {movie.previewVideoLink}
      poster = {movie.previewImage}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
