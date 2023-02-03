import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCreamSlice'
import { createLogger } from 'redux-logger';

const xlogger = createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), xlogger],
})

export default store
