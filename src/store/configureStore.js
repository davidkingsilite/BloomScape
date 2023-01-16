import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import filtersReducer from '../reducers/filters';
import expensesReducer from '../reducers/expenses';
import thunk from 'redux-thunk';

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
      composeEnhancers(applyMiddleware(thunk))
    );

  return store;
};
