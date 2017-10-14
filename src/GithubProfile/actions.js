import * as types from './actionTypes';

/**
 * Action to set the selected tab index.
 */
export const setSelectedTabIndex = (index) => {
    return {
        type: types.SET_SELECTED_TAB_INDEX,
        index
    }
};