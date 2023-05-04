import { configureStore } from '@reduxjs/toolkit'
import { currentScreenName } from './reducer'

export const store = configureStore({
    reducer: {
        currentScreenName
    },
})