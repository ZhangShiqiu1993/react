import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filtersReducer
    })
  );
  return store;
}
