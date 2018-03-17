import uuid from 'uuid';
import moment from 'moment';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const LOAD_POSTS = 'LOAD_POSTS';

export const addPost = (
  {
    timestamp = moment(),
    title = 'empty',
    body = 'empty',
    author = 'empty',
    category = 'redux'
  } = {}) => ({
  type: ADD_POST,
  post: {
    id: uuid(),
    timestamp,
    title,
    body,
    author,
    category,
  }
});

export const deletePost = (post_id) => ({
  type: DELETE_POST,
  post_id
});

export const editPost = (id, updates) => ({
  type: EDIT_POST,
  id,
  updates
});

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
});

const post = {
  id: uuid(),
  timestamp: moment(),
  title: '',
  body: '',
  author: '',
  category: ''
};
