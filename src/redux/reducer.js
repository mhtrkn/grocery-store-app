import { UPDATE_SCREEN_NAME, VISIBLE_CHANGE, ADD_CART, DELETE_CART, CLEAR_CART, ADD_FAVORITE, DELETE_FAVORITE, CLEAR_FAVORITE } from './actions';

const initialState = {
    currentScreenName: '',
    cartModalVisible: false,
    favorites: [],
    cart: [],
};

const currentScreenName = (state = initialState.currentScreenName, action) => {
    switch (action.type) {
        case UPDATE_SCREEN_NAME:
            return state = action.payload;
        default:
            return state;
    }
}

const Favorites = (state = initialState.favorites, action) => {
    const result = state?.filter((item) => JSON.stringify(item) !== JSON.stringify(action.payload))
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.payload];
        case DELETE_FAVORITE:
            return result;
        case CLEAR_FAVORITE:
            return [];
        default:
            return state;
    }
}

const Cart = (state = initialState.cart, action) => {
    const result = state?.filter((item) => JSON.stringify(item) !== JSON.stringify(action.payload))

    switch (action.type) {
        case ADD_CART:
            return [ ...state, action.payload ];
        case DELETE_CART:
            return result;
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
}

const cartModalVisible = (state = initialState.cartModalVisible, action) => {
    switch (action.type) {
        case VISIBLE_CHANGE:
            return state = action.payload
        default:
            return state;
    }
}

export {
    currentScreenName,
    cartModalVisible,
    Cart,
    Favorites
}