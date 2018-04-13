import {loadPosts} from '../actions/posts';
import {loadComments} from '../actions/comments';
import {getPosts, getCommentsByPost} from './api';

export const loadPostsIntoStore = (dispatch) => {
  getPosts().then((posts) => {
    dispatch(loadPosts(posts));
    return posts;
  }).then((posts)=> {
    posts.forEach(({ id }) => {
      getCommentsByPost(id).then((comment) => {
        dispatch(loadComments(comment))
      })
    })
  });
};