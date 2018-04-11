export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  comments
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const upVoteComment = (id) => ({
  type: UP_VOTE_COMMENT,
  id,
});

export const downVoteComment = (id) => ({
  type: DOWN_VOTE_COMMENT,
  id,
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const editComment = (id, updates) => ({
  type: EDIT_COMMENT,
  id,
  updates
});
