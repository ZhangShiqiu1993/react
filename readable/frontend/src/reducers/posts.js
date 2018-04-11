import {ADD_POST_COMMENT, REMOVE_POST_COMMENT,ADD_POST, EDIT_POST, DELETE_POST, LOAD_POSTS, UP_VOTE_POST, DOWN_VOTE_POST} from '../actions/posts';

const postReducerDefaultState = [];

export default (state = postReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_POST_COMMENT:
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            commentCount: post.commentCount + 1
          }
        } else {
          return post;
        }
      });
    case REMOVE_POST_COMMENT:
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            commentCount: post.commentCount - 1
          }
        } else {
          return post;
        }
      });
    case UP_VOTE_POST:
      return state.map((post) => {
        if (post.id === action.post_id) {
          return {
            ...post,
            voteScore: post.voteScore + 1
          }
        } else {
          return post;
        }
      });
    case DOWN_VOTE_POST:
      return state.map((post) => {
        if (post.id === action.post_id) {
          return {
            ...post,
            voteScore: post.voteScore - 1
          }
        } else {
          return post;
        }
      });
    case ADD_POST:
      return [
        ...state,
        action.post
      ];
    case LOAD_POSTS:
      return state.concat(action.posts);
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates
          };
        } else {
          return post;
        }
      });
    case DELETE_POST:
      return state.map((post) => {
        if (post.id === action.post_id) {
          return {
            ...post,
            deleted: true
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};