import {ADD_POST, EDIT_POST, DELETE_POST, LOAD_POSTS} from '../actions/posts';

const postReducerDefaultState = [];

export default (state = postReducerDefaultState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;
    default:
      return state;
  }
};