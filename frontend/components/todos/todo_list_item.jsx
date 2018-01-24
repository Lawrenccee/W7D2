import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor ({ todo, receiveTodo, updateTodo, errors }) {
    super();
    this.todo = todo;
    this.receiveTodo = receiveTodo;
    this.updateTodo = updateTodo;
    this.toggleTodo = this.toggleTodo.bind(this);

    this.state = {
      detail: true
    };
  }

  toggleTodo() {
    this.todo.done = !this.todo.done;
    this.updateTodo(this.todo).then(
      () => this.todo,
      () => {this.todo.done = !this.todo.done;}
    );
  }

  render() {
    const { errors } = this.props;
    const status = this.todo.done ? "Undo" : "Done";

    return (
      <li onClick={this.handleClick}>
        {this.todo.title}
        <button onClick={() => this.toggleTodo()}>{status}{errors}</button>
        { this.state.detail ?
          <TodoDetailViewContainer todo={this.todo} />
          :
          <div></div>
        }
      </li>
    );
  }
}

export default TodoListItem;
