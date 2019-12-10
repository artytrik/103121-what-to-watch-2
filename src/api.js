import axios from 'axios';
import {ActionCreator} from './reducer.js';

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.status === 401) {
      dispatch(ActionCreator.setAuthorization(true));
      history.pushState(`/login`);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export default configureAPI;
