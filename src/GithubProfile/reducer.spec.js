import * as types from './actionTypes';
import githubProfileReducer from './reducer';

describe('Gists Reducer', () => {
    const initialState = {
        selectedIndex: 0
    };

    it(types.SET_SELECTED_TAB_INDEX, () => {
        const selectedIndex = 2;
        const newState = githubProfileReducer(initialState, {type:types.SET_SELECTED_TAB_INDEX, index: selectedIndex});
        expect(newState.selectedIndex).toEqual(selectedIndex);
    });
});