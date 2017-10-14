import * as actions from './actions';
import * as actionTypes from './actionTypes';

describe('Gists User Profile Actions List', () => {

    it("Action for setting selecting index", () => {
        const index = 1;
        const expectedAction = {
            type: actionTypes.SET_SELECTED_TAB_INDEX,
            index
        };
        expect(actions.setSelectedTabIndex(index)).toEqual(expectedAction);
    });
});