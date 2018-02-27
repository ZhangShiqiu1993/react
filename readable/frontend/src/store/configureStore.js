import {createStore, combineReducers} from 'redux';
import postReducer from '../reducers/posts';

export default () => {
  const store = createStore(
    combineReducers({
      posts: postReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
