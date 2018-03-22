import {ADD_POST, EDIT_POST, DELETE_POST, LOAD_POSTS} from '../actions/posts';
import {deletePost, editPost, addPost} from '../utils/api';

const postReducerDefaultState = [];

export default (state = postReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        action.post
      ];
    case LOAD_POSTS:
      return state.concat(action.posts);
    case EDIT_POST:
      editPost(action.id, action.updates);
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates
          };
        } else {
          return post;
        }
      });
    case DELETE_POST:
      deletePost(action.post_id);
      return state.map((post) => {
        if (post.id === action.post_id) {
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