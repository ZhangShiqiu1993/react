import {ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LOAD_COMMENTS} from '../actions/comments';

const commentReducerDefaultState = [];

export default (state = commentReducerDefaultState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return state.concat(action.comments);
    default:
      return state;
  }
}