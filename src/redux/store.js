import { configureStore } from '@reduxjs/toolkit'
import { currentScreenName, cartModalVisible } from './reducer'

export const store = configureStore({
    reducer: {
        currentScreenName,
        cartModalVisible
    },
})