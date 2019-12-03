import { AsyncStorage } from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './src/reducers'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = { key: 'root', storage: AsyncStorage }

const rootReducer = combineReducers({
  ...reducers,
  formReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)
  return { store, persistor }
}
