import { createSlice } from '@reduxjs/toolkit' 
import { loadFromLocal,saveTasksToLocal } from '../helpers/controlStorage'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
      tasks: [],
    },
    reducers: {
      getTasks: (state, action) => {
        state.tasks = action.payload
      },
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

const { getTasks } = taskSlice.actions
export const { addTask } = taskSlice.actions
export const { deleteTask } = taskSlice.actions
export const { unPinTask } = taskSlice.actions
export const { pinTask } = taskSlice.actions
export const { markOngoing } = taskSlice.actions
export const { markInreview } = taskSlice.actions
export const { markDone } = taskSlice.actions

export const getInitTasks = () => async dispatch => {
  const dataFromGet = await loadFromLocal()
  dispatch(getTasks(dataFromGet))
}

export const saveTaskToAny = () => (dispatch,getState) => {
  saveTasksToLocal(getState().task.tasks);  
}

export default taskSlice.reducer 