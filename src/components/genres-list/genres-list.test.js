import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';

it(`GenresList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenresList
      movies={[
        {
          id: 1,
          name: `Fantastic Beasts: The Crimes of Grindelwald`,
          genre: `Comedy`,
          preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
        }
      ]}
      initialMovies={
        [{
          id: 1,
          genre: `Comedy`,
          name: `Fantastic Beasts: The Crimes of Grindelwald`,
          preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
        }]
      }
      clickFilterHandler={jest.fn()}
      currentGenre={`All genres`}
    />);

  expect(tree).toMatchSnapshot();
});
