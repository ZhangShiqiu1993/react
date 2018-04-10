import {createStore, combineReducers} from 'redux';
import postReducer from '../reducers/posts';
import categoryReducer from '../reducers/categories';
import commentReducer from '../reducers/comments';
import filterReducer from '../reducers/filter';

export default () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      category: categoryReducer,
      comments: commentReducer,
      filter: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
