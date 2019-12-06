import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

Enzyme.configure({adapter: new Adapter()});

const movie = {
  previewImage: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`VideoPlayer has pause and play state`, () => {
  const videoPlayer = mount(<VideoPlayer
    isPlaying = {false}
    src = {movie.previewVideoLink}
    poster = {movie.previewImage}
  />);
  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});
  const loadStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});

  expect(videoPlayer.props().isPlaying).toBe(false);

  videoPlayer.setProps({isPlaying: true});

  expect(playStub).toHaveBeenCalledTimes(1);

  videoPlayer.setProps({isPlaying: false});

  expect(loadStub).toHaveBeenCalledTimes(1);
});
