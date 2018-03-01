import {loadPosts} from '../actions/posts'
import {getPosts} from './api';

export const loadPostsIntoStore = (store) => {
  getPosts().then((res) => {
    store.dispatch(loadPosts(res));
  });
};