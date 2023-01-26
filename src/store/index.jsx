import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice'
import  searchName  from './slices/searchName.slice'

export default configureStore({
  reducer: {
        user : userSlice,
        name : searchName
	}
})