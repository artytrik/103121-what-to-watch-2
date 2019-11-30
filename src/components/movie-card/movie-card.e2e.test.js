import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const movie = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`Header has been correctly clicked`, () => {
  const clickHandler = jest.fn();
  const preventDefault = jest.fn();
  const movieCard = shallow(<MovieCard
    id = {1}
    name = {movie.name}
    preview = {movie.preview}
    link = {movie.link}
    cardHoverHandler = {jest.fn()}
    cardLeaveHandler = {jest.fn()}
    cardHeaderClickHandler = {clickHandler}
    isActive = {false}
  />);

  const titleHeaders = movieCard.find(`.small-movie-card__link`);
  titleHeaders.map((header) => header.simulate(`click`, {preventDefault}));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
