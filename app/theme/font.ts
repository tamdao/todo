import { Platform } from 'react-native'

export const font = {
  primary: Platform.select({ ios: 'Helvetica', android: 'normal' }),
  secondary: Platform.select({ ios: 'Arial', android: 'sans-serif' }),
}
