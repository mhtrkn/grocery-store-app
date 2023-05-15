import { useSelector } from "react-redux";
import { ADD_CART, ADD_FAVORITE, CLEAR_CART, CLEAR_FAVORITE, DELETE_CART, DELETE_FAVORITE, updateCartChange, updateFavoritesChange } from "../redux/actions";

export const isItemFavorite = (item) => {
    const favorite = useSelector(state => state?.Favorites);
    return favorite.includes(item);
};

export const isItemInCart = (item) => {
    const cart = useSelector(state => state?.Cart);
    return cart.includes(item);
};

export const getTotalPrice = () => {
    let result = 0;
    const cart = useSelector(state => state?.Cart);
    result += cart.map((item) => item.price)
    console.log('Deneme: ', result)
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
