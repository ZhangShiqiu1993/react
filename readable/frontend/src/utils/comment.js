
import {loadComments} from '../actions/comments';
import {getCommentsByPost} from './api';

export const loadCommentsIntoStore = (store) => {
  store.getState().posts.map(({id}) => {
    getCommentsByPost(id).then((res) => {
      store.dispatch(loadComments(res))
    })
  });
};