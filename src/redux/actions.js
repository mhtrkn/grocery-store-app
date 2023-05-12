export const UPDATE_SCREEN_NAME = "UPDATE_SCREEN_NAME";
export const VISIBLE_CHANGE = "VISIBLE_CHANGE";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const CLEAR_FAVORITE = "CLEAR_FAVORITE";


export const changeScreenName = (data) => ({
    type: UPDATE_SCREEN_NAME,
    payload: data
});

export const cartModalVisible = (event) => ({
    type: VISIBLE_CHANGE,
    payload: event
})

export const updateCartChange = (type, data) => ({
    type: type,
    payload: data
})

export const updateFavoritesChange = (type, data) => ({
    type: type,
    payload: data
})