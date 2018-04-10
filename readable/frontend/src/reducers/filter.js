import {SORT_BY_SCORE, SORT_BY_TIME} from "../actions/filters";

const filtersReducerDefaultState = {
  field: 'timestamp',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SORT_BY_TIME:
      return {
        ...state,
        field:'timestamp'
      };
    case SORT_BY_SCORE:
      return {
        ...state,
        field: 'voteScore'
      };
    default:
      return state;
  }
};
