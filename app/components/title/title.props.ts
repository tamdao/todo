import { TranslateOptions } from 'i18n-js/typings'
import { StyleProp, TextProps as ReactNativeTextProps, TextStyle } from 'react-native'
import { TxKeyPath } from '../../i18n'

export interface TitleProps extends ReactNativeTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * Optional options to pass to i18n.
   */
  txOptions?: TranslateOptions
  text?: string
  style?: StyleProp<TextStyle>
}
