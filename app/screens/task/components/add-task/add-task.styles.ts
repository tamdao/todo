import { TextStyle, ViewStyle } from 'react-native'
import { color, font, spacing } from '../../../../theme'

export const keyboardStyle: ViewStyle = {
  position: 'absolute',
  bottom: 0,
  backgroundColor: color.palette.black,
  width: '100%',
  paddingTop: spacing[3],
  borderTopLeftRadius: spacing[3],
  borderTopRightRadius: spacing[3],
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const inputStyle: TextStyle = {
  fontFamily: font.primary,
  color: color.text,
  fontSize: 15,
  padding: spacing[3],
  flex: 1,
}
export const addBtnStyle: TextStyle = {
  marginRight: spacing[3],
}
export const addTaskBtnContainerStyle: ViewStyle = {
  padding: spacing[3],
}
export const addTaskBtnStyle: ViewStyle = {
  backgroundColor: color.palette.black,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}
