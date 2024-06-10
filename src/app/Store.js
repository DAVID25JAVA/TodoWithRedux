import { configureStore } from '@reduxjs/toolkit'
import ReduxTodoReducer from '../features/TodoSlice'

export const store = configureStore({
    reducer: ReduxTodoReducer
    
    
})