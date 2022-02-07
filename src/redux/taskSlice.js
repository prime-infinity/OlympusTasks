import { createSlice } from '@reduxjs/toolkit' 

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
      tasks: [],
    },
    reducers: {
      addTask: (state, action) => {
        state.tasks = [...state.tasks,action.payload]
      },
      deleteTask:(state,action) => {
        state.tasks = state.tasks.filter((task)=> task.id !== action.payload)
      },
      unPinTask:(state,action) => {
        state.tasks = state.tasks.map((task) => task.id === action.payload ? {
          ...task,pined:false
        }:task)
      },
      pinTask:(state,action) => {
        state.tasks = state.tasks.map((task) => task.id === action.payload ? {
          ...task,pined:true
        }:task)
      },
      markOngoing:(state,action) => {
        state.tasks = state.tasks.map((task) => task.id === action.payload ? {
          ...task,cat:1
        }:task)
      },
      markInreview:(state,action) => {
        state.tasks = state.tasks.map((task) => task.id === action.payload ? {
          ...task,cat:2
        }:task)
      },
      markDone:(state,action) => {
        state.tasks = state.tasks.map((task) => task.id === action.payload ? {
          ...task,cat:3
        }:task)
      }
    },                                                                                                                                                                                                                                                                                                              
})

export const { addTask } = taskSlice.actions
export const { deleteTask } = taskSlice.actions
export const { unPinTask } = taskSlice.actions
export const { pinTask } = taskSlice.actions
export const { markOngoing } = taskSlice.actions
export const { markInreview } = taskSlice.actions
export const { markDone } = taskSlice.actions
export default taskSlice.reducer 