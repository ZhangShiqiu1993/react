import {
  LOAD_COMMENTS,
  ADD_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT
} from "./type";

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
