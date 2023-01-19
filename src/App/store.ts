import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { mainReducer } from '../features/Main/mainReducer'

import { appReducer } from './appReducer'

const rootReducer = combineReducers({
  app: appReducer,
  main: mainReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store
