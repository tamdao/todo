import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export type Task = {
  id: string
  title: string
  done: boolean
}

interface TaskState {
  entities: Task[]
}

const initialState: TaskState = {
  entities: [],
}

const task = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add(state, { payload }: PayloadAction<string>) {
      state.entities.push({
        id: uuidv4(),
        title: payload,
        done: false,
      })
    },
    remove(state, { payload }: PayloadAction<string>) {
      const taskId = payload
      state.entities = state.entities.filter((task) => task.id !== taskId)
    },
    toogleDone(state, { payload }: PayloadAction<string>) {
      const taskId = payload
      const task = state.entities.find((task) => task.id === taskId)
      if (task) {
        task.done = !task.done
      }
    },
  },
})

export const { add, remove, toogleDone } = task.actions

export default task.reducer
