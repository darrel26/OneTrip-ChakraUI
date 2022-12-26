import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = tripSlice.actions

export default tripSlice.reducer