import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const moviesListData = [
    {
      name: `Fantastic Beasts`,
      genre: `Sci-Fi`
    },
    {
      name: `Bohemian Rhapsody`,
      genre: `Documentary`
    },
    {
      name: `Macbeth`,
      genre: `Romance`
    },
    {
      name: `Aviator`,
      genre: `Drama`
    }
  ];

  ReactDOM.render(
      <App moviesList = {moviesListData}/>,
      document.querySelector(`#root`)
  );
};

init();
