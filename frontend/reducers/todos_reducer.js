import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";
import { merge } from 'lodash';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TODO:
      newState = {};
      newState[action.todo.id] = action.todo;
      return merge({}, state, newState);

    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach((todo) => {newState[todo.id] = todo;});
      return newState;

    case REMOVE_TODO:
      newState = {};

      for (let key in state) {
        if (state[key].id !== action.todo.id) {
          newState[key] = state[key];
        }
      }

      return newState;

    default:
      return state;
  }
};

export default todosReducer;



// const newTodos = [
//   { id: 1, title: "Groceries" },
//   { id: 2, title: "More Subway" },
//   { id: 3, title: "Different Todo" },
// ];
// store.getState(); // should include the newly added todo
// store.dispatch(receiveTodos(newTodos));
// store.getState(); // should return only the new todos
// store.dispatch(receiveTodo({ id: 3, title: 'New Todo' }));
// store.getState(); // should return default state object
