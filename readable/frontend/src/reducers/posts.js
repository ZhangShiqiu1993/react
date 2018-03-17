import {ADD_POST, EDIT_POST, DELETE_POST, LOAD_POSTS} from '../actions/posts';
import {deletePost} from '../utils/api';

const postReducerDefaultState = [];

export default (state = postReducerDefaultState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return state.concat(action.posts);
    case DELETE_POST:
      console.log('delete', action.post_id);
      // deletePost(action.post_id);
      return state.map((post) => {
        if (post.id === action.post_id) {
          // console.log('current', post);
          // const new_state = {
          //   ...post,
          //   deleted:true
          // };
          // console.log('new', new_state);
          // return post;
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