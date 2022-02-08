import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import taskReducer from './taskSlice'

const store = configureStore({
    reducer: {
        menu:menuReducer,
        task:taskReducer,
    },
})

export default store
