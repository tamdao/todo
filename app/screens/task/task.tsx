import React, { FC, useCallback } from 'react'
import { View, ViewStyle, ImageBackground } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { FlashList } from '@shopify/flash-list'

import { AddTask, TaskItem } from './components'
import { add, remove, Task, toogleDone } from './task.slice'

import { NavigatorParamList } from '../../navigators/app-navigator'
import { Screen, Title, Text } from '../../components'
import { spacing } from '../../theme'
import { RootState } from '../../store'

import bg1 from './images/bg-1.jpg'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { translate } from '../../i18n'

const FULL: ViewStyle = {
  flex: 1,
}
const BG: ViewStyle = {
  flex: 1,
}
const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[3],
}
const HEADER: ViewStyle = {
  paddingVertical: spacing[3],
}

const taskKeyExtractor = (item: Task) => item.id

export const TaskScreen: FC<StackScreenProps<NavigatorParamList, 'task'>> = function () {
  const { showActionSheetWithOptions } = useActionSheet()
  const dispatch = useDispatch()

  const tasks = useSelector((state: RootState) => state.task.entities)

  const onAddTask = useCallback((value: string) => {
    if (value) {
      dispatch(add(value))
    }
  }, [])

  const onToggleDoneTask = useCallback((taskId: string) => {
    dispatch(toogleDone(taskId))
  }, [])

  const onRemoveTaskConfirm = (taskId: string) => {
    showActionSheetWithOptions(
      {
        options: [translate('task.delete'), translate('common.cancel')],
        destructiveButtonIndex: 0,
        cancelButtonIndex: 1,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          dispatch(remove(taskId))
        }
      },
    )
  }

  const renderTaskItem = useCallback(({ item }: { item: Task }) => {
    return <TaskItem task={item} onToggleDone={onToggleDoneTask} onRemove={onRemoveTaskConfirm} />
  }, [])

  return (
    <View style={FULL}>
      <ImageBackground source={bg1} resizeMode="cover" style={BG}>
        <Screen style={CONTAINER}>
          <View style={HEADER}>
            <Title tx="task.header" />
            <Text>{dayjs().format('dddd, DD MMMM')}</Text>
          </View>
          <FlashList
            renderItem={renderTaskItem}
            keyExtractor={taskKeyExtractor}
            estimatedItemSize={10}
            data={tasks}
          />
        </Screen>
        <AddTask onAddTask={onAddTask} />
      </ImageBackground>
    </View>
  )
}
