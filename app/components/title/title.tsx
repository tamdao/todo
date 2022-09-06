import * as React from 'react'
import { Text as ReactNativeText } from 'react-native'
import { titleStyle } from './title.styles'
import { TitleProps } from './title.props'
import { translate } from '../../i18n'

export function Title(props: TitleProps) {
  const { tx, txOptions, text, children, style: styleOverride, ...rest } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const styles = [titleStyle, styleOverride]

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  )
}
