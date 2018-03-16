import {createStore, combineReducers} from 'redux';
import postReducer from '../reducers/posts';
import categoryReducer from '../reducers/categories';
import commentReducer from '../reducers/comments';

export default () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      category: categoryReducer,
      comments: commentReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
