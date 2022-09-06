import { TranslateOptions } from 'i18n-js/typings'
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native'
import { TxKeyPath } from '../../i18n'
import { IconName } from '../icon/icon.props'

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * Optional options to pass to i18n.
   */
  txOptions?: TranslateOptions
  text?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  children?: React.ReactNode
  leftIcon?: IconName
}
