import { createSlice } from '@reduxjs/toolkit' 

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
      tasks: [
          {
            name:"taskOne",
            note:"Note",
            pin:true,
            cat:0,
            } 
        ],
    },
    reducers: {
      addTask: (state, action) => {
        state.tasks = [...state.tasks,action.payload]
      },
    },                                                                                                                                                                                                                                                                                                              
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer 