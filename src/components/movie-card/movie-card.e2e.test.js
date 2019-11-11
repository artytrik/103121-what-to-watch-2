import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Header has been correctly clicked`, () => {
  const clickHandler = jest.fn();
  const preventDefault = jest.fn();
  const movieCard = shallow(<MovieCard
    name = {``}
    preview = {``}
    cardHoverHandler = {jest.fn()}
    cardHeaderClickHandler = {clickHandler}
  />);

  const titleHeaders = movieCard.find(`.small-movie-card__link`);
  titleHeaders.map((header) => header.simulate(`click`, {preventDefault}));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
