import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { IconProps } from './icon.props'

export function Icon(props: IconProps) {
  return <Ionicons name={props.name} size={props.size || 18} color={props.color || 'white'} />
}
