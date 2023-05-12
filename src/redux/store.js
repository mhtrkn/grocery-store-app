import { configureStore } from '@reduxjs/toolkit'
import { currentScreenName, cartModalVisible, Cart, Favorites } from './reducer'

export const store = configureStore({
    reducer: {
        currentScreenName,
        cartModalVisible,
        Cart,
        Favorites
    },
})