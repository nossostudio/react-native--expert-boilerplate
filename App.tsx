import React, { useEffect, useState } from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import * as Font from 'expo-font';
import { View, Platform, UIManager, AppState } from 'react-native'
import { Provider } from 'react-redux';
import MainNavigator from './src/navigators/MainNavigator';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'
import * as actions from './src/actions'

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)
  const { store, persistor } = configureStore()

  useEffect(() => {
    AppState.addEventListener('change', (nextAppState) => _handleAppStateChange(nextAppState, store))
    handleFontLoad(setIsFontLoaded)
  }, []);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  __DEV__ ? persistor.purge() : null

  if (isFontLoaded) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppearanceProvider>
            <MainNavigator />
          </AppearanceProvider>
        </PersistGate>
      </Provider>
    );
  }else{
    return <View />
  }
}

function _handleAppStateChange(nextAppState, store) {
  const currentItem = store.getState().currentItemReducer
  const appState = store.getState().appStateReducer
  if (nextAppState === 'active') {
    __DEV__ ? console.log('App has come to the foreground!') : null
    if (currentItem.isRunning === true || currentItem.isRunning === false) {
      const startTime = new Date(appState.startTime)
      const endTime = new Date(Date.now())
      const timeSpent = Math.floor((endTime.getTime() - startTime.getTime()) / (__DEV__ ? 10 : 1000))
      store.dispatch(actions.appCameToForeground(timeSpent, currentItem.isRunning))
    }
  } else {
    __DEV__ ? console.log('App has gone to the background!') : null
    if (currentItem.isRunning === true || currentItem.isRunning === false) {
      const time = new Date(Date.now())
      store.dispatch(actions.appWentToBackground(time))
    }
  }
};

async function handleFontLoad(setIsFontLoaded){
  await Font.loadAsync({
    'Roboto': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
  });
  setIsFontLoaded(true)
}