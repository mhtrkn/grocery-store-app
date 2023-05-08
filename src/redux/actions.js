export const UPDATE_SCREEN_NAME = "UPDATE_SCREEN_NAME";
export const VISIBLE_CHANGE = "VISIBLE_CHANGE";

export const changeScreenName = (data) => ({
    type: UPDATE_SCREEN_NAME,
    payload: data
});

export const cartModalVisible = (event) => ({
    type: VISIBLE_CHANGE,
    payload: event
})