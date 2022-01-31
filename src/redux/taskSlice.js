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
    },                                                                                                                                                                                                                                                                                                              
})

export const { addTask } = taskSlice.actions
export const { deleteTask } = taskSlice.actions
export default taskSlice.reducer 