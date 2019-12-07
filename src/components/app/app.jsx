import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {Operation, ActionCreator} from '../../reducer.js';
import SignIn from '../sign-in/sign-in.jsx';
import {Switch, Route} from 'react-router-dom';

const App = (props) => {
  const {initialMoviesList, moviesList,
    clickFilterHandler, currentGenre, isAuthorizationRequired, submitHandler, userData} = props;

  return <Switch>
    <Route path="/" exact render={
      () => {
        return <Main
          movies={moviesList}
          initialMovies={initialMoviesList}
          clickFilterHandler={clickFilterHandler}
          currentGenre={currentGenre}
          userData={userData}
          isAuthorizationRequired={isAuthorizationRequired}
        />;
      }}>
    </Route>
    <Route path="/login" exact render={
      () => {
        return <SignIn
          submitHandler={submitHandler}
        />
      }}>
    </Route>
  </Switch>
};

const mapStateToProps = (state) => ({
  moviesList: state.movies,
  currentGenre: state.genre,
  initialMoviesList: state.initialMovies,
  isAuthorizationRequired: state.isAuthorizationRequired,
  userData: state.userData
});

const mapDispatchToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.getMoviesOnGenre(genre));
  },
  submitHandler: (email, password) => {
    dispatch(Operation.login(email, password));
  }
});

App.propTypes = {
  moviesList: PropTypes.array.isRequired,
  initialMoviesList: PropTypes.array.isRequired,
  clickFilterHandler: PropTypes.func,
  currentGenre: PropTypes.string.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  submitHandler: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
