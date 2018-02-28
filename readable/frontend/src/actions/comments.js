import uuid from 'uuid';
import moment from 'moment';


export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';

export const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  comments
});

export const createComment = ({body='', author='', parentID=0} = {}) => ({
  type: ADD_COMMENT,
  comment: {
    id: uuid(),
    timestamp: moment.valueOf(),
    body,
    author,
    parentID
  }
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const editComment = () => ({
  type: EDIT_COMMENT
});

const comment = {
  id: uuid(),
  timestamp: moment(),
  body: '',
  author: '',
  parentId: uuid()
};