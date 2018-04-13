import {LOAD_CATEGORIES} from '../actions/type';

const categoryReducerDefaultState = {};

export default (state = categoryReducerDefaultState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
};