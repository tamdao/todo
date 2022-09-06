import React, { useCallback, useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Icon, Text } from '../../../../components'
import { color } from '../../../../theme'
import { TaskItemProps } from './task-item.props'
import {
  containerStyle,
  contentStyle,
  iconContainerStyle,
  iconRightContainerStyle,
  textDoneStyle,
  textStyle,
} from './task-item.styles'

export function TaskItem(props: TaskItemProps) {
  const { task, onToggleDone, onRemove } = props

  const doneContent = useMemo(() => {
    return task.done ? (
      <Icon name="checkmark-circle-outline" size={28} color={color.primary} />
    ) : (
      <Icon name="ellipse-outline" size={28} />
    )
  }, [task.done])

  const textStyles = useMemo(() => {
    return task.done ? [textStyle, textDoneStyle] : textStyle
  }, [task.done])

  const onToggleDonePress = useCallback(() => {
    onToggleDone(task.id)
  }, [onToggleDone, task.id])

  const onRemovePress = useCallback(() => {
    onRemove(task.id)
  }, [onRemove, task.id])

  return (
    <View style={containerStyle}>
      <View style={contentStyle}>
        <TouchableOpacity style={iconContainerStyle} onPress={onToggleDonePress}>
          {doneContent}
        </TouchableOpacity>
        <Text style={textStyles}>{task.title}</Text>
        <TouchableOpacity
          style={[iconContainerStyle, iconRightContainerStyle]}
          onPress={onRemovePress}
        >
          <Icon name="trash" size={28} color={color.error} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
