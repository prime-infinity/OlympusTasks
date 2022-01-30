import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import taskReducer from './taskSlice'

export default configureStore({
    reducer: {
        menu:menuReducer,
        task:taskReducer,
    },
  })