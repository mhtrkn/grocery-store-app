import { useSelector } from "react-redux";
import { ADD_CART, ADD_FAVORITE, CLEAR_CART, CLEAR_FAVORITE, DELETE_CART, DELETE_FAVORITE, updateCartChange, updateFavoritesChange } from "../redux/actions";

export const isItemFavorite = (item) => {
    const arr = useSelector(state => state?.Favorites);
    return arr.includes(item);
};

export const isItemInCart = (item) => {
    const arr = useSelector(state => state?.Cart);
    return arr.includes(item);
};

export const getTotalPrice = () => {
    const arr = useSelector(state => state?.Cart);
    let price = 0;
    for (let i = 0; i < arr.length; i++) {
        price += Number(arr[i].price);
    }
    return price;
}

export const getAllCartItems = () => {
    const cart = useSelector(state => state?.Cart);
    return cart;
};

export const howManyCartItems = (item) => {
    const cart = useSelector(state => state?.Cart);
    const count = cart.filter(items => items.id === item.id).length;

    return count
}

export const getAllFavorites = () => {
    const favorites = useSelector(state => state?.Favorites);
    return favorites;
};

export const addFavorites = (item) => {
    return updateFavoritesChange(ADD_FAVORITE, item);
};

export const deleteFavorites = (item) => {
    return updateFavoritesChange(DELETE_FAVORITE, item);
};

export const clearFavorites = () => {
    return updateFavoritesChange(CLEAR_FAVORITE);
};

export const addCart = (item) => {
    return updateCartChange(ADD_CART, item);
};

export const deleteCart = (item) => {
    return updateCartChange(DELETE_CART, item);
};

export const clearCart = () => {
    return updateCartChange(CLEAR_CART);
};
