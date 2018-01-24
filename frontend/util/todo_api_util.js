const TodoApi = {
  fetchTodos: () => (
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/todos'
    })
  ),

  createTodo: (todo) => (
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: 'api/todos',
      data: { todo: todo }
    })
  ),

  updateTodo: (todo) => (
    $.ajax({
      method: "PATCH",
      data: {todo: todo},
      dataType: 'json',
      url: `api/todos/${todo.id}`
    })
  ),

  deleteTodo: (todo) => {
    console.log(todo);
    return $.ajax({
      method: "DELETE",
      dataType: 'json',
      url: `api/todos/${todo.id}`
    });
  }

};

export default TodoApi;
