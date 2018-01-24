import TodoApi from '../util/todo_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => (dispatch) => (
  TodoApi.fetchTodos()
  .then(todos => {
    dispatch(receiveTodos(todos));
  })
);

export const createTodo = (todo) => (dispatch) => (
  TodoApi.createTodo(todo)
  .then(
    respTodo => {dispatch(receiveTodo(respTodo));},
    err => {dispatch(receiveErrors(err.responseJSON));}
  )
);

export const updateTodo = (todo) => (dispatch) => (
  TodoApi.updateTodo(todo)
  .then(
    respTodo => {
      console.log(respTodo);
      dispatch(receiveTodo(respTodo));
    },
    err => {
      dispatch(receiveErrors(err.responseJSON));
    }
  )
);

export const deleteTodo = (todo) => (dispatch) => (
  TodoApi.deleteTodo(todo)
  .then(deletedTodo => {
    dispatch(removeTodo(deletedTodo));
  })
);
