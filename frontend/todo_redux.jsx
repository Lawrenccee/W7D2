import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.fetchTodos = fetchTodos;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store} />, root);
});

// const newTodos = [
  // { id: 1, title: "new1" },
  // { id: 2, title: "new2" }
// ]
// store.getState(); // should return default state object
// store.dispatch(receiveTodo({ id: 3, title: 'New Todo' }));
// store.getState(); // should include the newly added todo
// store.dispatch(receiveTodos(newTodos));
// store.getState(); // should return only the new todos
