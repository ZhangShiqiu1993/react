import {SORTING} from "../actions/type";

const filtersReducerDefaultState = {
  field: 'timestamp',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SORTING:
      return {
        ...state,
        field:action.field
      };
    default:
      return state;
  }
};
