import { useDispatch, useSelector } from "react-redux";
import { ADD_CART, ADD_FAVORITE, CLEAR_CART, CLEAR_FAVORITE, DELETE_CART, DELETE_FAVORITE, updateCartChange, updateFavoritesChange } from "../redux/actions";

export const isItemFavorite = (item) => {
    const favorite = useSelector(state => state?.Favorites);
    return favorite.includes(item);
};

export const isItemInCart = (item) => {
    const cart = useSelector(state => state?.Cart);
    return cart.some(cartItem => cartItem?.id === item?.id);
};

export const getAllCartItems = () => {
    const cart = useSelector(state => state?.Cart);
    return cart;
};

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
    const dispatch = useDispatch();
    dispatch(updateFavoritesChange(CLEAR_FAVORITE));
};

export const addCart = (item) => {
    const dispatch = useDispatch();
    dispatch(updateCartChange(ADD_CART, item));
};

export const deleteCart = (item) => {
    const dispatch = useDispatch();
    dispatch(updateCartChange(DELETE_CART, item));
};

export const clearCart = () => {
    const dispatch = useDispatch();
    dispatch(updateCartChange(CLEAR_CART));
};
