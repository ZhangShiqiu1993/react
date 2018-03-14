import {loadCategories} from '../actions/categories';
import {getCategories} from './api';
import {loadCommentsIntoStore} from './comment';

// TODO : pass dispatch instead of store
export const loadCategoriesIntoStore = store => {
  getCategories().then((res) => {
    store.dispatch(loadCategories(res))
  }).then(() => {
    // TODO : pass dispatch instead of store
    loadCommentsIntoStore(store);
  })
};