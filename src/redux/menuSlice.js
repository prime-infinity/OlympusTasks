import { createSlice } from '@reduxjs/toolkit' 

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
      value: 0,
    },
    reducers: {
      setMenu: (state, action) => {
        state.value = action.payload
      },
    },                                                                                                                                                                                                                                                                                                              
})

export const { setMenu } = menuSlice.actions
export default menuSlice.reducer 