import {loadComments} from '../actions/comments';
import {getCommentsByPost} from './api';

export const loadCommentsIntoStore = (dispatch, id) => {
  getCommentsByPost(id).then((res) => {
    dispatch(loadComments(res))
  })
};