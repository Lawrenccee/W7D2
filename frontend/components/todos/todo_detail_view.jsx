import React from 'react';

const TodoDetailView = function ({ todo, deleteTodo }) {
  return (
    <div>
      {todo.body}
      <button onClick={ () => (deleteTodo(todo)) }>Delete Todo</button>
    </div>
  );
};

export default TodoDetailView;
