import React from 'react';
import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import { createTodo, receiveTodo, fetchTodos, updateTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
