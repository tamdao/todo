import Ionicons from '@expo/vector-icons/Ionicons'

export type IconName = keyof typeof Ionicons.glyphMap

export interface IconProps {
  name: IconName
  size?: number
  color?: string
}
