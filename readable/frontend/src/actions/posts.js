export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const REMOVE_POST_COMMENT = "REMOVE_POST_COMMENT";

export const removePostComment = (id) => ({
  type: REMOVE_POST_COMMENT,
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