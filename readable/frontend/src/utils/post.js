import {loadPosts} from '../actions/posts'
import {getPosts} from './api';

export const loadPostsIntoStore = (dispatch) => {
  getPosts().then((res) => {
    dispatch(loadPosts(res));
  });
};