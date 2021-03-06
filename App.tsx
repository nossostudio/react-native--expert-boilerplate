import React, { useEffect, useState } from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import * as Font from 'expo-font';
import { View, Platform, UIManager, AppState } from 'react-native'
import { Provider } from 'react-redux';
import MainNavigator from './src/navigators/MainNavigator';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'
import * as actions from './src/actions'

if (__DEV__) {
  require('react-devtools');
}

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)
  const { store, persistor } = configureStore()

  useEffect(() => {
    AppState.addEventListener('change', (nextAppState) => _handleAppStateChange(nextAppState, store))
    return AppState.removeEventListener('change', (nextAppState) => _handleAppStateChange(nextAppState, store))
  }, []);

  useEffect(() => {
    handleFontLoad(setIsFontLoaded)
  }, []);

  if (Platform.OS === 'android') { //This is necessary for automatic animations. See LayoutAnimation
    if (UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  //__DEV__ ? persistor.purge() : null //Clean your persisted store if you will

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
  } else {
    return <View /> //Show some 'loading' or something while font is loading
  }
}

function _handleAppStateChange(nextAppState, store) {
  if (nextAppState === 'active') {
    __DEV__ ? console.log('App has come to the foreground!') : null
    store.dispatch(actions.appCameToForeground({/* any payload you wish */ }))
  } else {
    __DEV__ ? console.log('App has gone to the background!') : null
    store.dispatch(actions.appWentToBackground({/* any payload you wish */ }))
  }
};

async function handleFontLoad(setIsFontLoaded) {
  await Font.loadAsync({
    'Roboto': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
  });
  setIsFontLoaded(true)
}