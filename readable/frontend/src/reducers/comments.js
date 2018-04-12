import {ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LOAD_COMMENTS, DOWN_VOTE_COMMENT, UP_VOTE_COMMENT} from '../actions/comments';

const commentReducerDefaultState = [];

export default (state = commentReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        action.comment
      ];
    case EDIT_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            ...action.updates
          };
        } else {
          return comment;
        }
      });
    case DELETE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            deleted: true
          };
        } else {
          return comment;
        }
      });
    case UP_VOTE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            voteScore: comment.voteScore + 1
          }
        } else {
          return comment;
        }
      });
    case DOWN_VOTE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            voteScore: comment.voteScore - 1
          }
        } else {
          return comment;
        }
      });
    case LOAD_COMMENTS:
      return state.concat(action.comments);
    default:
      return state;
  }
}