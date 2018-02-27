import uuid from 'uuid';
import moment from 'moment';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const LOAD_POSTS = 'LOAD_POSTS';

export const addPost = () => ({
  type: ADD_POST
});

export const deletePost = () => ({
  type: DELETE_POST
});

export const editPost = () => ({
  type: EDIT_POST
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

const categories = [
  {
    name: 'react',
    path: 'react'
  },
  {
    name: 'redux',
    path: 'redux'
  },
  {
    name: 'udacity',
    path: 'udacity'
  }
]