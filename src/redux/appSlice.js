//this holds the application state
import { createSlice } from '@reduxjs/toolkit' 
import { getStateFromLocal,saveStateToLocal } from '../helpers/controlStorage'


export const appSlice = createSlice({
    name: 'app',
    initialState: {
      value: 0,
    },
    reducers: {
      setApp: (state, action) => {
        state.value = action.payload
      },
    },                                                                                                                                                                                                                                                                                                              
})

const getAppState = () => async dispatch => {
    const dataFromGet = await getStateFromLocal()
    dispatch(setApp(dataFromGet))
}
getAppState()

export const saveAppStateToLocal = (e) => (dispatch,getState) => {
    saveStateToLocal(e);  
}
  

export const { setApp } = appSlice.actions
export default appSlice.reducer 