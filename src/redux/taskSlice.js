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
        /** this will filter the arrry by name, so dups will be removed */
        state.tasks = state.tasks.filter((task)=> task.name !== action.payload)
      },
      unPinTask:(state,action) => {
        state.tasks = state.tasks.map((task) => task.name === action.payload ? {
          ...task,pined:false
        }:task)
      },
      pinTask:(state,action) => {
        state.tasks = state.tasks.map((task) => task.name === action.payload ? {
          ...task,pined:true
        }:task)
      },
    },                                                                                                                                                                                                                                                                                                              
})

export const { addTask } = taskSlice.actions
export const { deleteTask } = taskSlice.actions
export const { unPinTask } = taskSlice.actions
export const { pinTask } = taskSlice.actions
export default taskSlice.reducer 