import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {moviesListData} from './mocks/films.js';
import {reducer} from './reducer.js';
import {Provider} from 'react-redux';

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  ReactDOM.render(<Provider store={store}>
    <App
      moviesList = {moviesListData}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
