import {loadCategories} from '../actions/categories';
import {getCategories} from './api';

export const loadCategoriesIntoStore = store => {
  getCategories().then((res) => {
    store.dispatch(loadCategories(res))
  })
};