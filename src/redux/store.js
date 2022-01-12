import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'

export default configureStore({
    reducer: {
        menu:menuReducer,
    },
  })