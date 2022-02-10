import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import taskReducer from './taskSlice'
import appReducer from './appSlice'

const store = configureStore({
    reducer: {
        menu:menuReducer,
        task:taskReducer,
        app:appReducer,
    },
})

export default store
