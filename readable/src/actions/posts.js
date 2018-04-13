import {
  REMOVE_POST_COMMENT,
  ADD_POST,
  ADD_POST_COMMENT,
  DELETE_POST,
  EDIT_POST,
  LOAD_POSTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST
} from "./type";

export const removePostComment = (id) => ({
  type: REMOVE_POST_COMMENT,
  id
});

export const addPostComment = (id) => ({
  type:ADD_POST_COMMENT,
  id
});

export const addPost = (post) => ({
  type: ADD_POST,
  post
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

export const upVotePost = (post_id) => ({
  type: UP_VOTE_POST,
  post_id,
});

export const downVotePost = (post_id) => ({
  type: DOWN_VOTE_POST,
  post_id,
});