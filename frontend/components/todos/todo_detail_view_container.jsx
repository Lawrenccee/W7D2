import React from 'react';
import {connect} from 'react-redux';
import { removeTodo, deleteTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch, { todo }) => ({
  removeTodo: () => dispatch(removeTodo(todo)),
  deleteTodo: () => dispatch(deleteTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
