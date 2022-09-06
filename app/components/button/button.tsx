import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '../text/text'
import { containerStyle, contentStyle, iconContainerStyle, textStyle } from './button.styles'
import { ButtonProps } from './button.props'
import { Icon } from '../icon/icon'

export function Button(props: ButtonProps) {
  const {
    tx,
    txOptions,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    leftIcon,
    ...rest
  } = props

  const viewStyles = [containerStyle, styleOverride]
  const textStyles = [textStyle, textStyleOverride]

  const content = children || <Text tx={tx} txOptions={txOptions} text={text} style={textStyles} />
  const leftContent = leftIcon ? (
    <View style={iconContainerStyle}>
      <Icon name={leftIcon} size={28} />
    </View>
  ) : null
  const contentStyles = [
    leftContent && {
      marginLeft: 24,
    },
  ]
  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      <View style={contentStyle}>
        {leftContent}
        <View style={contentStyles}>{content}</View>
      </View>
    </TouchableOpacity>
  )
}
