import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {moviesListData} from './mocks/films.js';

const init = () => {
  const onTitleClick = () => {
  };

  ReactDOM.render(
      <App
        moviesList = {moviesListData}
        onTitleClick = {onTitleClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
