import * as types from './actionTypes';

const initialState = {
    selectedIndex: 0
};

/**
 * Reducer to manage the SelectedIndex State
 */
const gitHubProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SELECTED_TAB_INDEX:
            return {...state, selectedIndex: action.index};
        default:
            return state;
    }
};

export default gitHubProfileReducer;