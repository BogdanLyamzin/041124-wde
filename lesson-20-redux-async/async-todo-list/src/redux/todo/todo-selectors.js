export const selectTodo = (store) => store.todo;

export const selectCompletedTodo = (store) =>
  store.todo.items.filter((item) => item.completed);
