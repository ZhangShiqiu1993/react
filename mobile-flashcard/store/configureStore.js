import reducer from '../reducers/index'

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';


export default () => {
	const store = createStore(
		combineReducers({
			reducer
		}),
		compose(
			applyMiddleware(logger)
		)
	);
	return store;
}
