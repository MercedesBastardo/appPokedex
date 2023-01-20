import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
    initialState: "",
    reducers: {
        changeName : (state, action) => {
            return action.payload
        }
    }
})

export const { changeName } = userSlice.actions;

export default userSlice.reducer;