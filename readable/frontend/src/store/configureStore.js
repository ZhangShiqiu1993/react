import {createStore, combineReducers} from 'redux';
import postReducer from '../reducers/posts';
import categoryReducer from '../reducers/categories';
import commentReducer from '../reducers/comments';
import {loadCategoriesIntoStore} from "../utils/category";
import {loadPostsIntoStore} from "../utils/post";

export default () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      category: categoryReducer,
      comments: commentReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// TODO : pass dispatch instead of store
  loadPostsIntoStore(store);
  // TODO : pass dispatch instead of store
  loadCategoriesIntoStore(store);
  return store;
}
