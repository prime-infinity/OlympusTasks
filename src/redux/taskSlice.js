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
        //console.log(action.payload);
        state.tasks = state.tasks.push(action.payload)
      },
    },                                                                                                                                                                                                                                                                                                              
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer 