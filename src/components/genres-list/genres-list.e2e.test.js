import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenresList from "./genres-list.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Filter has been correctly clicked`, () => {
  const clickFilterHandler = jest.fn();
  const componentListLinksGenre = shallow(<GenresList
    movies={
      [{
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        previewImage: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
      }]
    }
    initialMovies={
      [{
        id: 1,
        genre: `Comedy`,
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        previewImage: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
      }]
    }
    clickFilterHandler={clickFilterHandler}
    currentGenre={`All genres`}
  />);

  componentListLinksGenre.find(`.catalog__genres-link`).at(0).simulate(`click`, {
    preventDefault: () => {},
    target: {
      textContent: ``
    }
  });

  expect(clickFilterHandler).toHaveBeenCalledTimes(1);
});
