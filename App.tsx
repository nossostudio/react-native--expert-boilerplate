import React from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { reducer as formReducer } from 'redux-form';

let store = createStore(combineReducers({
  ...reducers,
  formReducer
}))

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={{ height: 200, width: "100%", backgroundColor: 'purple', alignSelf: 'flex-start' }}>
        </View>
        {/* 
        Vamos usar SectionList ;) @Xande
        <SectionList /> 
        */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
