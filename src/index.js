import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {moviesListData} from './mocks/films.js';

const init = () => {
  ReactDOM.render(
      <App
        moviesList = {moviesListData}
      />,
      document.querySelector(`#root`)
  );
};

init();
