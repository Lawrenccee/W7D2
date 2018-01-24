import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, createTodo, receiveTodo, errors, updateTodo} = this.props;

    return (
      <div>
        <ul>
          {
            todos.map((todo) => (
              <TodoListItem todo={todo} updateTodo={updateTodo} errors={errors} receiveTodo={receiveTodo} key={todo.id}/>
            ))
          }
        </ul>
        <TodoForm createTodo={createTodo} errors={errors} />
      </div>
    );
  }
}

export default TodoList;
