import React from 'react';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './src/reducers';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import axios from 'axios';

axios.defaults.baseURL = 'http://10.0.2.2:3000'; // API URL PARA O EMULADOR DO ANDROID;
axios.defaults.headers.common['Content-Type'] = 'application/json';
import MainNavigator from './src/navigators/MainNavigator';

let store = createStore(combineReducers({
  ...reducers,
  formReducer
}), applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
