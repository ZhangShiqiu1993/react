import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import postReducer from '../reducers/posts';
import categoryReducer from '../reducers/categories';
import commentReducer from '../reducers/comments';
import filterReducer from '../reducers/filter';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const logger = store => next => action => {
//   console.group(action.type)
//   console.info('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   console.groupEnd(action.type)
//   return result
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      category: categoryReducer,
      comments: commentReducer,
      filter: filterReducer
    }),
    composeEnhancers(
      applyMiddleware(thunk,logger)
    )
  );
  return store;
}
