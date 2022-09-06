import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { navigationRef } from './navigation-utilities'
import { TaskScreen, WelcomeScreen } from '../screens'
import { RootState } from '../store'

export type NavigatorParamList = {
  welcome: undefined
  task: undefined
}

const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcome"
    >
      {isAuthenticated ? (
        <Stack.Screen name="task" component={TaskScreen} />
      ) : (
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} theme={DarkTheme} {...props}>
      <AppStack />
    </NavigationContainer>
  )
}
