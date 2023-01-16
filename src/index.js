import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'; 
import './styles/main.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water plant', amount: 1200}));
store.dispatch(addExpense({ description: 'outdoor plant', amount: 1100}));


console.log(store.getState()); 

const root = ReactDOM.createRoot( document.getElementById('app'));
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
