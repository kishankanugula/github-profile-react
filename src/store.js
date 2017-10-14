import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => noop => noop);

const configureStore = (initialState = {}) => {
	const enhancers = [
		applyMiddleware(thunk),
		devTools()
	];

	return createStore(
		rootReducer,
		initialState,
		compose(...enhancers)
	);
	
};

export default configureStore;