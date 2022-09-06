import * as React from 'react'
import { Text as ReactNativeText } from 'react-native'
import { textStyle } from './text.styles'
import { TextProps } from './text.props'
import { translate } from '../../i18n'

export function Text(props: TextProps) {
  const { tx, txOptions, text, children, style: styleOverride, ...rest } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const styles = [textStyle, styleOverride]

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  )
}
