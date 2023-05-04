import { UPDATE_SCREEN_NAME } from './actions';

const initialState = {
    currentScreenName: ''
};

const currentScreenName = (state = initialState.currentScreenName, action) => {
    switch (action.type) {
        case UPDATE_SCREEN_NAME:
            return state = action.payload;
        default:
            return state;
    }
}

export {
    currentScreenName
}