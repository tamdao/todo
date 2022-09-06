import Color from 'color'
import { TextStyle, ViewStyle } from 'react-native'
import { color, spacing } from '../../../../theme'

export const containerStyle: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  alignItems: 'center',
  backgroundColor: color.palette.black,
  flexDirection: 'row',
  marginTop: spacing[1],
}
export const iconContainerStyle: ViewStyle = {
  position: 'absolute',
  top: -6,
}
export const iconRightContainerStyle: ViewStyle = {
  right: 0,
}
export const contentStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
}
export const textStyle: TextStyle = {
  marginLeft: 32,
  marginRight: 32,
}
export const textDoneStyle: TextStyle = {
  textDecorationLine: 'line-through',
  color: Color(color.palette.white).alpha(0.6).toString(),
}
