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
    },                                                                                                                                                                                                                                                                                                              
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer 