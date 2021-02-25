import thunk from 'redux-thunk'
import { createReducer } from 'redux-orm'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

const middleware = [thunk]
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: false,
})

export default store
