import {loadPosts} from '../actions/posts';
import {loadComments} from '../actions/comments';
import {getPosts} from './api';

export const loadPostsIntoStore = (dispatch) => {
  getPosts().then((res) => {
    dispatch(loadPosts(res));
  }).then((res)=> {
    dispatch(loadComments(res));
  });
};