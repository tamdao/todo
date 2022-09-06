import React from 'react'
import { Provider } from 'react-redux'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { AppNavigator } from './app/navigators/app-navigator'
import { store } from './app/store'

SplashScreen.preventAutoHideAsync()

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ActionSheetProvider>
          <AppNavigator />
        </ActionSheetProvider>
      </SafeAreaProvider>
    </Provider>
  )
}
