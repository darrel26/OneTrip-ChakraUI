import { configureStore } from '@reduxjs/toolkit'
import TripReducer from '../Redux/ReduxSlices'

export const store = configureStore({
  reducer: {
        trip:TripReducer
    },
  })