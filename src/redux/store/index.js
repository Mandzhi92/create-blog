import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import asyncReducer from './asyncReducer'

const store = configureStore({
  reducer: { data: asyncReducer },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
})
export default store