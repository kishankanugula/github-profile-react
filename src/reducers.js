import { combineReducers } from 'redux';

import repositoryReducer from './Repositories/reducer';
import gistReducer from './Gists/reducer';
import userReducer from './User/reducer';
import gitHubProfileReducer from './GithubProfile/reducer';

const rootReducer = combineReducers({
	repository: repositoryReducer,
	gists: gistReducer,
	user: userReducer,
	githubProfile: gitHubProfileReducer
});

export default rootReducer;