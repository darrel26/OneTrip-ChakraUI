import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location : "",
  originsDate : "",
  destinationDate: "",
  mapsLibraries: ['places']
}

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    storeOriginsDate: (state, action) => {
      state.originsDate = action.payload
    },
     storeDestinationDate: (state, action) => {
      state.destinationDate = action.payload
    },
     storeLocation: (state, action) => {
      state.location = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeDestinationDate, storeLocation, storeOriginsDate } = tripSlice.actions

export default tripSlice.reducer