import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScreenProps } from './screen.props'
import { containerStyle, keyboardStyle } from './screen.styles'

const isIos = Platform.OS === 'ios'

export function Screen(props: ScreenProps) {
  const insets = useSafeAreaInsets()
  const insetStyle = { paddingTop: insets.top }
  const { style: styleOverride, children } = props

  const styles = [containerStyle, styleOverride, insetStyle]

  return (
    <KeyboardAvoidingView style={keyboardStyle} behavior={isIos ? 'padding' : undefined}>
      <StatusBar style="light" />
      <View style={styles}>{children}</View>
    </KeyboardAvoidingView>
  )
}
