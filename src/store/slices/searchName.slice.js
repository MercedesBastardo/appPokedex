import { createSlice } from '@reduxjs/toolkit';

export const searchName= createSlice({
    name: 'namePok',
    initialState: "",
    reducers: {
        namePok : (state, action) => {
            return action.payload
        }
    }
})
export const { namePok } = searchName.actions;
export default searchName.reducer;
