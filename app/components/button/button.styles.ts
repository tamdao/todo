import { TextStyle, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const containerStyle: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.primary,
  flexDirection: 'row',
}
export const contentStyle: ViewStyle = {
  flexDirection: 'row',
}
export const iconContainerStyle: ViewStyle = {
  position: 'absolute',
  top: -6,
}
export const textStyle: TextStyle = {
  paddingHorizontal: spacing[3],
}
