import {createStore, combineReducers} from 'redux';

const expenseReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};