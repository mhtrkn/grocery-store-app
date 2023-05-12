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
    const updatedFavorites = state.cart?.filter(item => item?.id !== action?.payload);
    switch (action.type) {
        case ADD_FAVORITE:
            return { ...state, favorites: [...state, action.payload] };
        case DELETE_FAVORITE:
            return { ...state, cart: updatedFavorites };
        case CLEAR_FAVORITE:
            return state = [];
        default:
            return state;
    }
}

const Cart = (state = initialState.cart, action) => {
    const updatedCart = state.cart?.filter(item => item?.id !== action?.payload);
    switch (action.type) {
        case ADD_CART:
            return { ...state, cart: [...state, action.payload] };
        case DELETE_CART:
            return { ...state, cart: updatedCart };
        case CLEAR_CART:
            return state = [];
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