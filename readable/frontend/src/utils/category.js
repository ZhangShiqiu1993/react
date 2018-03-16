import {loadCategories} from '../actions/categories';
import {getCategories} from './api';
import {loadCommentsIntoStore} from './comment';

export const loadCategoriesIntoStore = dispatch => {
  getCategories().then((res) => {
    dispatch(loadCategories(res))
  }).then(() => {
    // TODO : pass dispatch instead of store
    loadCommentsIntoStore(dispatch);
  })
};