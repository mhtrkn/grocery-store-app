import { UPDATE_SCREEN_NAME, VISIBLE_CHANGE } from './actions';

const initialState = {
    currentScreenName: '',
    cartModalVisible: false,
};

const currentScreenName = (state = initialState.currentScreenName, action) => {
    switch (action.type) {
        case UPDATE_SCREEN_NAME:
            return state = action.payload;
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
    cartModalVisible
}