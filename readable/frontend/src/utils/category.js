import {loadCategories} from '../actions/categories';
import {getCategories} from './api';
import {loadCommentsIntoStore} from './comment';

export const loadCategoriesIntoStore = store => {
  console.log("loadCategoriesIntoStore");
  getCategories().then((res) => {
    store.dispatch(loadCategories(res))
  }).then(() => {
    loadCommentsIntoStore(store)
  })
};