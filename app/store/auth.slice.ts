import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: false,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated(state, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload
    },
  },
})

export const { setIsAuthenticated } = auth.actions

export default auth.reducer
