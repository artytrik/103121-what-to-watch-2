import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {reducer, Operation} from './reducer.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureApi from './api.js';
import {applyMiddleware} from 'redux';
import {compose} from 'recompose';
import {BrowserRouter} from 'react-router-dom';

const init = () => {
  const api = configureApi((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadMovies());

  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
