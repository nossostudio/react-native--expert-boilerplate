import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './src/reducers';
import { reducer as formReducer } from 'redux-form';

import MainNavigator from './src/navigators/MainNavigator'

let store = createStore(combineReducers({
  ...reducers,
  formReducer
}))

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
