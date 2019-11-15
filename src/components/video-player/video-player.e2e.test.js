import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

Enzyme.configure({adapter: new Adapter()});

const movie = {
  preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`VideoPlayer has pause and play state`, () => {
  const videoPlayer = mount(<VideoPlayer
    isPlaying = {false}
    src = {movie.link}
    poster = {movie.preview}
  />);
  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  expect(videoPlayer.isPlaying).toBe(false);
  videoPlayer.setProps({isPlaying: true});
  expect(videoPlayer.isPlaying).toBe(true);
});
