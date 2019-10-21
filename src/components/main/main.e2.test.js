import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Title has been correctly clicked`, () => {
  const clickHandler = jest.fn();
  const preventDefault = jest.fn();
  const main = shallow(<Main
    movies = {[
      {
        name: ``,
        genre: `Comedy`
      }
    ]}
    onTitleClick = {clickHandler}
  />);

  const titleHeaders = main.find(`.small-movie-card__link`);
  titleHeaders.map((header) => header.simulate(`click`, {preventDefault}));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
