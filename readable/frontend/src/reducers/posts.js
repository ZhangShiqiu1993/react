import {ADD_POST, EDIT_POST, DELETE_POST, LOAD_POSTS} from '../actions/posts';
import {deletePost} from '../utils/api';

const postReducerDefaultState = [];

export default (state = postReducerDefaultState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return state.concat(action.posts);
    case DELETE_POST:
      // TODO: remove post
      deletePost(action.id);
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            deleted: true
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};