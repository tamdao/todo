import React, { FC, useCallback, useEffect, useState } from 'react'
import { TextStyle, View, ViewStyle } from 'react-native'
import { useDispatch } from 'react-redux'
import { StackScreenProps } from '@react-navigation/stack'
import * as LocalAuthentication from 'expo-local-authentication'

import { NavigatorParamList } from '../../navigators/app-navigator'
import { Button, Screen, Title, Text } from '../../components'
import { color, spacing } from '../../theme'

import WelcomeImage from './work.svg'
import { setIsAuthenticated } from '../../store/auth.slice'

const FULL: ViewStyle = {
  flex: 1,
}

const CONTAINER: ViewStyle = {
  marginTop: spacing[8],
  alignItems: 'center',
}

const WELCOME_MESSAGE: TextStyle = {
  textAlign: 'center',
  marginBottom: spacing[4],
}

const WELCOME_IMAGE: ViewStyle = {
  marginBottom: spacing[6],
}

const FOOTER: ViewStyle = {
  paddingHorizontal: spacing[3],
  width: '100%',
}

const ERROR_MESSAGE: TextStyle = {
  color: color.error,
  marginTop: spacing[3],
  textAlign: 'center',
}

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, 'welcome'>> = function () {
  const [localAuthenticationAvailable, setLocalAuthenticationAvailable] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    if (types && types.length) {
      setLocalAuthenticationAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION) ||
          types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT) ||
          types.includes(LocalAuthentication.AuthenticationType.IRIS),
      )
    }
  }

  useEffect(() => {
    checkSupportedAuthentication()
  }, [])

  const onUnlock = useCallback(async () => {
    if (loading) {
      return
    }

    setLoading(true)
    setError(false)

    try {
      const results = await LocalAuthentication.authenticateAsync()

      if (results.success) {
        dispatch(setIsAuthenticated(true))
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <View style={FULL}>
      <Screen style={CONTAINER}>
        <Title tx="welcome.message" style={WELCOME_MESSAGE} />
        <WelcomeImage width="100%" style={WELCOME_IMAGE} />
        <View style={FOOTER}>
          {localAuthenticationAvailable ? (
            <Button tx="welcome.unlock" leftIcon="lock-closed-outline" onPress={onUnlock} />
          ) : null}

          {!!error && <Text tx="welcome.unlockFailed" style={ERROR_MESSAGE} />}
        </View>
      </Screen>
    </View>
  )
}
