import { configureStore } from '@reduxjs/toolkit'
import TripReducer from './ReduxSlices'

export const store = configureStore({
  reducer: {
        trip : TripReducer,
    },
})