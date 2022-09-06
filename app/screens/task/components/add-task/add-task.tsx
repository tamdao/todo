import React, { useCallback, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Color from 'color'
import { translate } from '../../../../i18n'
import { color } from '../../../../theme'
import {
  addBtnStyle,
  inputStyle,
  keyboardStyle,
  addTaskBtnContainerStyle,
  addTaskBtnStyle,
} from './add-task.styles'
import { Button, Icon } from '../../../../components'
import { AddTaskProps } from './add-task.props'

const KEYBOARD_BEHAVIOR = Platform.OS === 'ios' ? 'padding' : 'height'
const PLACEHOLDER_TEXT_COLOR = Color(color.text).alpha(0.6).toString()

export function AddTask(props: AddTaskProps) {
  const { onAddTask } = props
  const [addingTask, setAddingTask] = useState(false)
  const [value, setValue] = useState('')

  const onShowAddTask = useCallback(() => {
    setAddingTask(true)
  }, [])

  const onSubmit = useCallback(() => {
    setAddingTask(false)
    onAddTask(value)
    setValue('')
  }, [value])

  return addingTask ? (
    <KeyboardAvoidingView behavior={KEYBOARD_BEHAVIOR} style={keyboardStyle}>
      <SafeAreaView>
        <View style={keyboardStyle}>
          <TextInput
            style={inputStyle}
            autoFocus
            keyboardAppearance="dark"
            placeholder={translate('task.add')}
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            value={value}
            onChangeText={setValue}
            onSubmitEditing={onSubmit}
          />
          <TouchableOpacity style={addBtnStyle} onPress={onSubmit}>
            <Icon name="add-circle" size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  ) : (
    <SafeAreaView>
      <View style={addTaskBtnContainerStyle}>
        <Button tx="task.add" style={addTaskBtnStyle} leftIcon="add" onPress={onShowAddTask} />
      </View>
    </SafeAreaView>
  )
}
