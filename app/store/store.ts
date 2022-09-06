import { combineReducers, configureStore } from '@reduxjs/toolkit'
import * as SplashScreen from 'expo-splash-screen'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import taskReducer from '../screens/task/task.slice'
import authReducer from './auth.slice'

const reducers = combineReducers({
  auth: authReducer,
  task: taskReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

persistStore(store, undefined, () => {
  setTimeout(() => {
    SplashScreen.hideAsync()
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
